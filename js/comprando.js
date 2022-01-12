const addFavoritos = () =>{
    document.getElementById("favoritos").style.color="blue"
    document.getElementById("favInfo").innerHTML="Adicionado aos favoritos!"
    document.getElementById("removerFavorito").style.display="block"
    setTimeout(function(){
        document.getElementById("favInfo").innerHTML=""
    }, 2500)
}

const removerFavoritos = () => {
    document.getElementById("favoritos").style.color="black"
    document.getElementById("favInfo").innerHTML="Removido dos favoritos"
    setTimeout(function(){
        document.getElementById("favInfo").innerHTML=""
    }, 2500)
}

