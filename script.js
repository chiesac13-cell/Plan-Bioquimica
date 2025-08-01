// Lista de finales que ya diste (actualizalo a mano por ahora)
const finalesAprobados = [7, 8, 12, 14, 18]; // ← cambiá este array con tus finales

document.querySelectorAll('.materia').forEach((el) => {
  const requeridos = el.dataset.finales ? el.dataset.finales.split(',').map(Number) : [];
  const puedePromocionar = requeridos.every(id => finalesAprobados.includes(id));

  if (puedePromocionar) {
    el.classList.add('aprobada');
    el.title = "Podés promocionar esta materia";
  } else if (requeridos.length > 0) {
    el.title = "No cumplís todas las correlativas aún";
  } else {
    el.title = "Sin correlativas registradas";
  }
});
