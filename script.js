// DATA DE INÍCIO DA COPA
const dataCopa = new Date("2026-06-11T00:00:00");

// CONTADOR PRINCIPAL
function atualizarCopa() {
  const agora = new Date();
  const diff = dataCopa - agora;

  if (diff <= 0) {
    document.getElementById("contador-principal").innerHTML =
      "<strong>⚽ A COPA COMEÇOU!</strong>";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

// CONTADORES DOS JOGOS DO BRASIL
function atualizarJogos() {
  const jogos = document.querySelectorAll(".jogo");

  jogos.forEach(jogo => {
    const dataJogo = new Date(jogo.dataset.data);
    const agora = new Date();
    const diff = dataJogo - agora;

    const d = jogo.querySelector(".d");
    const h = jogo.querySelector(".h");
    const m = jogo.querySelector(".m");
    const s = jogo.querySelector(".s");

    if (diff <= 0) {
      d.innerText = 0;
      h.innerText = 0;
      m.innerText = 0;
      s.innerText = 0;
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    d.innerText = dias;
    h.innerText = horas;
    m.innerText = minutos;
    s.innerText = segundos;
  });
}

// ATUALIZA TUDO
function atualizarTudo() {
  atualizarCopa();
  atualizarJogos();
}

atualizarTudo();
setInterval(atualizarTudo, 1000);
