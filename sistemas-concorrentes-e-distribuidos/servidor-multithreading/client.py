import socket

def send_request(host, port, message):
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((host, port))
    
    client_socket.send(message.encode("utf-8"))
    response = client_socket.recv(1024).decode("utf-8")
    
    print(f"Resposta do servidor: {response}")
    
    client_socket.close()

if __name__ == "__main__":
    HOST = "127.0.0.1"
    PORT = 12346
    message = "Pode me prestar um serviço?"
    
    send_request(HOST, PORT, message)
