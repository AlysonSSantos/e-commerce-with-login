var itens = new Object()
itens.tipo1 = "Camiseta"
itens.tipo2 = "Casaco"
itens.tipo3 = "Calça"
itens.tipo4 = "Sapatênis"
itens.marca1 = "Nike"
itens.marca2 = "Adidas"
itens.marca3 = "Topper"
itens.marca4 = "Gucci"

const confItens = () => { //Configuração dos itens compráveis
    document.getElementById("produto001").innerHTML = itens.tipo1 + " " + itens.marca3
    document.getElementById("produto002").innerHTML = itens.tipo2 + " " + itens.marca1
    document.getElementById("produto003").innerHTML = itens.tipo3 + " " + itens.marca4
    document.getElementById("produto004").innerHTML = itens.tipo4 + " " + itens.marca2
    document.getElementById("produto005").innerHTML = itens.tipo1 + " " + itens.marca2
    document.getElementById("produto006").innerHTML = itens.tipo3 + " " + itens.marca1
    document.getElementById("produto007").innerHTML = itens.tipo3 + " " + itens.marca4
    document.getElementById("produto008").innerHTML = itens.tipo1 + " " + itens.marca1
    document.getElementById("produto009").innerHTML = itens.tipo2 + " " + itens.marca4
    document.getElementById("produto010").innerHTML = itens.tipo4 + " " + itens.marca3
    document.getElementById("produto011").innerHTML = itens.tipo1 + " " + itens.marca2
    document.getElementById("produto012").innerHTML = itens.tipo2 + " " + itens.marca2
    document.getElementById("produto013").innerHTML = itens.tipo1 + " " + itens.marca4
    document.getElementById("produto014").innerHTML = itens.tipo4 + " " + itens.marca2
    document.getElementById("produto015").innerHTML = itens.tipo4 + " " + itens.marca1
    document.getElementById("produto016").innerHTML = itens.tipo3 + " " + itens.marca2
    document.getElementById("produto017").innerHTML = itens.tipo1 + " " + itens.marca3
    document.getElementById("produto018").innerHTML = itens.tipo1 + " " + itens.marca1
    document.getElementById("produto019").innerHTML = itens.tipo3 + " " + itens.marca1
    document.getElementById("produto020").innerHTML = itens.tipo1 + " " + itens.marca4
    document.getElementById("produto021").innerHTML = itens.tipo4 + " " + itens.marca1
    document.getElementById("produto022").innerHTML = itens.tipo1 + " " + itens.marca4
    document.getElementById("produto023").innerHTML = itens.tipo3 + " " + itens.marca4
    document.getElementById("produto024").innerHTML = itens.tipo2 + " " + itens.marca2
}

const login = () => {
    window.location = "login.html"
}

const openSideBar = () => {
    document.getElementById("sideBar").style.width = "15rem"
}

const closeSideBar = () => {
    document.getElementById("sideBar").style.width = "0"
}

const openPurchases = () => {
    document.getElementById("menuCarrinho").style.backgroundColor = "#fff"
    document.getElementById("menuCarrinho").style.minWidth = "25rem"
    document.getElementById("menuCarrinho").style.minHeight = "10rem"
    document.getElementById("produto").style.display = "block"
    document.getElementById("fecharCarrinho").style.display = "block"
}

const closePurchases = () => {
    document.getElementById("menuCarrinho").style.backgroundColor = ""
    document.getElementById("menuCarrinho").style.minWidth = "0"
    document.getElementById("menuCarrinho").style.minHeight = "0"
    document.getElementById("produto").style.display = "none"
    document.getElementById("fecharCarrinho").style.display = "none"
}

const produtoInfo = () => {
    window.location = "comprando.html"
    document.getElementById("infoCompra").innerHTML="oi"
}

