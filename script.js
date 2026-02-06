// DATAS (formato seguro)
const copa = new Date(2026, 5, 11, 0, 0, 0); // 11/06/2026

const jogos = [
  new Date(2026, 5, 13, 19, 0, 0), // Marrocos
  new Date(2026, 5, 19, 22, 0, 0), // Haiti
  new Date(2026, 5, 24, 19, 0, 0)  // Escócia
];

function atualizar(data, d, h, m, s) {
  const agora = new Date();
  const diff = data - agora;

  if (diff <= 0) {
    d.innerText = h.innerText = m.innerText = s.innerText = 0;
    return;
  }

  d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  h.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  m.innerText = Math.floor((diff / (1000 * 60)) % 60);
  s.innerText = Math.floor((diff / 1000) % 60);
}

function tick() {
  atualizar(
    copa,
    document.getElementById("copa-d"),
    document.getElementById("copa-h"),
    document.getElementById("copa-m"),
    document.getElementById("copa-s")
  );

  atualizar(jogos[0],
    j1-d, j1-h, j1-m, j1-s
  );

  atualizar(jogos[1],
    j2-d, j2-h, j2-m, j2-s
  );

  atualizar(jogos[2],
    j3-d, j3-h, j3-m, j3-s
  );
}

tick();
setInterval(tick, 1000);
