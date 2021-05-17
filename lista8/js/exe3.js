function supercripto()
{
    let val = document.getElementById("ponto").valueAsNumber; 
    let lete = document.getElementById("texto").value;
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let efeito = lete.split('');
    let tamanho = lete.length;
    let largura = alpha.length;
    let i = 0;
    let x = 0;
    let z;
    let g;

    while(x<tamanho){
        g = efeito[x];
        while(i<largura){
            if(alpha[i] == g)
            {
                if((i+val)>largura)
                {
                    z = i + val - largura;
                    efeito[x] = alpha[z];
                }
                else if((i+val)==largura)
                {
                    efeito[x] = alpha[0];
                }
                else{
                    efeito[x] = alpha[i+val];
                }
                
            }
            i = i+1;
        }
        i = 0;
        x=x+1;
    }
        

    document.getElementById('supercripto').innerHTML = efeito.join('');
}