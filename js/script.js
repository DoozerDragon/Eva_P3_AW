function mostrarInputs() {
    const figura = document.getElementById('figura').value;
    const inputsDiv = document.getElementById('inputs');
    const resultadoDiv = document.getElementById('resultado');
    const imagenFigura = document.getElementById('imagenFigura');
    inputsDiv.style.display = 'block';
    resultadoDiv.innerHTML = '';
    imagenFigura.style.display = 'block';

    if (figura === 'cuadrado') {
        imagenFigura.src = "img/cuadrado.jpg";
        inputsDiv.innerHTML = `
            <label for="lado">Lado del cuadrado (cm):</label>
            <input type="number" id="lado" min="0">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    } else if (figura === 'triangulo') {
        imagenFigura.src = 'img/triangulo.jpg';
        inputsDiv.innerHTML = `
            <label for="base">Base del triángulo (cm):</label>
            <input type="number" id="base" min="0">
            <label for="altura">Altura del triángulo (cm):</label>
            <input type="number" id="altura" min="0">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    } else if (figura === "circulo") {
        imagenFigura.src = "img/circulo.jpg";
        inputsDiv.innerHTML = `
            <label for="radio">Radio del círculo (cm):</label>
            <input type="number" id="radio" min="0">
            <button onclick="calcularArea()">Calcular Área</button>
        `;
    } else {
        inputsDiv.style.display = 'none';
        imagenFigura.style.display = 'none';
    }
}

function calcularArea() {
    const figura = document.getElementById('figura').value;
    let area = 0;

    if (figura === 'cuadrado') {
        const lado = document.getElementById('lado').value;
        area = lado * lado;
    } else if (figura === 'triangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        area = (base * altura) / 2;
    } else if (figura === 'circulo') {
        const radio = document.getElementById('radio').value;
        area = Math.PI * radio * radio;
    }

    document.getElementById('resultado').innerHTML = `El área del ${figura} es: ${area.toFixed(2)} cm²`;
}

document.getElementById('cambiarModo').addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    const botonModo = document.getElementById('cambiarModo');
    if (document.body.classList.contains('modo-oscuro')) {
        botonModo.textContent = 'Cambiar a Modo Claro ☀️';
    } else {
        botonModo.textContent = 'Cambiar a Modo Oscuro 🌙';
    }
});