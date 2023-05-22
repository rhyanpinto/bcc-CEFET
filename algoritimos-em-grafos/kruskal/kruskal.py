import networkx as nx
import matplotlib.pyplot as plt

# Classe para representar a estrutura de dados
class UnionFind:
    def __init__(self, vertices):
        self.parent = {}
        self.rank = {}

        for v in vertices:
            self.parent[v] = v
            self.rank[v] = 0

    # Encontrar o representante do conjunto
    def find(self, v):
        if self.parent[v] != v:
            self.parent[v] = self.find(self.parent[v])
        return self.parent[v]

    # Unir dois conjuntos disjuntos
    def union(self, v1, v2):
        root1 = self.find(v1)
        root2 = self.find(v2)

        if root1 != root2:
            if self.rank[root1] < self.rank[root2]:
                self.parent[root1] = root2
            elif self.rank[root1] > self.rank[root2]:
                self.parent[root2] = root1
            else:
                self.parent[root2] = root1
                self.rank[root1] += 1

# Algoritmo de Kruskal
def kruskal(vertices, edges):
    # Criar a estrutura de dados
    uf = UnionFind(vertices)
    minimumSpanningTree = []
    
    edges.sort(key=lambda x: x[2])  # Ordenar as arestas pelo peso

    # Incluir as arestas na árvore geradora mínima
    for edge in edges:
        v1, v2, weight = edge

        if uf.find(v1) != uf.find(v2):  # Verificar se a inclusão da aresta forma um ciclo
            uf.union(v1, v2)
            minimumSpanningTree.append(edge)

    return minimumSpanningTree

# Ler o arquivo de entrada
def readInputFile(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()
        vertices = set()
        edges = []

        for line in lines:
            v1, v2, weight = line.split()
            vertices.add(v1)
            vertices.add(v2)
            edges.append((v1, v2, int(weight)))

        return vertices, edges

# Desenhar o grafo
def drawGraph(edges):
    G = nx.Graph()
    for edge in edges:
        v1, v2, weight = edge
        G.add_edge(v1, v2, weight=weight)
    
    pos = nx.spring_layout(G)
    edgeLabels = nx.get_edge_attributes(G, 'weight')
    
    nx.draw_networkx(G, pos, with_labels=True, node_color='skyblue', node_size=500, font_size=12)
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edgeLabels)

    plt.title("Árvore Geradora Mínima")
    plt.axis("off")
    plt.show()


def main():
    file_path = 'input.txt'
    vertices, edges = readInputFile(file_path)
    minimumSpanningTree = kruskal(vertices, edges)

    print("Árvore Geradora Mínima:")
    for edge in minimumSpanningTree:
        print(f"{edge[0]} -- {edge[1]} : {edge[2]}")

    drawGraph(minimumSpanningTree)

# Executar o programa
if __name__ == '__main__':
    main()
