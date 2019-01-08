<!DOCTYPE html>
<html>
<body>

<p><button onclick="Fonksiyon1()">Stringlere ait ilk ve son karakterler</button></p>
<p><button onclick="Fonksiyon2()">Stringlere ait ilk karakterlerin küçültülmesi </button></p>
<p><button onclick="Fonksiyon3()">Stringlere ait son karakterler </button></p>
<p><button onclick="Fonksiyon4()">Stringlere ait son karakterlerin birleştirilmesi </button></p>
<p><button onclick="Fonksiyon5()">Stringlere ait sondan bir önceki karakterler </button></p>
<p><button onclick="Fonksiyon6()">Stringlerin uzunluk değerleri </button></p>
<p><button onclick="Fonksiyon7()">Karakter search</button></p>

<script>

  	var a = "String-1";
	var b = "Integer.2";
	var c = "Boolean=3";
    
  	var ailk = a.charAt(0);
    	var ason = a.charAt(a.length-1);

	var bilk = b.charAt(0);
    	var bson = b.charAt(b.length-1);

    	var cilk = c.charAt(0);
    	var cson = c.charAt(c.length-1);
    
function Fonksiyon1() {
    
	console.log("a stringine ait ilk karakter " + ailk + " son karakter " + ason + 
   		"\nb stringine ait ilk karakter " + bilk + " son karakter " + bson + 
   		"\nc stringine ait ilk karakter " + cilk + " son karakter " + cson );
}

function Fonksiyon2() {

	console.log(ailk.toLowerCase() + "\n" +bilk.toLowerCase() + "\n" +cilk.toLowerCase());
 }

function Fonksiyon3() {
	
    	console.log("a stringine ait son karakter " + a.charAt(a.length-1) +
    		"\nb stringine ait son karakter " + b.charAt(b.length-1) +
       		 "\nc stringine ait son karakter " + c.charAt(c.length-1));
}

function Fonksiyon4() {

	var x = a.slice(-1);
 	var y = b.slice(-1);
	var z = c.slice(-1);
    
    	console.log(x.concat(y,z));
}

function Fonksiyon5() {
    
        console.log("a stringine ait sondan bir önceki karakter " + a.charAt(a.length-2) + 
    		"\nb stringine ait sondan bir önceki karakter " + b.charAt(b.length-2) +
        	"\nc stringine ait sondan bir önceki karakter " + c.charAt(c.length-2));    
}

function Fonksiyon6() {
    
        console.log("a stringinin uzunluğu " + a.length + 
    		"\nb stringinin uzunluğu " + b.length +
        	"\nc stringinin uzunluğu " + c.length );
}

function Fonksiyon7() {

	console.log("a stringi içinde a karakterinin indexi " + a.search("a") +
        	"\nb stringi içinde a karakterinin indexi " + b.search("a") +
            	"\nc stringi içinde a karakterinin indexi " + c.search("a") +
            	"\n\na stringi içinde . karakterinin indexi " + a.search("\\.") +
            	"\nb stringi içinde . karakterinin indexi " + b.search("\\.") +
            	"\na stringi içinde . karakterinin indexi " + c.search("\\.") +
            	"\n\na stringi içinde 1 yada 2 karakterinin indexi " + a.search("1|2") +
            	"\nb stringi içinde 1 yada 2 karakterinin indexi " + b.search("1|2") +
            	"\nc stringi içinde 1 yada 2 karakterinin indexi " + c.search("1|2"));
            
}
</script>

</body>
</html>
