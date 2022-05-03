const botaoMenu = document.querySelector('.cabecalho__icone__menu')
const menuLateral = document.querySelector('.menu__lateral')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu__lateral--ativo')
})
