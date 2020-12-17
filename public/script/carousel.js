
function carousel(id,time){
 var myCarousel = document.querySelector(id)
var carousel = new bootstrap.Carousel(myCarousel, {
  interval:time,
})

}

 function display(){

  var classname =  document.getElementById("parametre").className;


  var chaine = "d-block";

  var Resultat = classname.indexOf(chaine);
  

   if(Resultat == 1){

  var none = classname.replace("d-block", 'd-none');

  document.getElementById("parametre").className = none;

  document.getElementById("btnparametre").innerHTML = "+";

   }else{
 
    var none = classname.replace("d-none", 'd-block');
 
   document.getElementById("btnparametre").innerHTML = "-";


  document.getElementById("parametre").className = none;

 



  }


 }


