function handleCredentialResponse(response) {

  const data = jwt_decode(response.credential)
  console.log(data)

  document.getElementById("given_name").style.display = "block"
  given_name.textContent = "Bem vindo(a)" + " " + data.given_name + "!"
  setTimeout(function () {
    window.location = "index.html"
  }, 2500)

}

window.onload = function () {

  google.accounts.id.initialize({
    client_id: "176624051442-l4r924990sjj2avqiblgpnan2d3dvqbu.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "rectangular",
      text: "$ {button.text}",
      logo_alignment: "left",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}


function submit() {

  var login = 0; //true or false
  var user = document.getElementsByName('emailUser')[0].value;
  //user = user.toLowerCase(); => se eu quisesse que não reconhecesse caracteres maiúsculos ou minúsculos
  var password = document.getElementsByName("passUser")[0].value;
  //password = password.toLowerCase();

  if (user == "user007@gmail.com" && password == "A1b2c3") {
    window.location = "index.html";
    login = 1;
  }
  if (login == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Dados incorretos, tente novamente!',
      footer: 'Esqueceu sua senha?  <a href="">Redefina-a aqui</a>',
      confirmButtonColor: "#ee6b0e",
      background: '#464747',
      color: '#fff',
    })
  }
}
