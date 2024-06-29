function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('Por favor, verifique os dados e tente novamente')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var gen = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        
       if(fsex[0].checked){
        gen = 'homem'
            if(idade >= 0 && idade < 8){
                //crianca
                img.setAttribute('src', './img/criancaM.png') 
            } else if(idade < 18){
                //adolescente
                img.setAttribute('src', './img/adolescenteM.png') 
            } else if(idade < 35){
                //jovem
                img.setAttribute('src', './img/jovemM.png') 
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', './img/adultoM.png') 
            } else{
                //idoso
                img.setAttribute('src', './img/idosoM.png') 
            }
       } else if(fsex[1].checked){
        gen = 'mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', './img/criancaF.png') 
            } else if(idade < 18){
                //adolescente
                img.setAttribute('src', './img/adolescenteF.png') 
            } else if(idade < 35){
                //jovem
                img.setAttribute('src', './img/jovemF.png') 
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', './img/adultoF.png') 
            } else{
                //idoso
                img.setAttribute('src', './img/idosoF.png') 
            }
       }
       res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
       res.style.fontWeight = 'bold'
       res.appendChild(img)
    }
}


