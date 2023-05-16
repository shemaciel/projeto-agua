 let armazenando = 0;
 let armazenando1 = 0;
 let armazenando2 = 0;

let colocado = 0;
let colocado1 = 0;
let colocado2 = 0;

 function AguaF(){
 let qntInput = Number(document.getElementById('iquantidadeDeAguaF').value);
    let resultado = qntInput + armazenando; 
    armazenando = resultado; 
    document.getElementById("quantidadeF").innerHTML = resultado;
    console.log(resultado)
 }

 function AguaS(){
    let qntInput1 = Number(document.getElementById('iquantidadeDeAguaS').value);
       let resultado1 = qntInput1 + armazenando1; 
       armazenando1 = resultado1;  
       document.getElementById("quantidadeS").innerHTML = resultado1;
    }

    function AguaM(){
    let qntInput2 = Number(document.getElementById('iquantidadeDeAguaM').value);
           let resultado2 = armazenando2 + qntInput2; 
           armazenando2 = resultado2;  
           document.getElementById("quantidadeM").innerHTML = resultado2 ;
    }
    function ResumoA(){
        let maiorn = Math.max(resultado, resultado1, resultado2);  
        document.getElementById(resultado);
        let menorn = Math.min(resultado, resultado1, resultado2);
        document.getElementById("maior".value) = maiorn;
	    document.getElementById("menor".value) = menorn;
    }


    function RacaoF(){
        let potinho = Number(document.getElementById('iquantidadeDeRacaoF').value);
        console.log (potinho)
        let total = potinho + colocado;
        colocado = total;
        document.getElementById("cheioF").innerHTML = total;
    }

    function RacaoS(){
        let potinho1 = Number(document.getElementById('iquantidadeDeRacaoS').value);
        
        let total1 = potinho1 + colocado1;
        colocado1 = total1;
        document.getElementById("cheioS").innerHTML = total1;
    }

    function RacaoM(){
        let potinho2 = Number(document.getElementById('iquantidadeDeRacaoM').value);
        let total2 = potinho2 + colocado2;
        colocado2 = total2;
        document.getElementById("cheioM").innerHTML = total2;
    }

    function galao(){
        let maiorn = Math.max(resultado, resultado1, resultado2);  
        let menorn = Math.min(resultado, resultado1, resultado2);
      
        document.getElementById("maior").value = maiorn;
		document.getElementById("menor").value = menorn;

      
    }




    

