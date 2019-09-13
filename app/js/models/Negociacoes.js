class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = [];
        this._negociacoes = []; // forma resumida da linhha acima
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
