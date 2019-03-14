class HttpService {
    get(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));

                    } else {
                        reject(xhr.responseText);
                    }
                }
            }

            //configurações
            xhr.send();

            /* 
                0: Requisição não iniciada
                1: Conexão com o servidor estabelecida
                2: Requisição recebida
                3: Processando requisição
                4: Requisição concluída e resposta está pronta
    
            */
        });
    }
}