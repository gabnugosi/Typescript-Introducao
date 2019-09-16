class Negociacoes {
    //private _negociacoes: Array<Negociacao> = [];
    private _negociacoes: Negociacao[] = []; // forma resumida da linhha acima

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}