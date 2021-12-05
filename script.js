function random(){

    var random_num = parseInt(Math.random()*1000);

    document.getElementById("resultado").value = random_num;

}

function limpar(){

    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("converter").value = "";

}

function soma(){

    var result = Number(document.getElementById("resultado").value);

    var n1 = Number(document.getElementById("valor1").value); 
    var n2 = Number(document.getElementById("valor2").value); 

    var soma = n1+n2;

    document.getElementById("resultado").value = soma; 

}

function sub(){

    var result = Number(document.getElementById("resultado").value);

    var n1 = Number(document.getElementById("valor1").value); 
    var n2 = Number(document.getElementById("valor2").value); 

    var sub = n1-n2;

    document.getElementById("resultado").value = sub; 

}

function mul(){

    var result = Number(document.getElementById("resultado").value);

    var n1 = Number(document.getElementById("valor1").value); 
    var n2 = Number(document.getElementById("valor2").value); 

    var mul = n1*n2;

    document.getElementById("resultado").value = mul; 

}

function div(){

    var result = Number(document.getElementById("resultado").value);

    var n1 = Number(document.getElementById("valor1").value); 
    var n2 = Number(document.getElementById("valor2").value); 

    var div = n1/n2;

    document.getElementById("resultado").value = div; 

}

function bin(result){

    var n1 = Number(document.getElementById("resultado").value); 

    var oct = n1.toString(2);
                
    document.getElementById("converter").value = oct; 

}

function oct(){

    var n1 = Number(document.getElementById("resultado").value); 

    var oct = n1.toString(8);
                
    document.getElementById("converter").value = oct; 

}

function dec(){

    var n1 = Number(document.getElementById("resultado").value); 

    var oct = n1.toString(10);
                
    document.getElementById("converter").value = oct; 

}

function hex(){

    var n1 = Number(document.getElementById("resultado").value); 

    var oct = n1.toString(16).toUpperCase();
                
    document.getElementById("converter").value = oct; 

}

function base(){

    var n1 = Number(document.getElementById("resultado").value); 

    var base = prompt("Insira o valor da base que quer converter");

    base = Number(base);

    if(base < 2 || base > 36){
        alert("O valor da base tem de estar entre 2- 36");
    }

    else{

        var oct = n1.toString(base).toUpperCase();
                    
        document.getElementById("converter").value = oct; 

    }

}