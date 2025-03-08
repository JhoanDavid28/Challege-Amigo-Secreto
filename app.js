// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let = amigo = [];

function agregarAmigo(){
    // Ingreso de nombre
    let input_amigo = document.getElementById("amigo");
    let nombre_amigo = input_amigo.value;

    //console.log(nombre_amigo);
    // Validación de agregar nombre
    if(!nombre_amigo){
        alert("Debes ingresar un nombre");
        return;
    }
    // Agregar nombre de amigo 
    amigo.push(nombre_amigo);
    input_amigo.value = "";
    input_amigo.focus();
    mostrarAmigos();
}

function mostrarAmigos(){
    let lista_amigos = document.getElementById("listaAmigos");
    lista_amigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        lista_amigos.appendChild(item)
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos para sorterar");
        return;
    }
    // Sortear amigo de forma aleatoria
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo Soretedo es: ${amigoSorteado}`;

}
