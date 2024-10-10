// Efeito de animação no título
const title = document.getElementById('title');
title.style.opacity = 0;
title.style.transform = 'translateY(-20px)';
setTimeout(() => {
    title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
}, 100);

// Rolagem suave para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 70; // Ajuste conforme necessário
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Usar scrollY para posição correta
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
