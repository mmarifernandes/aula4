const th = {
    nome: 'Thiago',
    idade: 16
};
// {chave1: valor, chave2: valor, chave3: valor,....}
console.log(th.nome);
th.nome = 'Thiago Gomes';
console.log(th);
console.log(th['idade']);
th['idade'] = th['idade'] + 1;
console.log(th);
th['signo'] = 'Escorpião';
console.log(th);
console.log(Object.keys(th));
const keys = Object.keys(th);
console.log(keys);
console.log(th[keys[1]]);
for (const value in th) {
    console.log(`${value}:${th[value]}`);
}
//for of é para vetores
//for in percorre as chaves do objeto e retorna as chaves
//
const curso = {
    nome: 'INFO',
    horas: 1200,
    modalidade: 'integrado'
};
console.log(curso.modalidade);
delete(curso.modalidade); // tirou a modalidade
console.log(curso.modalidade);
if (curso.curriculo) console.log(curso.curriculo); // só imprime se existe
if (curso.curriculo) console.log(curso.curriculo);
console.log(curso.curriculo || 'Sem curriculo');

//

const artista = {
    nome: 'Legião Urbana',
    albuns: [{
        nome: 'As quatro estações',
        cancoes: [{
            titulo: 'Pais e filhos',
            duracao: 5 * 60 + 8
        },
        {
            titulo: 'Mauricio',
            duracao: 3 * 60 + 18
        }
        ]
    },
    {
        nome: 'V',
        cancoes: [{
            titulo: 'Metal contra as nuvens',
            duracao: 11 * 60 + 30
        }]
    }
    ]
};
console.log(artista);
console.log(artista['albuns'][0]['nome']);
console.log(artista['albuns'][0]['cancoes'][0]['duracao']);

//
function trimLeft() {
    let r = '';
    let copy = false;
    for (let i = 0; i < this.txt.length; i++) {
        if (copy || this.txt[i] != ' ') {
            copy = true;
            r += this.txt.charAt(i);
        }
    }
    return r;
}
console.log(trimLeft('    teste'));
