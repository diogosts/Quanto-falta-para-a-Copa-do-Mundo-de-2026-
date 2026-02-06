function iniciarContador(elementId, dataAlvo) {
  function atualizar() {
    const agora = new Date().getTime();
    const distancia = dataAlvo - agora;

    if (distancia <= 0) {
      document.getElementById(elementId).innerHTML = "Já começou!";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }

  atualizar(); // roda imediatamente
  setInterval(atualizar, 1000); // atualiza todo segundo
}

// 🔹 Datas (horário local do Brasil)
const copa = new Date("2026-06-11T00:00:00").getTime();
const jogo1 = new Date("2026-06-13T19:00:00").getTime();
const jogo2 = new Date("2026-06-19T22:00:00").getTime();
const jogo3 = new Date("2026-06-24T19:00:00").getTime();

// 🔹 Inicia todos os contadores
iniciarContador("copa", copa);
iniciarContador("jogo1", jogo1);
iniciarContador("jogo2", jogo2);
iniciarContador("jogo3", jogo3);
