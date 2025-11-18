// Lección 5 - Archivo principal de JavaScript
// Ejercicio 2: desplazar suavemente al inicio al pulsar "Ir arriba"

document.addEventListener('DOMContentLoaded', () => {
	const goTopButton = document.getElementById('btn-ir-arriba');

	if (!goTopButton) {
		return;
	}

	goTopButton.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});
