function verificar(){
    var anoNascimento = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    var generoRadio = document.getElementsByName('radsex')
    var anoAtual = 2025
    var img = document.getElementById('imagem')
    var idade = anoAtual - anoNascimento
    var genero = ''
    var imagem = ''

    if (generoRadio[0].checked){
        if(idade<10){
            genero = 'criança'
            imagem = 'crianca.jpg'
        }else if(idade<21){
            genero = 'jovem'
            imagem = 'jovem.jpg'
        }else if(idade<50){
            genero = 'adulto'
            imagem = 'mulher.jpg'
        }
        else{
            genero = 'idoso'
            imagem = 'velho.jpg'
        }
    }else if(generoRadio[1].checked){
        if(idade<10){
            genero = 'criança'
            imagem = 'crianca2.jpg'
        }else if(idade<21){
            genero = 'jovem'
            imagem = 'jovem.jpg'
        }else if(idade<50){
            genero = 'adulto'
            imagem = 'mulher.jpg'
        }
        else{
            genero = 'idoso'
            imagem = 'velha.jpg'
        }
    }

    resultado.style.textAlign = 'center'
    resultado.innerHTML += `Detectamos ${genero} com ${idade} anos`

    img.src = imagem
    img.alt = `${genero} com ${idade} anos`
}
