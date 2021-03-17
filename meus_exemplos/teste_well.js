
    let navegadores = ['Chrome', 'Firefox', 'Opera', 'Safari', 'Vivaldi'];
    
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let listaNumeros = [12, 25, 94, 32, 27, 55];

    function multiplica(numero) {
        let resultado = numero * numero;
        console.log(resultado);
    }

    function imprime(item) {
        console.log(item);
    }

    function imprimePares(numero) {
        if (numero % 2 == 0){
            console.log(numero);
        }
    }

    function imprimeImpares(numero) {
        if (numero % 2 != 0) {
            console.log(numero);
        }
    }

    
    listaNumeros.forEach(imprimePares);

    listaNumeros.forEach(imprimeImpares);

    /* navegadores.forEach(imprime); */

    /* numeros.forEach(multiplica); */




    
    /*
    for(let posicao = 0; posicao < navegadores.length; posicao++){
    
        /* console.log(navegadores[posicao]); */

        /* if(navegadores[posicao] == 'Firefox') {
            alert('O firefox é o melhor!!')
        } */
   // } 

   /* for (let posicao = 1; posicao <= 10; posicao++) {

    console.log(posicao);
   } */

   /* let numeros = [14, 18, 1, 25, 58];

   for(let posicao = 0; posicao < numeros.length; posicao++) {

    console.log(numeros[posicao]);
   } */
