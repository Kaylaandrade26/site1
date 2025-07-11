<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simples</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="btn clear" id="clear">C</button>
            <button class="btn operator" data-op="/">÷</button>
            <button class="btn operator" data-op="*">*</button>
            <button class="btn operator" data-op="-">-</button>
            <button class="btn operator" data-op="%">%</button>
            <button class="btn" data-num="7">7</button>
            <button class="btn" data-num="8">8</button>
            <button class="btn" data-num="9">9</button>
            <button class="btn operator" data-op="+">+</button>
            <button class="btn" data-num="4">4</button>
            <button class="btn" data-num="5">5</button>
            <button class="btn" data-num="6">6</button>
            <button class="btn equal" id="equal">=</button>
            <button class="btn" data-num="1">1</button>
            <button class="btn" data-num="2">2</button>
            <button class="btn" data-num="3">3</button>
            <button class="btn" data-num="0" style="grid-column: span 2;">0</button>
            <button class="btn" data-num=".">.</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.calculator {
    background: #333;
    padding: 2rem;
    border-radius: 20px;
     box-shadow:
    0 0 20px 5px #ff69b4,   /* brilho rosa forte */
    0 0 60px 20px #ff69b455; /* brilho rosa ainda mais suave */  /* brilho rosa forte */;
    width: 320px;
    max-width: 95vw;
}

.display {
    background: #111;
    color: rgb(191, 47, 235);
    font-size: 2.5rem;
    text-align: right;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    min-height: 3rem;

}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.7rem;
}

.btn {
    padding: 1.2rem;
    font-size: 1.3rem;
    border: none;
    border-radius: 10px;
    background: #292929;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s;
}

.btn:hover {
    background: #c33bec;
}

.operator {
    background: #bd9016;
    color: #fff;
}

.operator:hover {
    background: #c33bec;

}

.equal {
    background: #660d72;
    color: #fff;
    grid-row: span 2;
}

.equal:hover {
    background: #c33bec;
}

.clear {
    background: #e53935;
    color: #fff;
}

.clear:hover {
    background: #ef5350;
}
@media (max-width: 400px) {
    .calculator {
        padding: 1rem;
        width: 98vw;
    }
    .display {
        font-size: 1.5rem;
        padding: 0.5rem;
    }
    .btn {
        padding: 0.7rem;
        font-size: 1rem;
    }
}
const display = document.getElementById('display');
let valorAtual = '0';
let valorAnterior = '';
let operador = '';
let novoNumero = false;

function atualizarDisplay() {
    display.textContent = valorAtual;
}
function calcular() {
    let anterior = parseFloat(valorAnterior);
    let atual = parseFloat(valorAtual);

    if (operador === '+') {
        valorAtual = anterior + atual;
    }
     else if (operador === '-') {
        valorAtual = anterior - atual;
    }
     else if (operador === '*') {
        valorAtual = anterior * atual;
    }
    else if (operador === '%') {
      valorAtual = valorAnterior * valorAtual / 100;
    }
     else if (operador === '/') {
        if (atual === 0) {
            alert('Divisão por zero não é permitida.');
            return;
        }
        valorAtual = anterior / atual;
    }
    valorAtual = valorAtual.toString();
    novoNumero = true;
    atualizarDisplay();
}
document.querySelectorAll('[data-num]').forEach((botao) => {
    botao.addEventListener('click', () => {
        if (novoNumero) {
            valorAtual = botao.dataset.num;
            novoNumero = false;
        } else {
            if (valorAtual === '0') {
                valorAtual = botao.dataset.num;
            } else {
                valorAtual += botao.dataset.num;
            }
        }
        atualizarDisplay();
    });
});

document.querySelectorAll('[data-op]').forEach((botao) => {
    botao.addEventListener('click', () => {
        if (operador && !novoNumero) {
            calcular();
        }
        operador = botao.dataset.op;
        valorAnterior = valorAtual;
        novoNumero = true;
    });
});

document.getElementById('equal').addEventListener('click', () => {

   valorAnterior = parseFloat(valorAnterior);
   valorAtual = parseFloat(valorAtual);
   operador = operador.trim();

   if (operador === '+') {
       valorAtual = valorAnterior + valorAtual;
   }
   else if (operador === '-') {
       valorAtual = valorAnterior - valorAtual;
   }
   else if (operador === '*') {
       valorAtual = valorAnterior * valorAtual;
   }
       else if (operador === '%') {
      valorAtual = valorAnterior * valorAtual / 100;
    }
   else if (operador === '/') {
       if (valorAtual === 0) {
           alert('Divisão por zero não é permitida.');
           return;
       }
       valorAtual = valorAnterior / valorAtual;
   }
   operador = '';
   novoNumero = true;
   atualizarDisplay();
});

document.getElementById('clear').addEventListener('click', () => {

    valorAtual = '0';
    valorAnterior = '';
    operador = '';
    novoNumero = false;

    atualizarDisplay();
}); 
