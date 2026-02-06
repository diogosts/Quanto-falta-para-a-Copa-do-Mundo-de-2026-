const dataCopa = new Date("2026-06-11T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCopa - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").innerHTML = "⚽ A COPA COMEÇOU!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);
