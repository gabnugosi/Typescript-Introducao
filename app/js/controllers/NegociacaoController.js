class NegociacaoController {
    constructor() {
        // private _negociacoes: Negociacoes= new Negociacoes();
        this._negociacoes = new Negociacoes(); // é possível emitir a tipagem nesse caso
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
    }
}
