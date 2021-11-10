const showAndHiddenPassword = document.querySelector('#showAndHiddenPasswordButton')
const loginPassword = document.querySelector('#password')

console.log("Fora da promoção")




togglePasswordShow() {
  console.log("dentro da função")
  if(loginPassword.type == 'password') {
    loginPassword.type = 'text'
    showAndHiddenPassword.textContent = 'Esconder'
  } else {
    loginPassword.type = 'password'
    showAndHiddenPassword.textContent = 'Mostrar'
  }
}