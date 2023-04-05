const componentWwraper = document.querySelectorAll('.component-wrapper');
const banner = componentWwraper[0];

const marcas = document.querySelector('.categorias-container');

setTimeout(() => {
    banner.after(marcas);
}, 1000);