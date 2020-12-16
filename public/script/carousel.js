
function carousel(id,time){
 var myCarousel = document.querySelector(id)
var carousel = new bootstrap.Carousel(myCarousel, {
  interval:time,
})

}

 function display(){

  var classname =  document.getElementById("parametre").className;

  document.getElementById("btnparametre").innerText;

  if(classname == "d-block"){

  document.getElementById("btnparametre").innerText = "+";

  document.getElementById("parametre").className ="d-none";

  }else{

  document.getElementById("btnparametre").innerText = "-";


 document.getElementById("parametre").className ="d-block";


  }

 }


