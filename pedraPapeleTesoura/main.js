



let maoUsuario = parseInt(prompt("Pedra(1), papel(2) e tesoura(3)"));
let random = parseInt(Math.random() * 3 + 1);

let maoMaquina = random;

console.log(maoUsuario);
console.log(maoMaquina);



let resultado = "Sem calculo";

if (maoUsuario == 1){

    if ( maoMaquina == 1) {
        resultado = 'empate';
    }
    if ( maoMaquina == 2) {
        resultado = 'derrota';
    }
    if ( maoMaquina == 3) {
        resultado = 'vitoria';
    }
}

if (maoUsuario == 2){

    if ( maoMaquina == 1) {
        resultado = 'vitoria';
    }
    if ( maoMaquina == 2) {
        resultado = 'empate';
    }
    if ( maoMaquina == 3) {
        resultado = 'derrota';
    }
}

if (maoUsuario == 3){

    if ( maoMaquina == 1) {
        resultado = 'derrota';
    }
    if ( maoMaquina == 2) {
        resultado = 'vitoria';
    }
    if ( maoMaquina == 3) {
        resultado = 'empate';
    }
}

alert(resultado);
