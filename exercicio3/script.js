const precoproduto = document.getElementById("precoProduto").value;
const quantidade = document.getElementById("quantidadeProduto").value;
const formadepagamento = document.getElementById("formaDePagamento").value;
const desconto = document.getElementById("desconto").value;
const pix = document.getElementById("pix").value;
const dinheiro = document.getElementById("dinheiro").value;
const cartao = document.getElementById("cartao").value;

function btFinalizar(){
    const precoProduto = number(precoproduto);
    const numQuantidade = number(quantidade);
    const pagamento = formadepagamento;
    const valorTotal = precoProduto * numQuantidade;

    let resultado;

    if (pagamento === "pix"){
        resultado = (valorTotal * 0.05);
    }else if (pagamento === "dinheiro"){
        resultado = (valorTotal * 0.10);
    }else {
        resultado = valorTotal
    }

    document.getElementById("resultado").textContent = resultado;

}