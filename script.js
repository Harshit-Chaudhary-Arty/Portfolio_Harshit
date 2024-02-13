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

tl.from("#page1 #nav #nleft, #page1 #nav #nright",{
    opacity:0,
    y:-50,
    stagger,
    duration:1,
})