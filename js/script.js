function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
    document.querySelector("#som").play();
}

function clean(){
    document.getElementById("resultado").innerHTML = "";
    document.querySelector("#som").play();
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
    document.querySelector("#som").play();
}

function calcular(){
    document.querySelector("#som").play();
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }else{
        document.getElementById("resultado").innerHTML = "Nada..."
    }
}