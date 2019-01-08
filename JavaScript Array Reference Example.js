<!DOCTYPE html>
<html>
<body>

<script>

  var str =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type and scrambled it to make a type\nspecimen book. It has survived not only five centuries, but also the leap\ninto electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset\nsheets containing Lorem Ipsum passages, and more recently with\ndesktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n";
  
  var Array = [];										//1.Kısım
  Array = str.split("\n");
  console.log(Array);
  
  var Array2 = [];										//2.Kısım
  Array2 = str.split(" ");
  console.log(Array2);
  
  dCount = 0,											//3.Kısım
  len = Array2.length;

	for (var i = 0; i < len; i++) {

		if (i % 2 == 0) {

			Array2.splice(i - dCount, 1);
			dCount++;
		}
	}
	console.log(Array2);
  
  var Array4 =[100, 101, 120, 102, 20, 201, 2] ;        //4.Kısım
  Array4 = Array4.sort(function(a, b){return a - b});
  console.log(Array4);
  
  function checkNumber(number) {  						//5.Kısım
  return number > 101;
  }
  var Array5 = Array4.filter(checkNumber);
  console.log(Array5);

  function checkElement (element) { 					//6.Kısım
		if(element > 101) {
			return Array4.indexOf(element);
		}
  }
  
  function myFunction() {
	  var w = Array4.filter(checkElement);
	  console.log(w);
	}
</script>

</body>
</html>