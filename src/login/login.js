// FUNÇÃO PARA MOSTRAR E ESCONDER A SENHA

const showAndHiddenPassword = document.getElementById(
  'showAndHiddenPasswordButton'
)
const loginPassword = document.getElementById('password')

function togglePasswordView() {
  if (loginPassword.type == 'password') {
    loginPassword.type = 'text'
    showAndHiddenPassword.textContent = 'Esconder'
  } else {
    loginPassword.type = 'password'
    showAndHiddenPassword.textContent = 'Mostrar'
  }
}

// MÉTODO POST VIA AXIOS PARA AUTENTICAÇÃO DO USUÁRIO

const API_URL = 'https://tex-game-shopping.herokuapp.com/auth/gettoken'

function login() {
  event.preventDefault()
  const username = document.getElementById('email').value
  const userpassword = document.getElementById('password').value

  const user = {
    username: username,
    userpassword: userpassword
  }

  axios
    .post(API_URL, {
      username: user.username,
      password: user.userpassword
    })
    .then(response => {
      const response = response
      console.log(response)
      console.log(response.data.errorCode)
    })
}
