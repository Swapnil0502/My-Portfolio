
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
        };
    });
let header=document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
darkModeIcon.classList.toggle('bx-sun');
document.body.classList.toggle('dark-mode');
};
function myFunction() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("mybtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{ origin:'top'});
ScrollReveal().reveal('.home-img img,.services-container, .portfolio-box,.contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{origin:'right'});
function SendEmail(){
  var params={
      from_name:document.getElementById("name").value,
      email_id:document.getElementById("email").value,
      adress:document.getElementById("adress").value,
      phone:document.getElementById("phone number").value,
      message:document.getElementById("area").value
  }
  emailjs.send('service_ue0u59e', 'template_zrwiudc', params)
  .then(function(res) {
      alert('SUCCESS!'+res.status);
  })
}