class NegociacaoController{
    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("valor");
    }

    adiciona(evenet){
        // desativa o comportamento default do objeto
        evenet.preventDefault();
        //Funcao adicionar no Modelo de negociacoes
        

    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _LimparFormulario()
    {
        this._inputData.value='';
        this._inputQuantidade.value = '';
        this._inputValor.value=0.0;
        this._inputData.focus();
    }
}