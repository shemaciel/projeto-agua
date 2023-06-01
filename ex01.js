 let armazenando = 0;
 let armazenando1 = 0;
 let armazenando2 = 0;

let colocado = 0;
let colocado1 = 0;
let colocado2 = 0;

function enchendoAguaF() {
    let qntInput = Number(document.getElementById("iquantidadeDeAguaF").value);
        resultado = qntInput + armazenando; 
        armazenando = resultado; 
        document.getElementById("quantidadeF").innerHTML = resultado;
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
        let somar = resultado + resultado1 + resultado2;
        window.document.getElementById("itotalLitros").innerHTML = somar;
    }




    function ResumoA(){

        maiorn = Math.max(resultado, resultado1, resultado2);  
        document.getElementById(resultado);
        menorn = Math.min(resultado, resultado1, resultado2);
        document.getElementById("maior".value) = maiorn;
	    document.getElementById("menor".value) = menorn;


    }


    function enchendoRacaoF(){
       
        let potinho = Number(document.getElementById('iquantidadeDeRacaoF').value);
        total = potinho + colocado;
        colocado = total;
        document.getElementById("cheioF").innerHTML = total;
        console.log("essa Total  ",total)
        totalRacao()
    }


    function enchendoRacaoS(){
        
        let potinho1 = Number(document.getElementById('iquantidadeDeRacaoS').value);
        total1 = potinho1 + colocado1;
        colocado1 = total1;
        document.getElementById("cheioS").innerHTML = total1;
        console.log("essa Total 1 ",total1)
        totalRacao()
    }

    function enchendoRacaoM(){
        
        let potinho2 = Number(document.getElementById('iquantidadeDeRacaoM').value);
        total2 = potinho2 + colocado2;
        colocado2 = total2;
        document.getElementById("cheioM").innerHTML = total2;
        console.log("essa Total 2 ",total2)
        totalRacao()
       

        
    }

    function totalRacao() {
        //let some = 0;
        some = total + total1 + total2;
        window.document.getElementById("itotalRacao").innerHTML = some

       console.log("VARIAVEL SOME",some)
        console.log("essa Total  ",total)
        console.log("essa Total 1 ",total1)
        console.log("essa Total 2 ",total2)

   
    }

    function galao(){

        let maiorn = Math.max(resultado, resultado1, resultado2);  
        let menorn = Math.min(resultado, resultado1, resultado2);
      
        document.getElementById("maior").value = maiorn;
		document.getElementById("menor").value = menorn;

      
    }




    

