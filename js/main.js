//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//Page preloader
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector(".jl-preloader");
    setTimeout(function(){
        pagePreloader.classList.add('jl-fade-out');
    }, 3000)
    
});

//Abrindo e Fechando Info de Contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    
    boxContact.classList.toggle('jl-is-open')
    this.classList.toggle('jl-change-icon')

});