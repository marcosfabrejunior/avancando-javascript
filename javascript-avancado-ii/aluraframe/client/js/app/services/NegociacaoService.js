class NegociacaoService {

    constructor(){
        this._http = new HttpService();  
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            //requisição ajax
            this._http
            .get('negociacoes/semana')
            .then(negociacoes => {
                negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana')
            })
        });

    }
    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            //requisição ajax
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log('obtendo as negociações do servidor');
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações do servidor');
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
    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            //requisição ajax
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/retrasada');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log('obtendo as negociações do servidor');
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações do servidor');
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