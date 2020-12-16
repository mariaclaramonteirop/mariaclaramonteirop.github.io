var elemento = document.getElementById('botao');
elemento.onclick=function clicar()
{
    var quadrado= document.createElement('div');  // cria uma div //
    var text=document.createTextNode(' '); // acrescentando um texto vazio  //
    quadrado.appendChild(text); // criando uma criança kkk //

    var corpo= document.querySelector('body'); // pegando o corpo da pagina//
    quadrado.style.height='100px';
    quadrado.style.width='100px';
    quadrado.style.margin = '10px';
    quadrado.style.backgroundColor='##9c1bcf';
    quadrado.style.float = 'left';
    quadrado.style.border = '5px solid #DAA8F0';
    corpo.appendChild(quadrado);
}