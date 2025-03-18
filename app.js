let amigos = [];

let adicionarAmigo = () => {
    let texto = document.getElementById("amigo").value;
    if (texto !== "" && texto !==null) {
        amigos.push(texto);
        document.getElementById("amigo").value = "";
        atualizarLista();
        }   else {
        alert("Por favor insira um nome válido");
        }
    console.log(texto);
}

let atualizarLista = () => {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
     let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

let sortearAmigo = () => {

if (amigos.length === 0) {
    alert("Por favor insira pelo menos dois nomes na lista");
    }   else {
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent = `O amigo sorteado foi : ${amigoSorteado}`;
}

}
