const container = document.getElementById('container');
let isPainting = false; // Variável para rastrear se o mouse está pintando

container.addEventListener('mousedown', () => {
    isPainting = true; // Começa a pintura quando o botão do mouse é pressionado
});

container.addEventListener('mouseup', () => {
    isPainting = false; // Para de pintar quando o botão do mouse é solto
});

container.addEventListener('mouseleave', () => {
    isPainting = false; // Para de pintar quando o mouse sai da área da grade
});

container.addEventListener('mousemove', (event) => {
    if (isPainting) {
        const block = event.target;
        if (block.classList.contains('block')) {
            block.style.backgroundColor = 'black'; // Altere a cor conforme necessário
        }
    }
});

// Crie a grade com divs (blocos)
function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'block';
        container.appendChild(newDiv);
    }
}

// Defina o tamanho da grade
createGrid(16); // Altere o tamanho conforme necessário
