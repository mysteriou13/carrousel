

function carousel(id,time){
 var myCarousel = document.querySelector(id)
var carousel = new bootstrap.Carousel(myCarousel, {
  interval:time,
})

}

