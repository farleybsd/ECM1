class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacoesView($('#negociacoesView'));
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView =  new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event){
        event.preventDefault();
        //Modelo
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação Adicionada com Sucesso!';

        this._mensagemView.update(this._mensagem);
        this._negociacaoView.update(this._listaNegociacoes);
        
        this._LimpaFormulario();

    }
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
     _LimpaFormulario(){
         this._inputData.value = '';
         this._inputQuantidade.value= '';
         this._inputValor.value = 0.0;
         this._inputData.focus();
     }   
}

/**
https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/23134
*/