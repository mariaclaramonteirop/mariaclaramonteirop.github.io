function vetor(){

    var usuarios = [  
        {  	nome: "Diego",
            habili: ["Javascript", "ReactJS", "Redux"]
        },
        {   nome: "Gabriel",
            habili: ["VueJS", "Ruby on Rails", "Elixir"]
        }];
    
        for (var usuario of usuarios){   // 
        
            var result = ('O ' + usuario.nome + ' possui  habilidades: ' + usuario.habili.join(", "));
            document.getElementById("mensagemp").innerHTML = result;
            alert(result);
        }
    
    }
    