// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Você pode adicionar mais funcionalidades aqui no futuro, como:
// - Um carrossel de projetos
// - Validação de formulário de contato (se você adicionar um)
// - Efeitos de paralaxe
// - Animações ao rolar a página