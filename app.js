var nameInput = document.getElementById("name");
var buttonInput = document.getElementById("button");
var respostaCertaDiv = document.getElementById("resposta-certa");
var respostaErradaDiv = document.getElementById("resposta-errada");
var audioVitoria = document.getElementById("vitoria")
var audioDerrota = document.getElementById("derrota")
var name = "";

buttonInput.addEventListener("click", () => {
  if (name.trim().toLowerCase() == "lara") {
    respostaCertaDiv.style.display = "flex";
    respostaErradaDiv.style.display = "none";
    audioVitoria.play()
  } else {
    respostaCertaDiv.style.display = "none";
    respostaErradaDiv.style.display = "flex";
    audioDerrota.play()
  }
});

nameInput.addEventListener("change", (ev) => {
  name = ev.target.value;
});
