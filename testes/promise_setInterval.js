function teste(numero) {


  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (numero < 0) {
        reject("Número Invalido")
      }

      resolve("Número Valido")


    }, 3000)


  })

}

// let testeNumber = teste(-1).catch(e => console.log(e));

let testeNumber = teste(1)

let nSaida = 0;

const myInterval = setInterval(() => {

  console.log(nSaida, "-", testeNumber);
  // console.log(nSaida);

  nSaida++;

  if (nSaida > 4) {

    clearInterval(myInterval);
    console.log("Stop Inteval")
  }

}, 1000)