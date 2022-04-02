let numeroPedidos = 0;
let valorPedidos = 0;

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

    if (pedido === pedidoAnterior) {

        console.log("ódio")
        pedido.classList.toggle("pedido-selecionado");
        const valor = pedido.querySelector(".valor")
        let valorHTML = Number(valor.innerText.replace(",", "."))

        numeroPedidos -= 1;

        valorPedidos -= valorHTML;

        return;
    }

    if (pedidoAnterior) {

        console.log("desgraça")
        const pedidoAnterior = document.querySelector(consulta);
        pedidoAnterior.classList.remove("pedido-selecionado");

        let valorAntigo = pedidoAnterior.querySelector(".valor")
        let valorAntigoHTML = Number(valorAntigo.innerText.replace(",", "."));
        valorPedidos -= valorAntigoHTML;

        let valor = pedido.querySelector(".valor");
        let valorHTML = Number(valor.innerText.replace(",", "."));
        pedido.classList.toggle("pedido-selecionado");

        valorPedidos += valorHTML;

    } else {
        console.log("pinoia")

        const valor = pedido.querySelector(".valor")
        let valorHTML = Number(valor.innerText.replace(",", "."))
        pedido.classList.toggle("pedido-selecionado");

        numeroPedidos++;
        valorPedidos += valorHTML;
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