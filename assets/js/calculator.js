/**
 * Módulo de cálculos financeiros para o Simulador de Empréstimo Consignado
 */

// Função para calcular prestação pelo sistema Price (parcelas fixas)
function calcularPrestacaoPrice(valor, taxa, parcelas) {
    const taxaDecimal = taxa / 100;
    return valor * (taxaDecimal * Math.pow(1 + taxaDecimal, parcelas)) / (Math.pow(1 + taxaDecimal, parcelas) - 1);
}

// Função para calcular tabela de amortização pelo sistema Price
function calcularTabelaPrice(valor, taxa, parcelas) {
    const taxaDecimal = taxa / 100;
    const prestacao = calcularPrestacaoPrice(valor, taxa, parcelas);
    const tabela = [];
    let saldoDevedor = valor;

    for (let i = 1; i <= parcelas; i++) {
        const juros = saldoDevedor * taxaDecimal;
        const amortizacao = prestacao - juros;
        saldoDevedor -= amortizacao;

        tabela.push({
            parcela: i,
            prestacao: prestacao,
            juros: juros,
            amortizacao: amortizacao,
            saldoDevedor: Math.max(0, saldoDevedor)
        });
    }

    return tabela;
}

// Função para calcular tabela de amortização pelo sistema SAC
function calcularTabelaSAC(valor, taxa, parcelas) {
    const taxaDecimal = taxa / 100;
    const amortizacaoConstante = valor / parcelas;
    const tabela = [];
    let saldoDevedor = valor;

    for (let i = 1; i <= parcelas; i++) {
        const juros = saldoDevedor * taxaDecimal;
        const prestacao = amortizacaoConstante + juros;
        saldoDevedor -= amortizacaoConstante;

        tabela.push({
            parcela: i,
            prestacao: prestacao,
            juros: juros,
            amortizacao: amortizacaoConstante,
            saldoDevedor: Math.max(0, saldoDevedor)
        });
    }
    
    return tabela;
}

// Função para calcular resumo financeiro (totalização dos valores)
function calcularResumo(tabela) {
    const totalPrestacoes = tabela.reduce((sum, row) => sum + row.prestacao, 0);
    const totalJuros = tabela.reduce((sum, row) => sum + row.juros, 0);
    const totalAmortizacao = tabela.reduce((sum, row) => sum + row.amortizacao, 0);
    
    return {
        totalPrestacoes,
        totalJuros,
        totalAmortizacao
    };
}

// Função para calcular simulação para um banco específico
function simularEmprestimoBanco(valor, parcelas, taxaMensal, tipoSimulacao) {
    let tabela;
    let valorParcela;
    
    if (tipoSimulacao === 'price') {
        tabela = calcularTabelaPrice(valor, taxaMensal, parcelas);
        valorParcela = tabela[0].prestacao;
    } else {
        tabela = calcularTabelaSAC(valor, taxaMensal, parcelas);
        valorParcela = tabela[0].prestacao; // Primeira parcela (maior no SAC)
    }
    
    const resumo = calcularResumo(tabela);
    
    return {
        valorParcela,
        totalPago: resumo.totalPrestacoes,
        totalJuros: resumo.totalJuros,
        tabela
    };
}

// Função para calcular simulação para todos os bancos
function simularTodosBancos(valor, parcelas, bancos, tipoSimulacao) {
    return bancos.map(banco => {
        const taxaMensal = convertToNumber(banco.TaxaJurosAoMes);
        const resultado = simularEmprestimoBanco(valor, parcelas, taxaMensal, tipoSimulacao);
        
        return {
            banco: banco,
            valorParcela: resultado.valorParcela,
            totalPago: resultado.totalPago,
            totalJuros: resultado.totalJuros,
            taxaMensal: taxaMensal,
            taxaAnual: convertToNumber(banco.TaxaJurosAoAno),
            tabela: resultado.tabela
        };
    }).sort((a, b) => a.totalPago - b.totalPago);
}
