/**
 * Arquivo principal da aplicação - Inicialização e controle
 * Simulador de Empréstimo Consignado
 */

// Log para confirmar carregamento do script
console.log('app.js carregado');

// Função para verificar integridade das dependências
function verificarDependencias() {
    const dependencias = [
        { nome: 'formatCurrency', tipo: 'função', origem: 'utils.js' },
        { nome: 'convertToNumber', tipo: 'função', origem: 'utils.js' },
        { nome: 'toggleDetalhes', tipo: 'função', origem: 'utils.js' },
        { nome: 'toggleTabela', tipo: 'função', origem: 'utils.js' },
        { nome: 'validarFormulario', tipo: 'função', origem: 'utils.js' },
        { nome: 'getBancosOrdenadosPorTaxa', tipo: 'função', origem: 'banks.js' },
        { nome: 'getBancoPorNome', tipo: 'função', origem: 'banks.js' },
        { nome: 'bancosCsv', tipo: 'variável', origem: 'banks.js' },
        { nome: 'simularTodosBancos', tipo: 'função', origem: 'calculator.js' },
        { nome: 'simularEmprestimoBanco', tipo: 'função', origem: 'calculator.js' },
        { nome: 'gerarHTMLComparativoBancos', tipo: 'função', origem: 'ui.js' },
        { nome: 'gerarHTMLBancoEspecifico', tipo: 'função', origem: 'ui.js' }
    ];
    
    const dependenciasAusentes = dependencias.filter(dep => {
        if (dep.tipo === 'função') {
            return typeof window[dep.nome] !== 'function';
        } else {
            return typeof window[dep.nome] === 'undefined';
        }
    });
    
    if (dependenciasAusentes.length > 0) {
        console.error('ERRO: As seguintes dependências não foram carregadas:');
        dependenciasAusentes.forEach(dep => {
            console.error(`- ${dep.nome} (${dep.origem})`);
        });
        
        // Exibir mensagem de erro para o usuário
        alert('Não foi possível inicializar a aplicação corretamente. Tente recarregar a página.');
        return false;
    }
    
    return true;
}

// Função principal de simulação
function simularEmprestimo() {
    console.log('Função simularEmprestimo chamada');
    
    try {
        const valor = parseFloat(document.getElementById('valor').value);
        const parcelas = parseInt(document.getElementById('parcelas').value);
        const bancoSelecionado = document.getElementById('banco').value;
        const tipoSimulacao = document.getElementById('tipo-simulacao').value;
        
        console.log('Valores obtidos do formulário:', {valor, parcelas, bancoSelecionado, tipoSimulacao});
        
        // Validação básica
        const validacao = validarFormulario(valor, parcelas);
        if (!validacao.valido) {
            exibirErro(validacao.mensagem);
            return;
        }

        // Mostrar loading - usando a função do escopo global
        document.querySelector('.loading').style.display = 'block';
        document.getElementById('results').style.display = 'none';
        
        // Simular processamento (para melhor UX)
        setTimeout(() => {
            try {
                // Esconder loading
                document.querySelector('.loading').style.display = 'none';
                
                let html = '';
                
                if (bancoSelecionado === 'todos') {
                    console.log('Simulando para todos os bancos');
                    // Simular para todos os bancos
                    const resultados = simularTodosBancos(valor, parcelas, bancosCsv, tipoSimulacao);
                    html = gerarHTMLComparativoBancos(resultados, valor, parcelas, tipoSimulacao);
                } else {
                    console.log('Simulando para banco específico:', bancoSelecionado);
                    // Simular para um banco específico
                    const bancoEscolhido = getBancoPorNome(bancoSelecionado);
                    
                    if (!bancoEscolhido) {
                        exibirErro('Banco não encontrado. Por favor, tente novamente.');
                        return;
                    }
                    
                    const taxaMensal = convertToNumber(bancoEscolhido.TaxaJurosAoMes);
                    const taxaAnual = convertToNumber(bancoEscolhido.TaxaJurosAoAno);
                    
                    const resultado = simularEmprestimoBanco(valor, parcelas, taxaMensal, tipoSimulacao);
                    resultado.banco = bancoEscolhido;
                    resultado.taxaMensal = taxaMensal;
                    resultado.taxaAnual = taxaAnual;
                    
                    html = gerarHTMLBancoEspecifico(resultado, valor, parcelas, tipoSimulacao);
                }

                console.log('Exibindo resultados');
                // Mostrar resultados
                const resultadosDiv = document.getElementById('results');
                const resultadoContent = document.getElementById('result-content');
                
                resultadoContent.innerHTML = html;
                resultadosDiv.style.display = 'block';
                
                // Scroll para os resultados
                resultadosDiv.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Erro durante a simulação (setTimeout):', error);
                document.querySelector('.loading').style.display = 'none';
                alert('Ocorreu um erro ao processar a simulação: ' + error.message);
            }
        }, 1000); // Tempo de simulação de carregamento
    } catch (error) {
        console.error('Erro na simulação:', error);
        alert('Ocorreu um erro ao iniciar a simulação: ' + error.message);
    }
}

