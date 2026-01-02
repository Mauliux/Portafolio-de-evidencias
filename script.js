// ANIMACIONES AL SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// MENÚ DESPLEGABLE
const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropdown-btn');

button.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});
