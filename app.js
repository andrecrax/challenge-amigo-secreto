let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo de entrada
        input.focus();
    } else {
        alert("Por favor, digite um nome.");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>O amigo secreto sorteado foi: ${sorteado}</li>`;

    document.getElementById("listaAmigos").innerHTML = "";
    amigos = []; // Zera a lista após o sorteio
}
