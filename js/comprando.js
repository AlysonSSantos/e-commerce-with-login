const addFavoritos = () =>{
    document.getElementById("favoritos").style.color="blue"
    document.getElementById("favInfo").innerHTML="Adicionado aos favoritos!"
    setTimeout(function(){
        document.getElementById("favInfo").innerHTML=""
    }, 1500)
}

const removerFavoritos = () => {
    document.getElementById("favoritos").style.color="black"
    document.getElementById("removeInfo").innerHTML="X Removido dos favoritos!"
    setTimeout(function(){
        document.getElementById("removeInfo").innerHTML="X"
    }, 1500)
}

