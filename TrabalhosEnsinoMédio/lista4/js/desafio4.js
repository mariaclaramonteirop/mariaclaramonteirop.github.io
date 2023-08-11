var vetor = ["Diego", "Gabriel", "Lucas"];
vetor.forEach(function(people) 
{
	var nomes = document.createElement('li');
	names.innerHTML = people; 
	var lista = document.getElementById('ul');
	lista.appendChild(names);  
	
});

function adicionar(){

	var input = document.getElementById('input').value;
	if(input == ' ')
	{
		alert('O campo está vazio! Por favor, preencha com um item.');
	}
	else {
		var names = document.createElement('li');
		names.innerHTML = input; 
		var lista = document.getElementById('ul');
		lista.appendChild(names);
		document.getElementById('input').value = ' '; 
	}

}