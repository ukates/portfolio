const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: .2,
    rootMargin: "0px 0px -30px 0px"
}; 

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
)   {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
 appearOptions); 

 faders.forEach(fader => {
     appearOnScroll.observe(fader);
 });

 window.onbeforeunload = function() {
     window.scrollTo(0,0); 
 };