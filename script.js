var tl= gsap.timeline();

tl.from("#loader h1, #loader h2",{
    y: -60,
    opacity:0,
    duration:1.4,
    scale: 1.1,
    filter: "blur(9px)",
})

tl.to("#loader h1, #loader h2",{
    y: 60,
    opacity:0,
    // blur:("60px"),
    duration:0.3,
    filter: "blur(7px)",
    delay:0.7,
    display:"none",
})

tl.to("#loader",{
    y: 100,
    opacity:0,
    // blur:("60px"),
    duration:0.3,
    filter: "blur(7px)",
    delay:0,
})

tl.from("#nav,#nav #nleft,#nav #nright a",{
    opacity:0,
    y:-50,
    stagger: 0.2,
    duration:0.5,
    delay:0,
    filter: "blur(10px)",

})
tl.from(" #wrapper1 h1,#wrapper1 h2,#wrapper1 #spanh2",{
    opacity:0,
    y:-50,
    stagger: 0.3,
    duration:0.7,
    delay:-0.8,
    filter: "blur(10px)",

})