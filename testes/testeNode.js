// var nome = 'teste var';
// console.log(nome);

// Fiz assim tbm funcinou 
// global.nome = 'teste';
nome = 'teste';


function teste() {
  console.log(global.nome);
  
  let nome = 'teste let';
  console.log(nome);
}

teste();