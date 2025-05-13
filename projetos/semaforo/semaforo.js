function acender(cor){
    var res = document.getElementById('res')
    var red = document.getElementById('red')
    var yellow = document.getElementById('yellow')
    var green = document.getElementById('green')
    var sound1 = document.getElementById('click-sound1')
    var sound2 = document.getElementById('click-sound2')
    var sound3 = document.getElementById('click-sound3')

    red.style.background = 'gray'
    yellow.style.background = 'gray'
    green.style.background = 'gray'

    document.getElementById(cor).style.background = cor

    if(cor === 'red'){
        res.innerHTML = 'Pare!! O semaforo está Vermelho'
        res.style.color = 'red'
        sound1.play()
    }else if(cor === 'yellow'){
        res.innerHTML = 'Abrande!! O semaforo está quase a fechar!!'
        res.style.color = 'black'
        sound2.play()
    }else if(cor === 'green'){
        res.innerHTML = 'O sinal está aberto!!'
        res.style.color = 'green'
        sound3.play()
    }else if(cor === 'gray'){
        res.innerHTML ='reset'
        res.style.color = 'black'
    }
}
function resetar(){
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const res = document.getElementById('res');
    const sound = document.getElementById('click-sound');

    sound.play();

    red.style.background = 'gray';
    yellow.style.background = 'gray';
    green.style.background = 'gray';

    res.innerHTML = 'Fez reset !!! Escolha uma cor';
    res.style.color = 'black';
}