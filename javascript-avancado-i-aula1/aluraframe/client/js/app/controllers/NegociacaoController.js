class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        //este código quando inserido no constructor evita percorrer o DOM várias vezes
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        
    }
}