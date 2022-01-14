const addFavoritos = () => {
    document.getElementById("favoritos").style.color = "blue";
};

const removerFavoritos = () => {
    document.getElementById("favoritos").style.color = "black";
};

const confFrete = () => {
    const frete = new Object();
    frete.categoria1 = "Frete grátis";
    frete.categoria2 = "Envio: R$22,00";
    frete.categoria3 = "Envio: R$10,82";
    document.getElementById("freteInfo").innerHTML = frete.categoria1;
};

const produtosEmEstoque = () => {
    var estoque = new Object()
    estoque.numero = "Em estoque: 10 Unidades"
    estoque.unico = "Modelo Único"
    document.getElementById("produtosRestantes").innerHTML = estoque.numero;

};


const confPreco = () => {
    document.getElementById("preco").innerHTML = "R$50,00"
}

const comprarProduto = () => {
    document.getElementById("promptCompra").style.height = "35rem";
    document.getElementById("promptCompra").style.marginTop = "-35rem";
    document.getElementById("promptCompra").style.backgroundColor = "#3080e8"
}

const fecharPrompt = () => {
    document.getElementById("promptCompra").style.height = "0";
    document.getElementById("promptCompra").style.backgroundColor = "#fff"
    document.getElementById("promptCompra").style.marginTop = "auto";
}

/*
const confInput = () => {
    var $range = document.querySelector('input'),
        $value = document.querySelector('span');
        $precoProdutos = document.querySelector('input');

    $range.addEventListener('input', function () {
        $value.textContent = this.value;
    });
}
*/

/*
const precoMaisDeUm = () =>{
    custo=50;
    document.getElementById("maisDeUmProduto").innerHTML=custo+custo
}
*/

