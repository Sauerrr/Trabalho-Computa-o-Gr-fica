// Adiciona destaque ao passar o mouse sobre a imagem
document.querySelectorAll('.fundador-imagem').forEach((img, index) => {
    img.addEventListener('mouseover', () => {
        const descricao = document.querySelectorAll('.fundador-descricao')[index];
        img.style.transform = 'scale(1.05)'; // Aumenta a imagem levemente
        descricao.style.border = '2px solid #f5c518'; // Adiciona borda ao descrever
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Retorna ao tamanho original
        const descricao = document.querySelectorAll('.fundador-descricao')[index];
        descricao.style.border = 'none'; // Remove a borda
    });
});

// Animação ao rolar a página
const revealElements = document.querySelectorAll('.fundador');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Para animar os elementos que já estão visíveis

// Fatos sobre os fundadores
document.querySelectorAll('.fundador').forEach((fundador, index) => {
    const button = document.createElement('button');
    button.innerText = 'Saiba Mais';
    button.classList.add('saiba-mais');

    button.addEventListener('click', () => {
        const fatos = [
            'Vitor é um ávido colecionador de vinhos e participa de eventos internacionais de degustação.',
            'Vinicius já trabalhou em uma campanha publicitária premiada para uma grande marca de cosméticos.'
        ];
        alert(fatos[index]);
    });

    fundadora.appendChild(button);
});
