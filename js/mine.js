var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  });
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    document.getElementById("show").style.display="block"
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let vendor      = document.getElementById("vendor");
let media       = document.getElementById("media");
let corp        = document.getElementById("corp");
let team        = document.getElementById("team");

function calaulations(){
    let sum         = parseInt( vendor.value)+parseInt( media.value)+parseInt( corp.value)+parseInt( team.value)|| 0;
    let Brex        = sum * 0.3;
    let Stripe      = sum * 2.9;
    let Amex        = sum * 1.3;
    let unlimited   = sum * 1.1;
    let lifetime    = sum * 1.2;
    document.getElementById("amexCard").innerText=formatter.format(Amex);
    document.getElementById("BrexCard").innerText=formatter.format(Brex)
    document.getElementById("StripeCard").innerText=formatter.format(Stripe)
    let amexc=Amex/(sum*3)*100 || 0
    let sc=Stripe/(sum*3)*100 || 0
    let bc=Brex/(sum*3)*100 || 0

    document.getElementsByClassName("meter")[0].style.width=`${amexc}%`;
    document.getElementsByClassName("meter")[1].style.width=`${sc}%`;
    document.getElementsByClassName("meter")[2].style.width=`${bc}%`;

    [...document.getElementsByClassName("meter1")].forEach(
        (element, index, array) => {
            let c=unlimited/(sum*3)*100||0 
            document.getElementsByClassName("meter1")[index].style.width=`${c}%`;

        }
    );
    [...document.getElementsByClassName("meter2")].forEach(
        (element, index, array) => {
            let b=lifetime/(sum*3)*100||0
            document.getElementsByClassName("meter2")[index].style.width=`${b}%`;
        }
    );
    [...document.querySelectorAll("#unlimated")].forEach(
        (element, index, array) => {
            document.querySelectorAll("#unlimated")[index].innerText=formatter.format(unlimited);
        }
    );
    [...document.querySelectorAll("#unlimated")].forEach(
        (element, index, array) => {
            document.querySelectorAll("#life")[index].innerText=formatter.format(lifetime);
        }
    );

}

vendor.addEventListener("input",function(){
    calaulations()
});media.addEventListener("input",function(){
    calaulations()
});corp.addEventListener("input",function(){
    calaulations()
});team.addEventListener("input",function(){
    calaulations()
})
