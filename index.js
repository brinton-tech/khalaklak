links = document.querySelector(".links").querySelectorAll("a");
topbar = document.getElementById("topbar");
phonebar = document.getElementById("phonebar");
left = document.getElementById("left");
menu = document.getElementById("menu");
abtbtn = document.getElementById("abt-btn");
homebtn = document.getElementById("home-btn");
pricingbtn = document.getElementById("pricing-btn");
servicesbtn = document.getElementById("services-btn");
contanctsbtn = document.getElementById("contancts-btn");
testimonialsbtn = document.getElementById("testimonials-btn");
viewportWidth = window.innerWidth 
mybtn = document.getElementById("mybtn");


links.forEach(element => {
   element.addEventListener("click", function(){
    links.forEach(nav=>nav.classList.remove("active"));

    this.classList.add("active");
   }) 
});


// mobile devices menubar
left.addEventListener("click", function(){
   topbar.style.display = "none";
});

menu.addEventListener("click", function(){
   topbar.style.display = "flex";
})


// sticky scrolling effect
window.addEventListener("scroll", function(){
   if (window.pageYOffset > 30) {
      phonebar.style.backgroundColor = "aliceblue";
      topbar.style.backgroundColor = "whitesmoke";
   } else {
      phonebar.style.backgroundColor = "transparent";
      topbar.style.backgroundColor = "transparent";
   }

// sticky scrolling effect on mobile devices
   function applyStylesBasedOnViewport() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
      if (viewportWidth < 950) {
        topbar.style.backgroundColor = "grey";
      } 
    }
    
    applyStylesBasedOnViewport();
    window.addEventListener("resize", applyStylesBasedOnViewport);


})


// smooth scroll effect on li click
abtbtn.addEventListener("click", function(){
   var viewportWidth = window.innerWidth 
   about = document.getElementById("about");
   abtdiv = about.offsetTop - 10;

   if (viewportWidth < 950){
     abtdiv = about.offsetTop- 40;
   }

   window.scrollTo({
      top: abtdiv,
      behavior: "smooth"
   })

   if (viewportWidth < 950){
      topbar.style.display = "none";
    }
    
})

homebtn.addEventListener("click", function(){
   var viewportWidth = window.innerWidth 
   hero = document.getElementById("hero");
   homediv = hero.offsetTop;

   window.scrollTo({
      top: homediv,
      behavior: "smooth"
   })

   if (viewportWidth < 950){
      topbar.style.display = "none";
    }
})
contanctsbtn.addEventListener("click", function(){
   var viewportWidth = window.innerWidth 
   hero = document.getElementById("contancts");
   homediv = contancts.offsetTop - 45;

   window.scrollTo({
      top: homediv,
      behavior: "smooth"
   })

   if (viewportWidth < 950){
      topbar.style.display = "none";
    }
})
servicesbtn.addEventListener("click", function(){
   var viewportWidth = window.innerWidth 
   service = document.getElementById("services");
   homediv = service.offsetTop - 40;

   window.scrollTo({
      top: homediv,
      behavior: "smooth"
   })

   if (viewportWidth < 950){
      topbar.style.display = "none";
    }
})

testimonialsbtn.addEventListener("click", function(){
   var viewportWidth = window.innerWidth 
   testimonial = document.getElementById("testimonials");
   homediv = testimonial.offsetTop - 40;

   window.scrollTo({
      top: homediv,
      behavior: "smooth"
   })

   if (viewportWidth < 950){
      topbar.style.display = "none";
    }
})


// smooth scroll to contanct pae on contanctsUs btn
mybtn.addEventListener("click", function(){
   hero = document.getElementById("contancts");
   homediv = contancts.offsetTop - 45;

   window.scrollTo({
      top: homediv,
      behavior: "smooth"
   })
})

window.addEventListener('load', function() {
   var loadingAnimation = document.getElementById('loading-animation');
   loadingAnimation.classList.add('hide');
 });