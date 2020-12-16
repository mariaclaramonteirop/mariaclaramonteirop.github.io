function retornando()
{
    var r1=document.getElementById("mensagem_p").value;
    var r2=document.getElementById("mensagem_s").value;
    var result="Os números do intervalo são: ";
    result+= pares(r1,r2);
    alert(result);
}

function pares(x,y)
{
    var numpar=[];
    for(i=x;i<=y;i++)
    {
        if(i%2==0)
        {
            numpar.push(i);
        }
    }
    return numpar.toString();
}

