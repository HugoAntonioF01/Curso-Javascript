function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        /* Criando a tag img no java script e atribuindo o id a mesma com o nome da id de foto*/
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');



        if(fsex[0].checked){
            genero = 'Masculino';

            if(idade >= 0 && idade <15){
                //Criança
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if(idade < 30){
                //Adoslecente
                img.setAttribute('src', 'foto-adolescente-h.png')

            } else if(idade < 59){
                //Adulto
                img.setAttribute('src', 'foto-jovem-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-h.png')

            }

        } else if(fsex[1].checked){
            genero = 'Feminino';

            if(idade >= 0 && idade < 15){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 30){
                //Adoslecente
                img.setAttribute('src', 'foto-adolescente-m.png')
            } else if(idade < 59){
                //Adulto
                img.setAttribute('src', 'foto-jovem-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);

    }
}