function random(){

    var random_num = parseInt(Math.random()*1000);

    document.getElementById("resultado").value = random_num;

}

function random2(){

    var random_num = parseInt(Math.random()*1000);

    document.getElementById("dado").value = random_num;

}

function limpar(){

    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("converter").value = "";

}

function limpar2(){

    document.getElementById("dado").value = "";
    document.getElementById("convertido").value = "";

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

function convert(){

    var n1 = Number(document.getElementById("dado").value); 
    var n2 = document.getElementById("dado").value;
    var tipo_dado = document.getElementById("tipo_dado").value;
    var tipo_base = document.getElementById("tipo_base").value;

    if(tipo_dado == 2){

        if(tipo_base == 2){

            const test = ~0x01
            for(var i=n2.length-1; i>=0; --i){
                if(test & n2[i]){ return document.getElementById("convertido").value =("Valor não binário"); }
            }
            return document.getElementById("convertido").value = n1;

        }

        else if(tipo_base == 8){

            const test = ~0x01
            for(var i=n2.length-1; i>=0; --i){
                if(test & n2[i]){ return document.getElementById("convertido").value =("Valor não binário"); }
            }
            n2=parseInt(n2,2);
            return document.getElementById("convertido").value = n2.toString(8);

        }

        else if(tipo_base == 10){

            const test = ~0x01
            for(var i=n2.length-1; i>=0; --i){
                if(test & n2[i]){ return document.getElementById("convertido").value =("Valor não binário"); }
            }
            n2=parseInt(n2,2);
            return document.getElementById("convertido").value = n2.toString(10);

        }

        else if(tipo_base == 16){

            const test = ~0x01
            for(var i=n2.length-1; i>=0; --i){
                if(test & n2[i]){ return document.getElementById("convertido").value =("Valor não binário"); }
            }
            n2=parseInt(n2,2);
            return document.getElementById("convertido").value = n2.toString(16).toUpperCase();

        }

    }

    else if(tipo_dado == 8){

        if(tipo_base == 2){

           n2 = parseInt(n2,8);

           n2 = n2.toString(2);

            document.getElementById("convertido").value = n2;

        }

        else if(tipo_base == 8){

            document.getElementById("convertido").value = n2;

        }

        else if(tipo_base == 10){

            n2 = parseInt(n2,8);

            n2 = n2.toString(10);

            document.getElementById("convertido").value = n2;

        }

        else if(tipo_base == 16){

            n2 = parseInt(n2,8);

            n2 = n2.toString(16);

            document.getElementById("convertido").value = n2;

        }
        

    }

    else if(tipo_dado == 10){

        if(tipo_base == 2){

            n1 = n1.toString(2);

            document.getElementById("convertido").value = n1;

        }

        else if(tipo_base == 8){

            n1 = n1.toString(8);

            document.getElementById("convertido").value = n1;

        }

        else if(tipo_base == 10){

            document.getElementById("convertido").value = n1;

        }

        else if(tipo_base == 16){

            n1 = n1.toString(16);

            document.getElementById("convertido").value = n1.toUpperCase();

        }

    }

    else if(tipo_dado == 16){

        if(tipo_base == 2){

            for(var i = n2.length-1; i>= 0; i--){
                if(n2[i] != 'a' && n2[i] != 'b' && n2[i] != 'c' && n2[i] != 'd' && n2[i] != 'e' && n2[i] != 'f' && n2[i] != 1 && n2[i] != 2 && n2[i] != 3 && n2[i] != 4 && n2[i] != 5 && n2[i] != 6 && n2[i] != 7 && n2[i] != 8 && n2[i] != 9){
                    return document.getElementById("convertido").value = "";
                }
            }

            n2=parseInt(n2,16);

            n2= n2.toString(2);

            document.getElementById("convertido").value = n2;

        }

        else if(tipo_base == 8){

            for(var i = n2.length-1; i>= 0; i--){
                if(n2[i] != 'a' && n2[i] != 'b' && n2[i] != 'c' && n2[i] != 'd' && n2[i] != 'e' && n2[i] != 'f' && n2[i] != 1 && n2[i] != 2 && n2[i] != 3 && n2[i] != 4 && n2[i] != 5 && n2[i] != 6 && n2[i] != 7 && n2[i] != 8 && n2[i] != 9){
                    return document.getElementById("convertido").value = "";
                }
            }

            n2=parseInt(n2,16);

            n2= n2.toString(8);

            document.getElementById("convertido").value = n2;

        }

        else if(tipo_base == 10){

            for(var i = n2.length-1; i>= 0; i--){
                if(n2[i] != 'a' && n2[i] != 'b' && n2[i] != 'c' && n2[i] != 'd' && n2[i] != 'e' && n2[i] != 'f' && n2[i] != 1 && n2[i] != 2 && n2[i] != 3 && n2[i] != 4 && n2[i] != 5 && n2[i] != 6 && n2[i] != 7 && n2[i] != 8 && n2[i] != 9){
                    return document.getElementById("convertido").value = "";
                }
            }

            n2=parseInt(n2,16);

            n2= n2.toString(10);

            document.getElementById("convertido").value = n2;
         

        }

        else if(tipo_base == 16){

            for(var i = n2.length-1; i>= 0; i--){
                if(n2[i] != 'a' && n2[i] != 'b' && n2[i] != 'c' && n2[i] != 'd' && n2[i] != 'e' && n2[i] != 'f' && n2[i] != 1 && n2[i] != 2 && n2[i] != 3 && n2[i] != 4 && n2[i] != 5 && n2[i] != 6 && n2[i] != 7 && n2[i] != 8 && n2[i] != 9){
                    return document.getElementById("convertido").value = "";
                }
            }

            document.getElementById("convertido").value = n2.toString(16).toUpperCase();

        }

    }

}
