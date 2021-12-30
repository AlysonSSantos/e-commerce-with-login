const openSideBar = () => {
    
    document.getElementById("sideBar").style.width="15rem";
}

const closeSideBar = () => {
    document.getElementById("sideBar").style.width="0";
}

const openPurchases = () =>{
    document.getElementById("menuCarrinho").style.backgroundColor="#fff";
    document.getElementById("menuCarrinho").style.minWidth="25rem";
    document.getElementById("menuCarrinho").style.minHeight="10rem";
    document.getElementById("produto").style.display="block";
    document.getElementById("fecharCarrinho").style.display="block";
}

const closePurchases = () => {
    document.getElementById("menuCarrinho").style.backgroundColor="";
    document.getElementById("menuCarrinho").style.minWidth="0";
    document.getElementById("menuCarrinho").style.minHeight="0";
    document.getElementById("produto").style.display="none";
    document.getElementById("fecharCarrinho").style.display="none";
}