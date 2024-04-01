import socket
import threading

def handle_client(client_socket, client_address):
    print(f"Conexão estabelecida com {client_address}")
    
    request = client_socket.recv(1024).decode("utf-8")
    print(f"Mensagem recebida do cliente {client_address}: {request}")
    
    response = f"Serviço prestado pela thread {threading.current_thread().name}"
    client_socket.send(response.encode("utf-8"))
    
    client_socket.close()
    print(f"Conexão com {client_address} encerrada")

def start_server(host, port):
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((host, port))
    server_socket.listen(5)
    print(f"Servidor ouvindo em {host}:{port}")
    
    while True:
        client_socket, client_address = server_socket.accept()
        client_handler = threading.Thread(target=handle_client, args=(client_socket, client_address))
        client_handler.start()

if __name__ == "__main__":
    HOST = "127.0.0.1"
    PORT = 12346
    start_server(HOST, PORT)
