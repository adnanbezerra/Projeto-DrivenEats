let numeroPedidos = 0;
let valorPedidos = 0;

let nomeComida;
let nomeBebida;
let nomeSobremesa;

atualizarBotao()

// Função que coordena o novo pedido
function selecionarPrato(pedido, tipo) {
    selecionar(pedido, tipo)
}

function selecionarBebida(pedido, tipo) {
    selecionar(pedido, tipo)
}

function selecionarSobremesa(pedido, tipo) {
    selecionar(pedido, tipo)
}

function selecionar(pedido, tipo) {

    let consulta = `.${tipo}` + ".pedido-selecionado";
    
    let pedidoAnterior = document.querySelector(consulta);
    
    let botao = pedido.querySelector(".icon-check");
    
    if (pedido === pedidoAnterior) {

        let botaoAnterior = pedidoAnterior.querySelector(".icon-check");

        botaoAnterior.toggle("icon-selecionado");

        pedido.classList.toggle("pedido-selecionado");
        const valor = pedido.querySelector(".valor")
        let valorHTML = Number(valor.innerText.replace(",", "."))

        numeroPedidos -= 1;

        valorPedidos -= valorHTML;

        return;
    }

    if (pedidoAnterior) {

        const pedidoAnterior = document.querySelector(consulta);
        pedidoAnterior.classList.remove("pedido-selecionado");


        let botaoAnterior = pedidoAnterior.querySelector(".icon-check");
        botaoAnterior.classList.remove("icon-selecionado");
        botao.classList.add("icon-selecionado")

        let valorAntigo = pedidoAnterior.querySelector(".valor")
        let valorAntigoHTML = Number(valorAntigo.innerText.replace(",", "."));
        valorPedidos -= valorAntigoHTML;

        let valor = pedido.querySelector(".valor");
        let valorHTML = Number(valor.innerText.replace(",", "."));
        pedido.classList.toggle("pedido-selecionado");

        valorPedidos += valorHTML;

    } else {

        botao.classList.add("icon-selecionado");

        const valor = pedido.querySelector(".valor")
        let valorHTML = Number(valor.innerText.replace(",", "."))
        pedido.classList.toggle("pedido-selecionado");

        numeroPedidos++;
        valorPedidos += valorHTML;
    }

    if (tipo === "comida") {
        nomeComida = pedido.querySelector(".nome-comida").innerHTML;
    } else if (tipo === "bebida") {
        nomeBebida = pedido.querySelector(".nome-comida").innerText;
    } else {
        nomeSobremesa = pedido.querySelector(".nome-comida").innerText;
    }

    console.log(valorPedidos)
    atualizarBotao()
}

function atualizarBotao() {
    const botao = document.querySelector(".pedir");

    if (numeroPedidos === 3) {
        botao.classList.add("botao-selecionado")
        botao.innerHTML = "Pedir";
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

function confirmarPedido() {
    const mensagem = getMensagem();

    const mensagemEncoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5583981991617?text=${mensagemEncoded}`, "_blank");
}

function getMensagem() {
    return `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${valorPedidos.toFixed(2)}`
}