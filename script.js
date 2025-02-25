let display = document.getElementById('display');
let historico = document.getElementById('historico');

// Adiciona números ao visor
function adicionarNumero(numero) {
    if (display.value === '0' || display.value === 'Erro') {
        display.value = numero;
    } else {
        display.value += numero;
    }
}

// Adiciona operadores ao visor
function adicionarOperador(operador) {
    if (display.value !== 'Erro') {
        display.value += operador;
    }
}

// Limpa o visor e o histórico
function limparTudo() {
    display.value = '0';
    historico.textContent = '';
}

// Limpa apenas o visor
function limparDisplay() {
    display.value = '0';
}

// Apaga o último caractere
function apagarUltimo() {
    if (display.value !== 'Erro') {
        display.value = display.value.slice(0, -1);
        if (display.value === '') {
            display.value = '0';
        }
    }
}

// Adiciona ponto decimal
function adicionarDecimal() {
    if (display.value !== 'Erro' && !display.value.includes('.')) {
        display.value += '.';
    }
}

// Inverte o sinal
function inverterSinal() {
    if (display.value !== 'Erro') {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}

// Calcula o resultado
function calcular() {
    try {
        const expressao = display.value;
        const resultado = eval(expressao);
        historico.textContent = expressao + ' =';
        display.value = resultado;
    } catch (e) {
        display.value = 'Erro';
    }
}

// Potência (x^y)
function calcularPotencia() {
    if (display.value !== 'Erro') {
        display.value += '**';
    }
}

// Raiz quadrada (√)
function calcularRaizQuadrada() {
    if (display.value !== 'Erro') {
        const valor = parseFloat(display.value);
        if (valor >= 0) {
            historico.textContent = '√(' + valor + ') =';
            display.value = Math.sqrt(valor);
        } else {
            display.value = 'Erro';
        }
    }
}

// Fatorial (!)
function calcularFatorial() {
    if (display.value !== 'Erro') {
        const valor = parseInt(display.value);
        if (valor >= 0) {
            let fatorial = 1;
            for (let i = 2; i <= valor; i++) {
                fatorial *= i;
            }
            historico.textContent = valor + '! =';
            display.value = fatorial;
        } else {
            display.value = 'Erro';
        }
    }
}

// Adiciona π (pi)
function adicionarPi() {
    if (display.value === '0' || display.value === 'Erro') {
        display.value = Math.PI;
    } else {
        display.value += Math.PI;
    }
}

// Adiciona e (constante de Euler)
function adicionarEuler() {
    if (display.value === '0' || display.value === 'Erro') {
        display.value = Math.E;
    } else {
        display.value += Math.E;
    }
}

// Suporte ao teclado
document.addEventListener('keydown', function (event) {
    const tecla = event.key;

    // Teclas numéricas (0-9)
    if (/[0-9]/.test(tecla)) {
        adicionarNumero(tecla);
    }

    // Operadores (+, -, *, /)
    else if (['+', '-', '*', '/'].includes(tecla)) {
        adicionarOperador(tecla);
    }

    // Tecla Enter ou = (calcular)
    else if (tecla === 'Enter' || tecla === '=') {
        calcular();
    }

    // Tecla Backspace (apagar último caractere)
    else if (tecla === 'Backspace') {
        apagarUltimo();
    }

    // Tecla Escape (limpar visor)
    else if (tecla === 'Escape') {
        limparDisplay();
    }

    // Tecla . (ponto decimal)
    else if (tecla === '.') {
        adicionarDecimal();
    }

    // Tecla ^ (potência)
    else if (tecla === '^') {
        calcularPotencia();
    }

    // Tecla r (raiz quadrada)
    else if (tecla === 'r') {
        calcularRaizQuadrada();
    }

    // Tecla ! (fatorial)
    else if (tecla === '!') {
        calcularFatorial();
    }

    // Tecla p (pi)
    else if (tecla === 'p') {
        adicionarPi();
    }

    // Tecla e (constante de Euler)
    else if (tecla === 'e') {
        adicionarEuler();
    }
});
