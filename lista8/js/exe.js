function operador(){
	var radio = document.getElementsByName('operador');
	  for(let operador of radio){
	   if(operador.checked){
		return operador.value;
	   }
 } 
  return null;
 }

 function addTxt (texto, id){
	 
	var node = document.createElement("p");                
	var textnode = document.createTextNode(texto);          
	node.appendChild(textnode);                           
	document.getElementById(id).appendChild(node);
}

 function calculaoperacao(){
	 let opera = operador();
	 let x1 = parseFloat(document.getElementById('n1').value);
	 let x2 = parseFloat( document.getElementById('n2').value);
	 let result = 0;


	 switch(opera){
		 case 'mais': result = "resultado = " + (x1 + x2);
		 break;
		 case 'menos': result = "resultado = " + (x1 - x2);
		 break;
		 case 'vezes': result = "resultado = " + (x1 * x2);
		 break;
		 case 'dividir': result = "resultado = " + (x1 / x2);
		 break;
		 default: result = "Nenhuma operação foi selecionada";
		 }

	 let sec = document.getElementsByTagName('section')[0];
	 let p  = sec.getElementsByTagName('p')[2];
	 if(p != undefined){
		sec.removeChild(p);
		addTxt(result, "calc");
	}
	else
		 addTxt(result, "calc");

 }
