function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   
   var elemento = document.getElementById('botao');
   elemento.onclick=function clicar()
   {
       var quadrado= document.createElement('div');  
       var text=document.createTextNode(' '); 
       quadrado.appendChild(text); 
   
       var corpo= document.querySelector('body'); 
       quadrado.style.height='100px';
       quadrado.style.width='100px';
       quadrado.style.margin = '10px';
       quadrado.style.backgroundColor='#C985E6';
       quadrado.style.float = 'left';
       quadrado.style.border = '5px solid #d616bd';
       quadrado.onmouseover = function coresaleatorias()
       {
        quadrado.style.backgroundColor= getRandomColor();
       }
       corpo.appendChild(quadrado);
   }
   