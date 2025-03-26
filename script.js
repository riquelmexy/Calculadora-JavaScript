function gerarTabuada() {
    let num = document.getElementById("numTabuada").value;
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i} <br>`;
    }
    document.getElementById("resultadoTabuada").innerHTML = resultado;
}

function calcularFormas() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let areaRetangulo = base * altura;
    let areaQuadrado = base * base;
    let areaTriangulo = (base * altura) / 2;
    document.getElementById("resultadoFormas").innerHTML = 
        `Área do Retângulo: ${areaRetangulo} <br>
         Área do Quadrado: ${areaQuadrado} <br>
         Área do Triângulo: ${areaTriangulo}`;
}

function verificarIdade() {
    let idade = document.getElementById("idade").value;
    let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
    document.getElementById("resultadoIdade").innerText = mensagem;
}

function compararNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 > num2 ? `Maior número: ${num1}` : num1 < num2 ? `Maior número: ${num2}` : "Os números são iguais.";
    document.getElementById("resultadoComparacao").innerText = resultado;
}