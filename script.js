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