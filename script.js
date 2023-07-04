function HandleMail() {
  const input = document.querySelector("#email")

  if (input.value) {
    alert("Obrigado por se inscrever no RocketNews 🚀")
    input.value = ""
  } else {
    alert("Insira um e-mail válido")
  }
}
