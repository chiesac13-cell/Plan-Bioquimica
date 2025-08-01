// Simulás qué finales aprobaste
const finalesAprobados = [7, 8, 12]; // Cambialo según lo que vos ya diste

document.querySelectorAll('.materia').forEach((el) => {
  const requeridos = el.dataset.finales.split(',').map(Number);
  const puedePromocionar = requeridos.every(id => finalesAprobados.includes(id));

  if (puedePromocionar) {
    el.classList.add('aprobada');
    el.title = "Podés promocionar esta materia";
  } else {
    el.title = "Todavía no podés promocionar";
  }
});
