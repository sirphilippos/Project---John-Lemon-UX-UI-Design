//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//Page preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');

        pagePreloder.classList.add('jl-fade-out');

        setTimeout(function(){
            pagePreloder.style.display = 'none';
        }, 3000);

});


//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');
    
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

