var endereco = {
	rua: "Rua dos pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
}
	
var result = "O usuário mora em ";
result += endereco.cidade;
result += "/";
result += endereco.uf;
result += ", no bairro ";
result += endereco.bairro;
result += ", na rua ";
result += endereco.rua;
result += ", com nº ";
result += endereco.numero;


document.getElementById("mensagem1").innerHTML=result; 