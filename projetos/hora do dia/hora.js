function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var hora = document.getElementById('hora').value 
    var btn = document.getElementById('btn')


    msg.innerHTML = `Agora são ${hora} horas`
   
    if(hora >=0 && hora<12){
        imagem.src = 'manha.jpg'
        document.body.style.background = 'lightblue'
        msg.innerHTML += `<p>Bom dia</p>`

    }else if( hora>= 12 && hora<18){
        imagem.src = 'tarde.jpeg'
        document.body.style.background = 'orange'
        msg.innerHTML += `<p>Boa tarde</p>`

    }else if(hora > 18 && hora<24){
        imagem.src = 'noite.jpg'
        document.body.style.background = '#fa985f'
        msg.innerHTML += `<p>Boa noite</p>`
    }else()

    
}