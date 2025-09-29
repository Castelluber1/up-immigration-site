// Registrar o plugin
gsap.registerPlugin(ScrollTrigger);

// Seleciona todas as telas e todas as seções
const screens = document.querySelectorAll(".screen");
const features = document.querySelectorAll(".feature");

// Função para mostrar a tela correta
function showScreen(index) {
	screens.forEach((screen, i) => {
		if (i === index) {
			gsap.to(screen, { opacity: 1, scale: 1, duration: 0.5, overwrite: true });
		} else {
			gsap.to(screen, {
				opacity: 0,
				scale: 0.9,
				duration: 0.5,
				overwrite: true,
			});
		}
	});
}

// Pinar a coluna sticky por toda a rolagem dos blocos
ScrollTrigger.create({
	trigger: ".sticky",
	start: "top top",
	end: () => "+=" + features.length * window.innerHeight,
	pin: ".sticky",
});

// Cria um ScrollTrigger para cada bloco de texto
features.forEach((section, index) => {
	ScrollTrigger.create({
		trigger: section,
		start: "top center",
		onEnter: () => showScreen(index),
		onEnterBack: () => showScreen(index),
	});
});
