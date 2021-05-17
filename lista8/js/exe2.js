

    function triangulos(){
        let PON1 = document.getElementById("ponto1").valueAsNumber; 
        let PON2 = document.getElementById("ponto2").valueAsNumber; 
        let PON3 = document.getElementById("ponto3").valueAsNumber; 
        let resultado;


    if(((PON1+PON2)<=PON3)||((PON2+PON3)<=PON1)||((PON3+PON1)<=PON2)){
        resultado = "NÃO FOI POSSIVEL REALIZAR. TENTE NOVAMENTE COM OUTRO NUMERO!";
    }else if(PON1<=0||PON2<=0||PON3<=0){
                resultado = "NÃO FOI POSIVEL REALIZAR. TENTE NOVAMENTE COM OUTRO NUMERO";
            }else if((PON1==PON2)&&(PON2==PON3)){
                        resultado = "Triângulo equilátero.";
                    }else if((PON1!=PON2)&&(PON2!=PON3)&&(PON3!=PON1)){
                                resultado = "Triângulo escaleno.";
                        }else if(((PON1==PON2)&&(PON1!=PON3))||((PON1==PON3)&&(PON2!=PON3))||((PON3==PON2)&&(PON1!=PON3))){
                                    resultado = "Triângulo isósceles.";
                            }
        
                
        document.getElementById('triangulos').innerHTML = resultado;
    }

