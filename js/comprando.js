const addFavoritos = () =>{
    document.getElementById("favoritos").style.color="blue"
}

const removerFavoritos = () => {
    document.getElementById("favoritos").style.color="black"
}

const confFrete = () => {
    const frete = new Object ();
    frete.categoria1="Frete grátis"
    frete.categoria2="Envio: R$22,00"
    frete.categoria3="Envio: R$10,82"
    document.getElementById("freteInfo").innerHTML=frete.categoria1
}

const produtosEmEstoque = () =>{
    var estoque = new Object()
    estoque.numero="Em estoque: 10 Unidades"
    estoque.unico="Modelo Único"
    document.getElementById("produtosRestantes").innerHTML=estoque.numero;
}
