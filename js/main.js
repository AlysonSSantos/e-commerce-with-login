function submit(){
    
    var login=0; //true or false
    var user=document.getElementsByName('emailUser')[0].value;
    //user = user.toLowerCase(); => se eu quisesse que não reconhecesse caracteres maiúsculos ou minúsculos
    var password = document.getElementsByName("passUser")[0].value;
    //password = password.toLowerCase();

    if(user=="user007@gmail.com" && password=="A1b2c3"){
        window.location = "main.html";
        login = 1;
    }if(login==0){
        alert("Dados incorretos, por favor, tente novamente");
    }
}