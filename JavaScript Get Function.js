
<script>

var object = {
 
  element1 : "Hello",
  
  get element2() {
    return (this.element1 + " "+ "World");},

  get element3() {
   	 return this.element1 + " " + this.element2; }

};

 console.log(object.element3);

</script>
