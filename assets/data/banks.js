/**
 * Dados dos bancos para o Simulador de Empréstimo Consignado
 * Fonte: Banco Central do Brasil
 */

// Dados de taxa de juros dos bancos (originalmente do CSV)
window.bancosCsv = [
    {"Posicao":"1","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO ITAÚ CONSIGNADO S.A.","TaxaJurosAoMes":"1,26","TaxaJurosAoAno":"16,21"},
    {"Posicao":"2","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO ALFA S.A.","TaxaJurosAoMes":"1,53","TaxaJurosAoAno":"20,03"},
    {"Posicao":"3","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO INTER","TaxaJurosAoMes":"1,55","TaxaJurosAoAno":"20,25"},
    {"Posicao":"4","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO COOPERATIVO SICREDI S.A.","TaxaJurosAoMes":"1,63","TaxaJurosAoAno":"21,34"},
    {"Posicao":"5","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BRB - BCO DE BRASILIA S.A.","TaxaJurosAoMes":"1,65","TaxaJurosAoAno":"21,67"},
    {"Posicao":"6","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO MASTER","TaxaJurosAoMes":"1,67","TaxaJurosAoAno":"21,92"},
    {"Posicao":"7","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO C6 S.A.","TaxaJurosAoMes":"1,68","TaxaJurosAoAno":"22,13"},
    {"Posicao":"8","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO DAYCOVAL S.A","TaxaJurosAoMes":"1,68","TaxaJurosAoAno":"22,13"},
    {"Posicao":"9","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO SANTANDER (BRASIL) S.A.","TaxaJurosAoMes":"1,69","TaxaJurosAoAno":"22,31"},
    {"Posicao":"10","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO BRADESCO S.A.","TaxaJurosAoMes":"1,69","TaxaJurosAoAno":"22,34"},
    {"Posicao":"11","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO DO ESTADO DO RS S.A.","TaxaJurosAoMes":"1,72","TaxaJurosAoAno":"22,7"},
    {"Posicao":"12","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO DO BRASIL S.A.","TaxaJurosAoMes":"1,81","TaxaJurosAoAno":"24,01"},
    {"Posicao":"13","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"ITAÚ UNIBANCO S.A.","TaxaJurosAoMes":"1,85","TaxaJurosAoAno":"24,63"},
    {"Posicao":"14","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"CAIXA ECONOMICA FEDERAL","TaxaJurosAoMes":"1,99","TaxaJurosAoAno":"26,75"},
    {"Posicao":"15","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"AGIBANK S.A.","TaxaJurosAoMes":"2,02","TaxaJurosAoAno":"27,1"},
    {"Posicao":"16","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO SAFRA S.A.","TaxaJurosAoMes":"2,04","TaxaJurosAoAno":"27,38"},
    {"Posicao":"17","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO BMG S.A.","TaxaJurosAoMes":"2,07","TaxaJurosAoAno":"27,81"},
    {"Posicao":"18","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BV FINANCEIRA S.A. CFI","TaxaJurosAoMes":"2,08","TaxaJurosAoAno":"28,01"},
    {"Posicao":"19","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO MERCANTIL DO BRASIL S.A.","TaxaJurosAoMes":"2,1","TaxaJurosAoAno":"28,33"},
    {"Posicao":"20","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"PORTOSEG S.A. CFI","TaxaJurosAoMes":"2,12","TaxaJurosAoAno":"28,62"},
    {"Posicao":"21","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO AFINZ S.A. - BCO MULTIPLO","TaxaJurosAoMes":"2,14","TaxaJurosAoAno":"28,9"},
    {"Posicao":"22","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO CETELEM S.A.","TaxaJurosAoMes":"2,14","TaxaJurosAoAno":"29,02"},
    {"Posicao":"23","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO PAN","TaxaJurosAoMes":"2,14","TaxaJurosAoAno":"29,03"},
    {"Posicao":"24","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO CETELEM S.A.","TaxaJurosAoMes":"2,15","TaxaJurosAoAno":"29,07"},
    {"Posicao":"25","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO OLÉ BONSUCESSO CONSIGNADO S.A.","TaxaJurosAoMes":"2,15","TaxaJurosAoAno":"29,08"},
    {"Posicao":"26","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO ABC BRASIL S.A.","TaxaJurosAoMes":"2,2","TaxaJurosAoAno":"29,84"},
    {"Posicao":"27","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO DIGIO","TaxaJurosAoMes":"2,24","TaxaJurosAoAno":"30,47"},
    {"Posicao":"28","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BANCO FIBRA S.A.","TaxaJurosAoMes":"2,25","TaxaJurosAoAno":"30,6"},
    {"Posicao":"29","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO BANESTES S.A.","TaxaJurosAoMes":"2,29","TaxaJurosAoAno":"31,2"},
    {"Posicao":"30","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"FACTA S.A. CFI","TaxaJurosAoMes":"2,3","TaxaJurosAoAno":"31,37"},
    {"Posicao":"31","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO DO ESTADO DE SE S.A.","TaxaJurosAoMes":"2,3","TaxaJurosAoAno":"31,44"},
    {"Posicao":"32","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"FINANC ALFA S.A. CFI","TaxaJurosAoMes":"2,43","TaxaJurosAoAno":"33,32"},
    {"Posicao":"33","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO INDUSTRIAL DO BRASIL S.A.","TaxaJurosAoMes":"2,46","TaxaJurosAoAno":"33,86"},
    {"Posicao":"34","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO SEMEAR S.A.","TaxaJurosAoMes":"2,78","TaxaJurosAoAno":"38,84"},
    {"Posicao":"35","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"CCB BRASIL S.A. - CFI","TaxaJurosAoMes":"2,84","TaxaJurosAoAno":"39,89"},
    {"Posicao":"36","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO CCB BRASIL S.A.","TaxaJurosAoMes":"2,91","TaxaJurosAoAno":"40,93"},
    {"Posicao":"37","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"SANTINVEST S.A. - CFI","TaxaJurosAoMes":"2,98","TaxaJurosAoAno":"42,09"},
    {"Posicao":"38","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"GAZINCRED S.A. SCFI","TaxaJurosAoMes":"2,99","TaxaJurosAoAno":"42,41"},
    {"Posicao":"39","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO BS2 S.A.","TaxaJurosAoMes":"3,09","TaxaJurosAoAno":"44,18"},
    {"Posicao":"40","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"SOROCRED CFI S.A.","TaxaJurosAoMes":"3,46","TaxaJurosAoAno":"50,5"},
    {"Posicao":"41","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"BCO BARI S.A.","TaxaJurosAoMes":"3,69","TaxaJurosAoAno":"54,39"},
    {"Posicao":"42","Segmento":"Pessoa Física","Modalidade":"Crédito pessoal consignado público - Pré-fixado","InstituicaoFinanceira":"COOP CENTRAL AILOS","TaxaJurosAoMes":"4,1","TaxaJurosAoAno":"61,8"}
];

// Função para obter dados dos bancos ordenados por taxa
window.getBancosOrdenadosPorTaxa = function() {
    return window.bancosCsv.sort((a, b) => {
        return convertToNumber(a.TaxaJurosAoMes) - convertToNumber(b.TaxaJurosAoMes);
    });
};

// Função para obter um banco específico pelo nome
window.getBancoPorNome = function(nomeBanco) {
    return window.bancosCsv.find(banco => banco.InstituicaoFinanceira === nomeBanco);
};
