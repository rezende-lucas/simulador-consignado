/**
 * Utilitários e funções auxiliares para o Simulador de Empréstimo Consignado
 */

// Função para formatar valores monetários
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Função para converter string com vírgula para número
function convertToNumber(value) {
    if (typeof value === 'string') {
        return parseFloat(value.replace(',', '.'));
    }
    return value;
}

// Função para alternar visibilidade de elementos
function toggleDetalhes(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = elemento.style.display === 'none' ? 'table-row' : 'none';
    }
}

// Função para alternar visibilidade de tabelas
function toggleTabela(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = elemento.style.display === 'none' ? 'block' : 'none';
    }
}

// Funções de validação
function validarFormulario(valor, parcelas) {
    if (isNaN(valor) || valor <= 0) {
        return { valido: false, mensagem: 'Por favor, insira um valor válido para o empréstimo.' };
    }
    
    if (isNaN(parcelas) || parcelas <= 0) {
        return { valido: false, mensagem: 'Por favor, selecione o número de parcelas.' };
    }
    
    return { valido: true };
}

// Expor funções essenciais no objeto window para garantir que estejam disponíveis globalmente
window.formatCurrency = formatCurrency;
window.convertToNumber = convertToNumber;
window.toggleDetalhes = toggleDetalhes;
window.toggleTabela = toggleTabela;
window.validarFormulario = validarFormulario;
window.exibirErro = function(mensagem) {
    alert(mensagem);
};