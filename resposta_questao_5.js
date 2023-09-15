function getFatorial(int) {
    let fatorial = 1;

    for(let x = int; x > 1; x--) {
        fatorial *= x;
    }

    console.log('Os amigos podem tirar a foto de ', fatorial, ' formas diferentes.');
}
  
getFatorial(3);