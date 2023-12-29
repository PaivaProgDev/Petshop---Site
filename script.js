var menuMobile = document.querySelector ('.items-store-header-mobile')
var menuIcon = document.querySelector('.header-menu-icon')

menuIcon.addEventListener('click', ()=> {
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        menuIcon.src = './images/menu-header.svg'  
    }
    else {
        menuMobile.classList.add('open')
        menuIcon.src = './images/close.svg'
    }
}) 

// Script para limpar o input ao enviar o email
var inputMail = document.querySelector('.input-email-newsletter')
var inputButton = document.querySelector('.input-button-newsletter')

inputButton.addEventListener('click', ()=>{
    inputMail.value = ''
})