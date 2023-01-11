function animacaoInicioH1(){
    h1.animate([
        { transform: 'translateY(-400px)', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { transform: 'translateY(0px)', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 750,
        iterations: 1
    })
}


function animacaoInicioCliqueAbaixo() {
    cliqueAbaixo.animate([
        { transform: 'scale(0)', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { transform: 'scale(1)', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 600,
        iterations: 1
    })
}

function aguardandoResposta() {
    h1.animate([
        { opacity: '.5', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(.8)' },
        { opacity: '1', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(1)' }
    ], {
        duration: 550,
        iterations: 1
    })
}

function capturandoAudio() {
    h1.animate([
        { opacity: '.5', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { opacity: '1', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { opacity: '.5', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 750,
        iterations: 1
    })
}

function palavraNaoIdentificada() {
    h1.animate([
        { opacity: '.5', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(.8)' },
        { opacity: '1', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(1)' }
    ], {
        duration: 550,
        iterations: 1
    })
}

function vamosLa() {
    h1.animate([
        { opacity: '.5', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { opacity: '1', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 750,
        iterations: 1
    })
}
function vamosLaScale() {
    h1.animate([
        { transform: 'scale(4)', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { transform: 'scale(1)', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 550,
        iterations: 1
    })
}
function animacaoWin() {
    wrapper.animate([
        { transform: 'scale(0)', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { transform: 'scale(1.25)', easing: 'cubic-bezier(.54,.21,.6,.88)' },
        { transform: 'scale(1)', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ], {
        duration: 1000,
        iterations: 1
    })
}
function animacaoLose() {
    wrapper.animate([
        { opacity: '0', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(.8)' },
        { opacity: '1', easing: 'cubic-bezier(.54,.21,.6,.88)' }, { transform: 'scale(1)' }
    ], {
        duration: 850,
        iterations: 1
    })
}