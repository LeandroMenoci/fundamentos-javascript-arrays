
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
let listaDeNotasDeAlunos = [alunos, mediasDosAlunos];

// includes -> booleano
// indexOf -> ele busca o indice, no caso do exemplo é 3

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasDeAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno)
    return listaDeNotasDeAlunos[0][indice] + ', sua média é ' + listaDeNotasDeAlunos[1][indice];
  } else {
    return 'Aluno não está cadastrado.'
  }
}

console.log(exibeNomeNota('Juliana'))