const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Função para buscar o preço do Bitcoin
function fetchPrecoBTC() {
    fetch(API_URL)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Extraindo o preço em USD
            const bitcoinPrecoUSD = data.bpi.USD.rate;
            

            // Atualizando o conteúdo do elemento no HTML
            document.getElementById('precoBTC').innerText = `Preço Atual do Bitcoin: $${bitcoinPrecoUSD}`;
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