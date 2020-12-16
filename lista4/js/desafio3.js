
var vetor = ["Diego", "Gabriel", "Lucas"];//nomes da lista
vetor.forEach(function (people) 
{
	var nomes = document.createElement('li');
	nomes.innerHTML = people; 
	var lista = document.getElementById('ul');
	lista.appendChild(nomes);  
});

