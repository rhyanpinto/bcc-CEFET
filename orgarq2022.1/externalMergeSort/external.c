#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct _Address Address;

struct _Address 
{
	char publicPlace[72];
	char district[72];
	char city[72];
	char uf[72];
	char abbreviation[2];
	char zipCode[8];
	char trash[2];
};

int compare(const void *e1, const void *e2);

void mergeSort(int parts , long totalRegisters, FILE* fd);

void merge(int parts, int* leftPart, int* rightPart, int* next, int* pair);


int main(int argc, char**argv) 
{
	FILE *fd;
	long qtd, position;
	int parts;

	fd = fopen("cep.dat","rb");

	fseek(fd, 0, SEEK_END);
	position = ftell(fd);
	qtd = position / sizeof(Address);
	rewind(fd);

	printf("Number of parts: ");
	scanf("%d", &parts);
	
	mergeSort(parts, qtd, fd);

	fclose(fd);

	printf("Sorted data written in %d parts.\n", parts);

	int leftPart = 0;
	int rightPart = leftPart + 1;
	int next = parts;
	int pair = 1;

	while(pair < parts) 
	{
		merge(parts, &leftPart, &rightPart, &next, &pair);
		pair += 1;
	}

	printf("Sorted data merged, thank you for used me.\n");

	return 0;
}

int compare(const void *e1, const void *e2) 
{
	return strncmp(((Address*)e1)->zipCode,((Address*)e2)->zipCode,8);
}


void mergeSort(int parts, long totalRegisters, FILE* fd) 
{
	long partSize, totalWritten = 0;

	for(int i = 0; i < parts; i++) {
		if (i == parts - 1) 
		{
			partSize = totalRegisters - totalWritten;
		} 
		else 
		{
			partSize = totalRegisters / parts;
		}
		
		FILE* output; 
		Address* e; 
		char filename[13];

		e = (Address*) malloc(partSize * sizeof(Address));
		
		fread(e, sizeof(Address), partSize, fd);
		
		qsort(e, partSize, sizeof(Address), compare);

		sprintf(filename, "cep_%d.dat", i);
		
		output = fopen(filename, "wb");
		
		fwrite(e, sizeof(Address), partSize, output);
		
		fclose(output);
		
		free(e);
		
		totalWritten += partSize;
	}
}

void merge(int parts, int* leftPart, int* rightPart, int* next, int* pair) 
{
	FILE *fdA, *fdB, *fdC;
	char aFilename[13], bFilename[13], cFilename[13];

	sprintf(aFilename, "cep_%d.dat", *leftPart);
	sprintf(bFilename, "cep_%d.dat", *rightPart);
	sprintf(cFilename, "cep_%d.dat", *next);

	fdA = fopen(aFilename, "rb");
	fdB = fopen(bFilename, "rb");
	fdC = fopen(cFilename, "wb");

	Address *a, *b;

	a = (Address*) malloc(1 * sizeof(Address));
	b = (Address*) malloc(1 * sizeof(Address));

	fread(a, sizeof(Address), 1, fdA);
	fread(b, sizeof(Address), 1, fdB);
	while(!feof(fdA) && !feof(fdB)) 
	{
		if(compare(a, b) <= 0) 
		{
			fwrite(a, sizeof(Address), 1, fdC);
			fread(a, sizeof(Address), 1, fdA);
		} 
		else 
		{
			fwrite(b, sizeof(Address), 1, fdC);
			fread(b, sizeof(Address), 1, fdB);
		}
	}

	while(!feof(fdA)) 
	{
		fwrite(a, sizeof(Address), 1, fdC);
		fread(a, sizeof(Address), 1, fdA);
	}

	while(!feof(fdB)) 
	{
		fwrite(b, sizeof(Address), 1, fdC);
		fread(b, sizeof(Address), 1, fdB);
	}

	*leftPart = (*leftPart) + 2;

	if(*pair == parts - 1)
		*rightPart = (*rightPart) + 1;
	else
		*rightPart = (*rightPart) + 2;

	*next = (*next) + 1;

	free(a);
	free(b);

	fclose(fdA);
	fclose(fdB);
	fclose(fdC);

	if (remove(aFilename) == 0)
	{
		printf("\t%s DELETED\n", aFilename);
	}
	if (remove(bFilename) == 0)
	{
		printf("\t%s DELETED\n", bFilename);
	}
	
}