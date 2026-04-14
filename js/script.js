window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2500); // dura 2.5 segundos
});

const imagenes = [
        { src: "img/sonic.png", size: "w-64", top: "-top-10" },
        { src: "img/sonic2.png", size: "w-100", top: "-top-4" },
        { src: "https://static.wikia.nocookie.net/soniccinematicuniverse/images/7/74/SONIC_THE_HEDGEHOG.png/revision/latest/scale-to-width-down/2132?cb=20140216131003", size: "w-100", top: "-top-2" }
    ];

    let index = 0;
    const img = document.getElementById("imagenSonic");

    setInterval(() => {
        img.classList.add("opacity-0", "scale-95");

        setTimeout(() => {
        index = (index + 1) % imagenes.length;

        const actual = imagenes[index];

        // cambiar imagen
        img.src = actual.src;

        // reset clases de tamaño y posición
        img.classList.remove("w-64", "w-72", "w-56", "-top-10", "-top-14", "-top-8");

        // aplicar nuevas
        img.classList.add(actual.size, actual.top);

        img.classList.remove("opacity-0", "scale-95");
        img.classList.add("opacity-100", "scale-100");

        }, 300);

    }, 2000);

/********* confeti */

const container = document.getElementById("confeti-container");
const btn = document.getElementById("btnConfeti");

function crearConfeti() {
  for (let i = 0; i < 80; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");

    // posición horizontal random
    confeti.style.left = Math.random() * 100 + "vw";

    // tamaño random
    const size = Math.random() * 8 + 6;
    confeti.style.width = size + "px";
    confeti.style.height = size * 1.5 + "px";

    // colores fiesta
    const colores = ["#fff", "#60a5fa", "#facc15", "#f472b6", "#34d399"];
    confeti.style.background = colores[Math.floor(Math.random() * colores.length)];

    // duración random
    confeti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    container.appendChild(confeti);

    // eliminar después
    setTimeout(() => {
      confeti.remove();
    }, 4000);
  }
}

// 🎉 CLICK
btn.addEventListener("click", crearConfeti);

// 🎉 AUTO AL CARGAR
window.addEventListener("load", () => {
  crearConfeti();
});