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
