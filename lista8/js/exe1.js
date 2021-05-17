function imposto(){
    let pagamento = document.getElementById("n1").valueAsNumber; 
    let result;

    if((pagamento>= 1903.99) && (pagamento<=2826.65)){
        result = (pagamento * 7.5)/100 - 142.80 ;
        
        }


        else if((pagamento>= 2826.66) && (pagamento<=3751.05)){
                result = (pagamento * 15)/100 - 354.80;
            
            }
            
            else if((pagamento>= 3751.06) && (pagamento<=4664.68)){
                    result = (pagamento * 22.5)/100 - 636.13;
                }

                else if(pagamento>4664.68){
                        result = (pagamento * 27.5)/100 - 869.36;
                        }

                        else {
                            result = 0 ;
                        }

    result = parseFloat(result.toFixed(2));
    document.getElementById('imposto').innerHTML = result;
}


