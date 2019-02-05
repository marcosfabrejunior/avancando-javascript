class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        //este código quando inserido no constructor evita percorrer o DOM várias vezes
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value, 
            this._inputValor.value
        );

       
        
    }
}