// Função para inicializar o dropdown de bancos
function inicializarDropdownBancos() {
    console.log('Inicializando dropdown de bancos');
    try {
        const bancosSelect = document.getElementById('banco');
        
        if (!bancosSelect) {
            console.error('Elemento select de bancos não encontrado (ID: banco)');
            return;
        }
        
        const bancos = getBancosOrdenadosPorTaxa();
        
        // Limpar opções existentes (exceto a primeira)
        while (bancosSelect.options.length > 1) {
            bancosSelect.remove(1);
        }
        
        // Adicionar opções de bancos
        bancos.forEach(banco => {
            const option = document.createElement('option');
            option.value = banco.InstituicaoFinanceira;
            option.textContent = `${banco.InstituicaoFinanceira} (${banco.TaxaJurosAoMes}% a.m.)`;
            bancosSelect.appendChild(option);
        });
        
        console.log(`${bancos.length} bancos adicionados ao dropdown`);
    } catch (error) {
        console.error('Erro ao inicializar dropdown de bancos:', error);
    }
}

// Função para registrar os event listeners
function registrarEventListeners() {
    console.log('Registrando event listeners');
    
    try {
        // Botão de simulação
        const btnSimular = document.getElementById('simular');
        
        if (!btnSimular) {
            console.error('Botão de simulação não encontrado (ID: simular)');
            return;
        }
        
        console.log('Botão de simulação encontrado:', btnSimular);
        btnSimular.addEventListener('click', function(e) {
            console.log('Botão de simulação clicado');
            simularEmprestimo();
        });
        
        // Validação em tempo real para o campo de valor
        const campoValor = document.getElementById('valor');
        if (campoValor) {
            campoValor.addEventListener('input', function() {
                // Manter apenas números no input
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        } else {
            console.warn('Campo de valor não encontrado (ID: valor)');
        }
        
        // Enter no formulário deve acionar a simulação
        document.querySelectorAll('.form-group input, .form-group select').forEach(el => {
            el.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    console.log('Tecla Enter pressionada em campo do formulário');
                    e.preventDefault();
                    simularEmprestimo();
                }
            });
        });
        
        console.log('Event listeners registrados com sucesso');
    } catch (error) {
        console.error('Erro ao registrar event listeners:', error);
    }
}

// Adiciona identificação de erros de carregamento
window.addEventListener('error', function(event) {
    console.error('Erro de carregamento detectado:', event.filename);
    // Registra o erro mas não interrompe a execução
});

// Inicializar a aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando aplicação');
    
    try {
        // Verificar se todas as dependências foram carregadas
        if (!verificarDependencias()) {
            return;
        }
        
        // Inicializar dropdown de bancos
        inicializarDropdownBancos();
        
        // Registrar event listeners
        registrarEventListeners();
        
        // Garantir que funções globais estejam disponíveis
        window.toggleDetalhes = window.toggleDetalhes || function(id) {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.style.display = elemento.style.display === 'none' ? 'table-row' : 'none';
            }
        };

        window.toggleTabela = window.toggleTabela || function(id) {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.style.display = elemento.style.display === 'none' ? 'block' : 'none';
            }
        };
        
        // Mostrar versão no console (para desenvolvimento)
        console.log('Simulador de Empréstimo Consignado v1.0.1');
        console.log('Iniciado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar a aplicação:', error);
        alert('Ocorreu um erro ao inicializar a aplicação. Por favor, recarregue a página.');
    }
});
