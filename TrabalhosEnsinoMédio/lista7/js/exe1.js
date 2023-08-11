
$(function () {
    $("#vamos").click(function () {
        let arraytext = $("#arraytext").val();
        arraytext = arraytext.replace(/\s+/g, '');
        let array = arraytext.split(",");
        let tamanho = array.length;


        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br>Sequencia de fibonacci até " + arraytext + " números: " + fibonacci(arraytext));
    })


    $("#naorepetir").click(function () {
        $("#result").text("");
        $("#arraytext").val("");
    })


    function fibonacci(ficc) {
        let array = new Array;
        array.push(0);
        let v = 0;
        let n = 1;
        let fibo = 1;
        for (let i = 0; i < ficc - 1; i++) {
            array.push(fibo);
            fibo = v + n;
             v = n;
            b = fibo;
        }
        return array.join(",");
    }
})