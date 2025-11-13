document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let expressão = '';

    document.querySelectorAll('.botao').forEach(botao => {
        botao.addEventListener('click', () => {
            const valor = botao.textContent;

            if (valor === 'C') {
                expressão = '';
                display.value = '0';

            } else if (valor === '=') {
                try {
                    // Corrige operação da raiz quadrada
                    expressão = expressão.replace(/√\(/g, 'Math.sqrt(');

                    // Ajuste para operação de multiplicação
                    expressão = expressão.replace(/x/g, '*');

                    // Corrige automaticamente qualquer falta de ")"
                    const abreParenteses = (expressão.match(/\(/g) || []).length;
                    const fechaParenteses = (expressão.match(/\)/g) || []).length;
                    expressão += ")".repeat(Math.max(0, abreParenteses - fechaParenteses));

                    // Converte expressões como "25%1000" para "(25/100)*1000"
                    expressão = expressão.replace(/(\d+(\.\d+)?)%(\d+(\.\d+)?)/g, '($1/100)*$3');

                    // Avalia a expressão final
                    const resultado = eval(expressão);
                    display.value = resultado;
                    expressão = resultado.toString();

                } catch {
                    display.value = "Erro!";
                    expressão = '';
                }

            } else if (valor === '√') {
                expressão += '√(';
                display.value = expressão;

            } else if (valor === '⌫') {
                expressão = expressão.slice(0, -1); // remove o último caractere digitado
                display.value = expressão || '0';  // exibe 0 se expressão estiver vazia

            } else {
                if (display.value === '0' && valor !== '.') {
                    expressão = valor;
                } else {
                    expressão += valor;
                }
                display.value = expressão;
            }
        });
    });
});