$(function () {
    $("#vamos").click(function () {
        let arraytext = $("#arraytext").val();
        arraytext = arraytext.replace(/\s+/g, '');
        let array = arraytext.split(",");
        let tamanho = array.length;
        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br>Valor Minimo: " + Minimo(array) + "<br> Valor máximo: " + Maximo(array) + "<br> Array sem repetição: " + naorepetir(array) + "<br> Array em ordem: " + crescente(array));
    })

    
    $("#naorepetir").click(function () {
        $("#result").text("");
        $("#arraytext").val("");
    })
    function Minimo(vector) {
        let min;
        vector.forEach(function (numero) {
            if (numero == Math.min(...vector)) {
                min = numero;
            }
        });
        return min;
    }

    
    function Maximo(vector) {
        let max;
        vector.forEach(function (numero) {
            if (numero == Math.max(...vector)) {
                max = numero;
            }
        });
        return max;
    }
    function naorepetir(vector) {
        let vectornaorepete = [...new Set(vector)];
        return vectornaorepete.join(",");
    }
    function crescente(vector) {
        return vector.sort().join(",");
    }
})