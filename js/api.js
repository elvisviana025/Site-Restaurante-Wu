const frase = document.querySelector('#frase');
const btn = document.querySelector('#botao__frase');


btn.addEventListener('click', () => {
    btn.classList.toggle('biscoito__btn--ativo')
    gerarFrase();
})


function gerarFrase() {

    fetch('https://api.adviceslip.com/advice').then(resposta => {
        return resposta.json();
    }).then(fraseData => {
        const fraseObj = fraseData.slip;
        frase.innerHTML = `<i>"${fraseObj.advice}"</i>`;
    }).catch(error => {
        console.log(error);
    })

}
