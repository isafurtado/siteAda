document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var nome = `document.getElementById("nome").value`;
var email = `document.getElementById("email").value`;
var telefone = `document.getElementById("telefone").value`;


function validaFormulario(){
  if(nome != "" && email != "" && telefone != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  } else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}


// esse codigo eu usei antes de fazer as variáveis:

// document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

// function validaFormulario(){
//   if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && 
//     document.getElementById("telefone").value != ""){
//     alert("Prontinho! Você receberá as novidades por email.")
//   } else{
//     alert("Por favor, preencha os campos nome, email e telefone!")
//   }
// }

