function random(){

    var random_num = parseInt(Math.random()*1000);

    document.getElementById("ip1").value = random_num;

}

function convert(){


    var ip1 = Number(document.getElementById("ip1").value); 
    var select = document.getElementById("select").value;

    var binario = document.getElementById("binario");
    var display_bin = binario.style.display;

    var octal = document.getElementById("octal");
    var display_oct = octal.style.display;

    var decimal = document.getElementById("decimal");
    var display_dec = decimal.style.display;

    var hexadecimal = document.getElementById("hexadecimal");
    var display_hex = hexadecimal.style.display;

    if(select == 2){

        var oct = ip1.toString(2);
                
        document.getElementById("conversao").innerHTML = oct; 

        binario.style.display = 'block';
        octal.style.display = 'none';
        decimal.style.display = 'none';
        hexadecimal.style.display = 'none';
    
    } else if(select == 8){

        var oct = ip1.toString(8);
                
        document.getElementById("conversao").innerHTML = oct;

        binario.style.display = 'none';
        octal.style.display = 'block';
        decimal.style.display = 'none';
        hexadecimal.style.display = 'none';

    } else if(select == 10){

        var oct = ip1.toString(10);
                
        document.getElementById("conversao").innerHTML = oct;

        binario.style.display = 'none';
        octal.style.display = 'none';
        decimal.style.display = 'block';
        hexadecimal.style.display = 'none';

    } else if(select == 16){

        var oct = ip1.toString(16).toUpperCase();
                
        document.getElementById("conversao").innerHTML = oct;

        binario.style.display = 'none';
        octal.style.display = 'none';
        decimal.style.display = 'none';
        hexadecimal.style.display = 'block';

    }

    return oct;

}

function convert2(oct){

    num = Number(convert(oct));
    num_string = convert(oct);

    var binario = document.getElementById("binario");
    var display_bin = binario.style.display;

    var octal = document.getElementById("octal");
    var display_oct = octal.style.display;

    var decimal = document.getElementById("decimal");
    var display_dec = decimal.style.display;

    var hexadecimal = document.getElementById("hexadecimal");
    var display_hex = hexadecimal.style.display;

    var select_bin = document.getElementById("select_bin").value;
    var select_oct = document.getElementById("select_oct").value;
    var select_dec = document.getElementById("select_dec").value;
    var select_hex = document.getElementById("select_hex").value;

    if(display_bin == 'block' && display_oct == 'none' && display_dec == 'none' && display_hex == 'none'){

        if(select_bin == 2){

            var oct = parseInt(num, 2);

            var oct2 = oct.toString(2);
                    
            document.getElementById("conversao2").innerHTML = oct2; 
    
        } else if(select_bin == 8){
    
            var oct = parseInt(num, 2);

            var oct2 = oct.toString(8);
                    
            document.getElementById("conversao2").innerHTML = oct2; 
    
        } else if(select_bin == 10){
    
            var oct = parseInt(num, 2);

            var oct2 = oct.toString(10);
                    
            document.getElementById("conversao2").innerHTML = oct2; 
    
        } else if(select_bin == 16){
    
            var oct = parseInt(num, 2);

            var oct2 = oct.toString(16);
                    
            document.getElementById("conversao2").innerHTML = oct2; 
    
        }

    } else if(display_bin == 'none' && display_oct == 'block' && display_dec == 'none' && display_hex == 'none'){

        if(select_oct == 2){

            var oct = parseInt(num, 8);

            var oct2 = oct.toString(2);
                    
            document.getElementById("conversao3").innerHTML = oct2; 
    
        } else if(select_oct == 8){
    
            var oct = parseInt(num, 8);

            var oct2 = oct.toString(8);
                    
            document.getElementById("conversao3").innerHTML = oct2; 
    
        } else if(select_oct == 10){
    
            var oct = parseInt(num, 8);

            var oct2 = oct.toString(10);
                    
            document.getElementById("conversao3").innerHTML = oct2; 
    
        } else if(select_oct == 16){
    
            var oct = parseInt(num, 8);

            var oct2 = oct.toString(16);
                    
            document.getElementById("conversao3").innerHTML = oct2; 
    
        }

    } else if(display_bin == 'none' && display_oct == 'none' && display_dec == 'block' && display_hex == 'none'){

        if(select_dec == 2){

            var oct = parseInt(num, 10);

            var oct2 = oct.toString(2);
                    
            document.getElementById("conversao4").innerHTML = oct2; 
    
        } else if(select_dec == 8){
    
            var oct = parseInt(num, 10);

            var oct2 = oct.toString(8);
                    
            document.getElementById("conversao4").innerHTML = oct2; 
    
        } else if(select_dec == 10){
    
            var oct = parseInt(num, 10);

            var oct2 = oct.toString(10);
                    
            document.getElementById("conversao4").innerHTML = oct2; 
    
        } else if(select_dec == 16){
    
            var oct = parseInt(num, 10);

            var oct2 = oct.toString(16);
                    
            document.getElementById("conversao4").innerHTML = oct2; 
    
        }

    } else if(display_bin == 'none' && display_oct == 'none' && display_dec == 'none' && display_hex == 'block'){

        if(select_hex == 2){

            var oct = parseInt(num_string, 16);

            var oct2 = oct.toString(2);
                    
            document.getElementById("conversao5").innerHTML = oct2; 
    
        } else if(select_hex == 8){
    
            var oct = parseInt(num_string, 16);

            var oct2 = oct.toString(8);
                    
            document.getElementById("conversao5").innerHTML = oct2; 
    
        } else if(select_hex == 10){
    
            var oct = parseInt(num_string, 16);

            var oct2 = oct.toString(10);
                    
            document.getElementById("conversao5").innerHTML = oct2; 
    
        } else if(select_hex == 16){
    
            var oct = parseInt(num_string, 16);

            var oct2 = oct.toString(16);
                    
            document.getElementById("conversao5").innerHTML = oct2; 
    
        }

    }   

}


