const nombres = [
  { "name": "coraline_uwu" },
  { "name": "lilcrywawa" },
  { "name": "Nikooo_Guti" },
  { "name": "Fvnkito" },
  { "name": "dollvpink" },
  { "name": "DarcNaight" },
  { "name": "Daeleplay " },
  { "name": "elprofepositivo" },
  { "name": "maebcito" },
  { "name": "blooomcita" },
  { "name": "LuchianoUC" },
  { "name": "MiueChamps" },
  { "name": "Canticat" },
  { "name": "r0gher" },
  { "name": "Lassteiner" },
  { "name": "Pabli_x" },
  { "name": "StrongoMaTT" },
  { "name": "MiiileChan" },
  { "name": "ClauRPG_" }
];

const columna1 = document.getElementById("columna1");
const columna2 = document.getElementById("columna2");
const columna3 = document.getElementById("columna3");

// Función para renderizar los nombres
function renderizarNombres(nombres) {
  columna1.innerHTML = "";
  columna2.innerHTML = "";
  columna3.innerHTML = "";

  nombres.forEach((nombre, indice) => {
    const nombreHtml = `<div class="nombre">${nombre.name} <button class="btn btn-danger eliminar">Eliminar</button></div>`;
    if (indice % 3 === 0) {
      columna1.innerHTML += nombreHtml;
    } else if (indice % 3 === 1) {
      columna2.innerHTML += nombreHtml;
    } else {
      columna3.innerHTML += nombreHtml;
    }
  });

  const botonesEliminar = document.querySelectorAll(".eliminar");
  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", () => {
      boton.parentElement.remove();
    });
  });
}

// Renderizar los nombres al cargar la página
renderizarNombres(nombres);

const inputBuscar = document.getElementById("input-buscar");

// Función para buscar nombres
function buscarNombres() {
  const valorBuscar = inputBuscar.value.toLowerCase();
  const nombresFiltrados = nombres.filter(nombre => nombre.name.toLowerCase().includes(valorBuscar));
  renderizarNombres(nombresFiltrados);
}

inputBuscar.addEventListener("keyup", buscarNombres);