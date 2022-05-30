#include <stdio.h>
#include <string.h>

typedef struct _Endereco Endereco;

struct _Endereco
{
	char logradouro[72];
	char bairro[72];
	char cidade[72];
	char uf[72];
	char sigla[2];
	char cep[8];
	char lixo[2]; // Ao Espaço no final da linha + quebra de linha
};

int main(int argc, char **argv)
{

	FILE *f;

	Endereco e;
	int qt;

	f = fopen("ceps_RJ_ordenado.dat", "rb");

	fseek(f, 0, SEEK_END); //A cabeça de leitura vai para ao final do arquivo
	long tb = ftell(f); //Pergunta e armazena o tamnho do arquivo
	long tr = tb / sizeof(Endereco);

	long inicio = 0, fim = tr - 1;
	int qtd = 0;


	while (inicio <= fim)
	{
		int meio = (inicio + fim) / 2;

		fseek(f, meio * sizeof(Endereco), SEEK_SET); //A cabeça de leitura vai para o CEP do meio da lista
		fread(&e, sizeof(Endereco), 1, f);

		int cmp = strncmp(argv[1], e.cep, 8);
		
		if (cmp == 0)
		{
			printf("\n-------------------------------------------------\n");
			printf("Achei!! A quantidade de iteracoes que fiz foi: %d\n",qtd);
			printf("-------------------------------------------------\n");
			if (qtd == 1)
				printf("O CEP era o do meio da lista!\n");
			printf("%.72s\n%.72s\n%.72s\n%.72s\n%.2s\n%.8s\n",e.logradouro,e.bairro,e.cidade,e.uf,e.sigla,e.cep);
			break;
		}

		if(cmp < 0)
		{
			printf("Buscando entre %ld e %d...\n", inicio, meio-1);
			fim = meio-1;
		}
		else{
			printf("Buscando entre %d e %ld...\n", meio+1, fim);
			inicio = meio +1;
		}
		qtd++;
	}

fclose(f);
}