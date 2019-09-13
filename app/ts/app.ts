/*const negociacao = new Negociacao(new Date(), 1, 100);
console.log(negociacao.quantidade);*/


const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submt', controller.adiciona.bind(controller));
