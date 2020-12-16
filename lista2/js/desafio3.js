var lingua= ['javascript', 'reactjs', 'React native'];
	

function Habilidade(ling){

	if(ling.indexOf("javascript") == -1)
		return false;
 	else return true;
 }

var result = Habilidade(lingua) + ", o vetor possui a linguagem JAVASCRIPT";
document.getElementById("mensagemp").innerHTML=result;
console.log(result);