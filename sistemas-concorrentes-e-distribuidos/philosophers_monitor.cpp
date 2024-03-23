#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <unistd.h>
#include <cstring>

const int NUM_PHILOSOPHERS = 5;

class Monitor {
private:
    std::mutex mutex;
    std::condition_variable cv;
    bool forks[NUM_PHILOSOPHERS];

public:
    Monitor() {
        for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
            forks[i] = true;
        }
    }

    void pickUpForks(int philosopherId) {
        std::unique_lock<std::mutex> lock(mutex);

        while (!forks[philosopherId] || !forks[(philosopherId + 1) % NUM_PHILOSOPHERS]) {
            cv.wait(lock);
        }

        forks[philosopherId] = false;
        forks[(philosopherId + 1) % NUM_PHILOSOPHERS] = false;
    }

    void putDownForks(int philosopherId) {
        std::unique_lock<std::mutex> lock(mutex);

        forks[philosopherId] = true;
        forks[(philosopherId + 1) % NUM_PHILOSOPHERS] = true;

        cv.notify_all();
    }
};

void outputMessage(int i, const char* message) {
    char buffer[256];
    sprintf(buffer, "Philosopher %d %s\n", i, message);
    write(STDOUT_FILENO, buffer, strlen(buffer));
}

void philosopher(int philosopherId, Monitor& monitor) {
    while (true) {
        // Thinking
        outputMessage(philosopherId, "is thinking.");
        std::this_thread::sleep_for(std::chrono::seconds(1));

        // Pick up forks
        monitor.pickUpForks(philosopherId);
        outputMessage(philosopherId, "picked up forks.");

        // Eating
        outputMessage(philosopherId, "is eating.");
        std::this_thread::sleep_for(std::chrono::seconds(1));

        // Put down forks
        monitor.putDownForks(philosopherId);
        outputMessage(philosopherId, "put down forks.");
    }
}

int main() {
    Monitor monitor;
    std::thread philosophers[NUM_PHILOSOPHERS];

    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        philosophers[i] = std::thread(philosopher, i, std::ref(monitor));
    }

    for (int i = 0; i < NUM_PHILOSOPHERS; i++) {
        philosophers[i].join();
    }

    return 0;
}