const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Armazena o preço do bitcoin para fazer a conversão
var bitcoinPrecoUSD = 0;

// Função para buscar o preço do Bitcoin
function fetchPrecoBTC() {
    fetch(API_URL)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Extraindo o preço em USD

            bitcoinPrecoUSD = data.bpi.USD.rate_float.toFixed(2); 

            // Atualizando o conteúdo do elemento no HTML
            document.getElementById('PrecoBTC').innerText = `$${bitcoinPrecoUSD}`;
        })
        .catch(error => {
            console.error('Erro ao buscar o preço do Bitcoin:', error);
            document.getElementById('precoBTC').innerText = 'Erro ao carregar o preço do Bitcoin.';
        });
}

// Chama a função para buscar o preço do Bitcoin quando a página é carregada
fetchPrecoBTC();
// Atualiza o preço a cada 60 segundos
setInterval(fetchPrecoBTC, 60000);

// Função para calcular o valor em USD a partir de um montante em BTC
function calcularBTC() {
    // Obtendo o valor em BTC da pessoa
    const inputBTC = parseFloat(document.getElementById('InputBTC').value);

    // Verificando se o input é um número válido
    if (isNaN(inputBTC)) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número válido.';
        return;
    }

    // Calculando o resultado da conversão usando o preço atual de BTC em USD
    const resultado = inputBTC * bitcoinPrecoUSD;

    // Exibindo o resultado da conversão no elemento com o ID 'resultado'
    document.getElementById('resultado').innerText = `Resultado da Conversão em USD (Dólar): $${resultado.toFixed(2)}`;
}

// Adicionando um evento de clique ao botão que chama a função calcularBTC quando clicado
document.getElementById('CalcularBTC').addEventListener('click', calcularBTC);
