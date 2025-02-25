let display = document.getElementById('display');

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

// Limpa o visor
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

// Adiciona porcentagem
function adicionarPorcentagem() {
    if (display.value !== 'Erro') {
        try {
            display.value = eval(display.value) / 100;
        } catch (e) {
            display.value = 'Erro';
        }
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

// Adiciona ponto decimal
function adicionarDecimal() {
    if (display.value !== 'Erro' && !display.value.includes('.')) {
        display.value += '.';
    }
}

// Calcula o resultado
function calcular() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}