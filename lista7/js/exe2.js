$(function () {
    $("#vamos").click(function () {
        let arraytext = $("#arraytext").val();
        arraytext = arraytext.replace(/ \s+/g, '');
        let array = arraytext.split(",");
        let tamanho = array.length;
        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br> Em dobro: " + DOBLEA(array) + "<br> pares: " + VECTORPAR(array) + "<br> some dos elementos: " + somevector(array));
    })



    //LIMPEZA
    $("#naorepetir").click(function () {
        $("#result").text("");
        $("#arraytext").val("");
    })
    function DOBLEA(vector) {
        let v = vector.map(function (numero) {
            return numero * 2;
        })
        return v;
    }


    
    //FUNÇÃO  PAR
    function VECTORPAR(vector) {
        let v =vector.filter(function (numero) {
            return numero % 2 == 0;
        })
        if (v == "") {
            return "VALORES PARES INEXISTENTES"
        }
        else {
            return v;
        }
    }




    //FUNÇÃO SOMA

    function somevector(vector) {
        let v =vector.reduce(function (some, numero) {
            return parseInt(some) + parseInt(numero);
        });
        return v;
    }

})