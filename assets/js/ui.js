/**
 * Módulo de interface do usuário para o Simulador de Empréstimo Consignado
 */

// Função para gerar HTML da simulação de todos os bancos
function gerarHTMLComparativoBancos(resultados, valor, parcelas, tipoSimulacao) {
    let html = `
        <div class="result-card">
            <h4>Melhores Ofertas de Empréstimo Consignado</h4>
            <p>Valor solicitado: ${formatCurrency(valor)} em ${parcelas} parcelas pelo sistema ${tipoSimulacao === 'price' ? 'PRICE (parcelas fixas)' : 'SAC (amortização constante)'}</p>
            
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Instituição</th>
                            <th>Taxa a.m.</th>
                            <th>Taxa a.a.</th>
                            <th>${tipoSimulacao === 'price' ? 'Parcela' : '1ª Parcela'}</th>
                            <th>Total</th>
                            <th>Juros pagos</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    resultados.slice(0, 10).forEach((resultado, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="bank-info">
                        <span class="bank-logo" style="background-color: hsl(${index * 36}, 70%, 50%)">
                            ${resultado.banco.InstituicaoFinanceira.charAt(0)}
                        </span>
                        ${resultado.banco.InstituicaoFinanceira}
                    </div>
                </td>
                <td>${resultado.taxaMensal.toFixed(2).replace('.', ',')}%</td>
                <td>${resultado.taxaAnual.toFixed(2).replace('.', ',')}%</td>
                <td>${formatCurrency(resultado.valorParcela)}</td>
                <td>${formatCurrency(resultado.totalPago)}</td>
                <td>${formatCurrency(resultado.totalJuros)}</td>
                <td>
                    <button class="toggle-table" onclick="toggleDetalhes('detalhes-${index}')">
                        Detalhes
                    </button>
                </td>
            </tr>
            <tr id="detalhes-${index}" style="display: none;">
                <td colspan="8">
                    <div style="padding: 15px; background-color: #f9f9f9;">
                        <h5>Simulação detalhada - ${resultado.banco.InstituicaoFinanceira}</h5>
                        <p>Valor do empréstimo: ${formatCurrency(valor)}</p>
                        <p>Taxa de juros: ${resultado.taxaMensal.toFixed(2).replace('.', ',')}% ao mês (${resultado.taxaAnual.toFixed(2).replace('.', ',')}% ao ano)</p>
                        <p>Sistema de amortização: ${tipoSimulacao === 'price' ? 'PRICE (parcelas fixas)' : 'SAC (amortização constante)'}</p>
                        
                        <button class="toggle-table" onclick="toggleTabela('tabela-${index}')">
                            Ver tabela de amortização
                        </button>
                        
                        <div id="tabela-${index}" style="display: none; margin-top: 15px; max-height: 300px; overflow-y: auto;">
                            <table class="installment-table">
                                <thead>
                                    <tr>
                                        <th>Parcela</th>
                                        <th>Prestação</th>
                                        <th>Juros</th>
                                        <th>Amortização</th>
                                        <th>Saldo devedor</th>
                                    </tr>
                                </thead>
                                <tbody>
                    `;

        resultado.tabela.forEach(row => {
            html += `
                <tr>
                    <td>${row.parcela}</td>
                    <td>${formatCurrency(row.prestacao)}</td>
                    <td>${formatCurrency(row.juros)}</td>
                    <td>${formatCurrency(row.amortizacao)}</td>
                    <td>${formatCurrency(row.saldoDevedor)}</td>
                </tr>
            `;
        });

        html += `
                                </tbody>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    return html;
}

// Função para gerar HTML da simulação de um banco específico
function gerarHTMLBancoEspecifico(resultado, valor, parcelas, tipoSimulacao) {
    const { banco, valorParcela, totalPago, totalJuros, taxaMensal, taxaAnual, tabela } = resultado;
    
    let html = `
        <div class="result-card">
            <h4>Simulação de Empréstimo Consignado - ${banco.InstituicaoFinanceira}</h4>
            
            <div class="result-item">
                <span>Valor solicitado:</span> 
                <strong>${formatCurrency(valor)}</strong>
            </div>
            
            <div class="result-item">
                <span>Taxa de juros:</span>
                <strong>${taxaMensal.toFixed(2).replace('.', ',')}% ao mês (${taxaAnual.toFixed(2).replace('.', ',')}% ao ano)</strong>
            </div>
            
            <div class="result-item">
                <span>Sistema de amortização:</span>
                <strong>${tipoSimulacao === 'price' ? 'PRICE (parcelas fixas)' : 'SAC (amortização constante)'}</strong>
            </div>
            
            <div class="result-item">
                <span>Número de parcelas:</span>
                <strong>${parcelas}</strong>
            </div>
            
            <div class="result-item">
                <span>${tipoSimulacao === 'price' ? 'Valor da parcela:' : 'Valor da 1ª parcela:'}</span>
                <strong>${formatCurrency(valorParcela)}</strong>
            </div>
            
            <div class="result-item result-total">
                <span>Total a pagar:</span>
                <strong>${formatCurrency(totalPago)}</strong>
            </div>
            
            <div class="result-item">
                <span>Total de juros:</span>
                <strong>${formatCurrency(totalJuros)}</strong>
            </div>
            
            <button class="toggle-table" onclick="toggleTabela('tabela-detalhada')">
                Ver tabela de amortização completa
            </button>
            
            <div id="tabela-detalhada" style="display: none; margin-top: 20px; max-height: 400px; overflow-y: auto;">
                <table class="installment-table">
                    <thead>
                        <tr>
                            <th>Parcela</th>
                            <th>Prestação</th>
                            <th>Juros</th>
                            <th>Amortização</th>
                            <th>Saldo devedor</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    tabela.forEach(row => {
        html += `
            <tr>
                <td>${row.parcela}</td>
                <td>${formatCurrency(row.prestacao)}</td>
                <td>${formatCurrency(row.juros)}</td>
                <td>${formatCurrency(row.amortizacao)}</td>
                <td>${formatCurrency(row.saldoDevedor)}</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    return html;
}

// Função para exibir mensagem de erro
function exibirErro(mensagem) {
    alert(mensagem);
}

// Função para mostrar loading
function mostrarLoading() {
    document.querySelector('.loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

// Função para esconder loading
function esconderLoading() {
    document.querySelector('.loading').style.display = 'none';
}

// Função para mostrar resultados
function mostrarResultados(html) {
    const resultadosDiv = document.getElementById('results');
    const resultadoContent = document.getElementById('result-content');
    
    resultadoContent.innerHTML = html;
    resultadosDiv.style.display = 'block';
    
    // Scroll para os resultados
    resultadosDiv.scrollIntoView({ behavior: 'smooth' });
}

// Expor funções de UI no objeto window para garantir que estejam disponíveis globalmente
window.gerarHTMLComparativoBancos = gerarHTMLComparativoBancos;
window.gerarHTMLBancoEspecifico = gerarHTMLBancoEspecifico;
window.exibirErro = exibirErro;
window.mostrarLoading = mostrarLoading;
window.esconderLoading = esconderLoading;
window.mostrarResultados = mostrarResultados;