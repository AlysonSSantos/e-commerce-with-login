const addFavoritos = () => {
    document.getElementById("favoritos").style.color = "blue"
}

const removerFavoritos = () => {
    document.getElementById("favoritos").style.color = "black"
}

const confFrete = () => {
    const frete = new Object()
    frete.categoria1 = "Frete grátis"
    frete.categoria2 = "Envio: R$22,00"
    frete.categoria3 = "Envio: R$10,82"
    document.getElementById("freteInfo").innerHTML = frete.categoria1
}

const produtosEmEstoque = () => {
    var estoque = new Object()
    estoque.numero = "Em estoque: 10 Unidades"
    estoque.unico = "Modelo Único"
    document.getElementById("produtosRestantes").innerHTML = estoque.numero

}

var preco = 50.00

const confPreco = () => {
    document.getElementById("preco").innerHTML = "R$" + preco + ",00"
}

const comprarProduto = () => {
    document.getElementById("promptCompra").style.height = "35rem"
    document.getElementById("promptCompra").style.marginTop = "-35rem";
    document.getElementById("promptCompra").style.backgroundColor = "#a1a1a1"
}

const fecharPrompt = () => {
    document.getElementById("promptCompra").style.height = "0";
    document.getElementById("promptCompra").style.backgroundColor = "#fff"
    document.getElementById("promptCompra").style.marginTop = "auto";
}

const calcPreco = () => {
    var custo = preco;
    if (document.getElementById("display").value == 1) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + custo
    }
    if (document.getElementById("display").value == 2) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo)
    }
    if (document.getElementById("display").value == 3) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo)
    }
    if (document.getElementById("display").value == 4) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 5) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 6) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 7) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 8) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 9) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo + custo + custo + custo + custo)
    }
    if (document.getElementById("display").value == 10) {
        document.getElementById("maisDeUmProduto").innerHTML = "Clique para ver o preço:" + " " + "R$" + (custo + custo + custo + custo + custo + custo + custo + custo + custo + custo)
    }

}

const adicionarAoCarrinhoPaginaDois = () =>{
    Swal.fire(
        'Adicionado ao Carinho!',
        'O produto foi adicionado ao carrinho com sucesso!',
        'success'
      )
}

const selecionarCorRed = () => {
    document.getElementById("colorRed").style.border = "solid #fff"
    document.getElementById("colorBlue").style.border = "none"
    document.getElementById("colorYellow").style.border = "none"
}

const selecionarCorBlue = () => {
    document.getElementById("colorBlue").style.border = "solid #fff"
    document.getElementById("colorRed").style.border = "none"
    document.getElementById("colorYellow").style.border = "none"
}

const selecionarCorYellow = () => {
    document.getElementById("colorYellow").style.border = "solid #fff"
    document.getElementById("colorBlue").style.border = "none"
    document.getElementById("colorRed").style.border = "none"
}

const alertIcon = () =>{
    Swal.fire({
        title: 'Deseja confirmar a compra?',
        text: "Caso tenha problemas, fique tranquilo, a garantia devolve seu dinheiro :)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, confirmar!',
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Confirmado!',
            'O vendedor será notificado e seu pedido enviado em breve.',
            'success'
          )
        }else{
            Swal.fire(
            'Pedido Cancelado!',
            'Pedido cancelado pelo usuário',
            'error'
            )
        }
      })
}