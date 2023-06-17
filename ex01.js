 let armazenando = 0;
 let armazenando1 = 0;
 let armazenando2 = 0;

 let colocado = 0;
 let colocado1 = 0;
 let colocado2 = 0;

 let resultado0  = 7;
 let resultado1 = 8; 
 let resultado2 = 9;

 let total = 0;
 let total1 = 0;
 let total2 = 0;

function enchendoAguaF() {
    let qntInput = Number(document.getElementById("iquantidadeDeAguaF").value);
        resultado0 = qntInput + armazenando; 
        armazenando = resultado0; 
        document.getElementById("quantidadeF").innerHTML = resultado0;
        totalLitros()
 }
 function enchendoAguaS(){
   let qntInput1 = Number(document.getElementById('iquantidadeDeAguaS').value);
       resultado1 = qntInput1 + armazenando1; 
       armazenando1 = resultado1;  
       document.getElementById("quantidadeS").innerHTML = resultado1;
       totalLitros()
    }
    function enchendoAguaM(){
    let qntInput2 = Number(document.getElementById('iquantidadeDeAguaM').value);
        resultado2 = armazenando2 + qntInput2; 
        armazenando2 = resultado2;  
        document.getElementById("quantidadeM").innerHTML = resultado2;
        totalLitros()
    }
    function totalLitros() {
        let somar = resultado0 + resultado1 + resultado2;
        window.document.getElementById("itotalLitros").innerHTML = somar;
    }
    function enchendoRacaoF(){
        let potinho = Number(document.getElementById('iquantidadeDeRacaoF').value);
        total = potinho + colocado;
        colocado = total;
        document.getElementById("cheioF").innerHTML = total;
        console.log(total)
        totalRacao()
    }
    function enchendoRacaoS(){
        let potinho1 = Number(document.getElementById('iquantidadeDeRacaoS').value);
        total1 = potinho1 + colocado1;
        colocado1 = total1;
        document.getElementById("cheioS").innerHTML = total1;
        console.log(total1)
        totalRacao()
    }
    function enchendoRacaoM(){
        
        let potinho2 = Number(document.getElementById('iquantidadeDeRacaoM').value);
        total2 = potinho2 + colocado2;
        colocado2 = total2;
        document.getElementById("cheioM").innerHTML = total2;
        console.log(total2)
        totalRacao()
    }
    function totalRacao() {
       let some = total + total1 + total2;
        window.document.getElementById("itotalRacao").innerHTML = some
    }
    function menorQuantidadeA() {
        let menorFer = 'Fernando';
        let menorShe = 'Sheron';
        let menorMig = 'Miguel';
        let encheuIgualA = 'Valor Igual'

    if (resultado0 < resultado1 && resultado0 < resultado2){      console.log('Fernando encheu menos água');
    document.getElementById ('menorLitro').innerHTML = 'Fernando';
    } 
    else if (resultado1 < resultado0 && resultado1 < resultado2){ console.log('Sheron encheu menos água');
    document.getElementById('menorLitro').innerHTML = 'Sheron';
    } 
    else if (resultado2 < resultado0 && resultado2 < resultado1){ console.log('Miguel encheu menos água');
    document.getElementById('menorLitro').innerHTML = 'Miguel';
    }
    else {
    console.log('Encheram quantidades igual');
    document.getElementById('menorLitro').innerHTML = 'Valor Igual';
    }

    }
    function menorQuantidadeR(){
        let colocouMenosF = 'Fernando'
        let colocouMenosS = 'Sheron'
        let colocouMenosM = 'Miguel'
        let encheuIgualR = 'Valor Igual'
    if (total < total1 && total < total2){
    console.log('Fernndo colocou menos ração');
    document.getElementById('menorqnt').innerHTML = 'Fernando';
}
    else if (total1 < total && total1 < total2){
        console.log('Sheron colocou menos ração');
        document.getElementById('menorqnt').innerHTML = 'Sheron';
    }
    else if (total2 < total && total2 < total1){
        console.log('Miguel colocou menos ração');
        document.getElementById('menorqnt').innerHTML = 'Miguel';
    }
    else {
        console.log('Encheram quantidades igual');
        document.getElementById('menorqnt').innerHTML = 'Valor Igual';
        }
    

    }

       
    

   
      
   



















    //var vel = 80.5
    // console.log(`A velocidade do seu carro é de  ${vel} km/h`)
    // if (vel > 60) {
       // console.log(`voce ultrapassou a velocidade`)
    // }
   //  console.log(`Dirija sempre com o cinto de segurança`)




    

