const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y:"0%", duration: 1, stagger: 0.25 });
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".contact-me", {y: "-100%", duration: 1 }, "-=1");

function changeByFontSize(obj, size){
    obj.style.fontSize = size;
    obj.style.transition = "font 0.5s ease"
}
