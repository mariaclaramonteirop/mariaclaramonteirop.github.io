function experiente(anos){

	if(anos==0)
		return "Você não tem nenhuma esperiencia?";
	else if(anos<=1)
		return "Você é um Iniciante, meu/minha jovem!"
	else if(anos<=3)
		return "Você é Intermediário!";
	else if(anos<=6)
		return "Você é avançado!!";
	else 
		return "Você é Jedi Master";
}

function retornando(){

	var r1 = document.getElementById("mensagemp").value;
	var result = experiente(r1);
	alert(result);

}

