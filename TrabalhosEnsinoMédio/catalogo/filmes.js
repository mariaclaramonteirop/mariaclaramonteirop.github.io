$(function(){
	let link = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
	$.get(link, function(data){
		console.log(data);
		$.each(data, function(index, filme){
			let $divCatalogo = $("<div>").addClass("catalogo");
			let $figura = $("<img>").attr("src", filme.figura).addClass("figura");
			let $titulo = $("<h1>").text(filme.titulo).addClass("titulo");
			let $genero = $("<p>").text(filme.generos.join(", ")).addClass("generos");
			let estrela = filme.opinioes[0].rating;
			let $sinopse = $("<h4>").text(filme.resumo).addClass("sinopse");
			let $elenco = $("<p>").text("Elenco: " + filme.elenco.join(", ")).addClass("elenco");
			let $semelhantes = $("<p>").text("Títulos Semelhantes:").addClass("ts");


			switch(estrela){
				case 4: {
					$estrela = $("<img>").attr("src", "4.png").addClass("estrela");
				} break;
				case 5: {
					$estrela = $("<img>").attr("src", "5.png").addClass("estrela");
				}
			}


			$divCatalogo.append($figura);
			$divCatalogo.append($titulo);
			let classificacao = filme.classificacao;
			if(classificacao == 18){
				$figClassificacao = $("<img>").attr("src", "18.png").addClass("classificacao");
				$divCatalogo.append($figClassificacao);
			}
			else if(classificacao == 16){
				$figClassificacao = $("<img>").attr("src", "16.png").addClass("classificacao");
				$divCatalogo.append($figClassificacao);
			}
			else if(classificacao == 14){
				$figClassificacao = $("<img>").attr("src", "14.png").addClass("classificacao");
				$divCatalogo.append($figClassificacao);
			}
			else if(classificacao == 12){
				$figClassificacao = $("<img>").attr("src", "12.png").addClass("classificacao");
				$divCatalogo.append($figClassificacao);
			}
			else{
				$figClassificacao = $("<img>").attr("src", "livre.png").addClass("classificacao");
				$divCatalogo.append($figClassificacao);
			}
			$divCatalogo.append($estrela);
			$divCatalogo.append($genero);
			$divCatalogo.append($sinopse);
			$divCatalogo.append($elenco);
			$divCatalogo.append($semelhantes);
			$.each(filme.titulosSemelhantes, function(idx, titulo){
				let $tituloSemelhante = $("<li>").text("| " + data[titulo-1].titulo + " | ");
				$tituloSemelhante.addClass("semelhantes");
				$divCatalogo.append($tituloSemelhante);
			});

			$("body").append($divCatalogo);
		})

	});
})