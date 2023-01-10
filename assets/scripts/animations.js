function animacaoInicioH1(){
    return h1.animate([
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
