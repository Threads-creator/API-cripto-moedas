var apikey = {
    key: '1d8d2965-46b6-4831-a766-a2ad419dc108'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok){
            throw new Error('Erro ao executar a requisição, status ' + response.status);
        }
        return response.json();
    })
    .then((api) => {
        var texto = '';

        for(let i = 0; i < 10; i++){
            var dataHistorica = [];
            var date = new Date(api.data[i].first_historical_data);
            dataHistorica[0] = date.getDate();
            dataHistorica[1] = date.getMonth();
            dataHistorica[2] = date.getFullYear();
            
            date = new Date(api.data[i].last_historical_data);
            dataHistorica[3] = date.getDate();
            dataHistorica[4] = date.getMonth();
            dataHistorica[5] = date.getFullYear();
            

            texto = texto + `
            <div class="media">
                <img src="coin.png" class="align-self-center mr-3" alt="icon" width="100" height="60"/>
                <div class="media-body">
                    <h5 class = "mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>Primeira Data Histórica: ${dataHistorica[0] + '/' + dataHistorica[1] + '/'+ dataHistorica[2]}</p>
                    <p>Ultima Data Histórica: ${dataHistorica[3] + '/' + dataHistorica[4] + '/'+ dataHistorica[5]}</p>
                </div>
            </div>
            
            `;
            
            document.getElementById("icons").innerHTML = texto;
        }

        console.log(api);

    })
    .catch((error) => {
        console.error(error.message);
    });
