function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
locomotive()





var navi=document.querySelector("#nav #nright i")
var navic=document.querySelector("#navmenu i")
navi.addEventListener("click", function(){
    
    navmenu()
    
    }
  )

    navic.addEventListener("click", function(){
      
      navmenuclose()
      
      }
      
    
)

var click=0;

function navmenu(){
    gsap.to("#navmenu",{
        transform:"translateX(-40vw)",
    })
}

function navmenuclose(){
    gsap.to("#navmenu",{
        transform:"translateX(40vw)",
    })
}






var navic2=document.querySelector("#navmenu2 i")

navi.addEventListener("click", function(){
  
  navmenu2()
  
  }
)

  navic2.addEventListener("click", function(){
    
    navmenuclose2()
    
    }
    
  
)

var click=0;

function navmenu2(){
  gsap.to("#navmenu2",{
      transform:"translateX(-100vw)",
  })
}

function navmenuclose2(){
  gsap.to("#navmenu2",{
      transform:"translateX(100vw)",
  })
}
  




var tl= gsap.timeline();

tl.from("#loader h1, #loader h2",{
    y: -60,
    opacity:0,
    duration:1.4,
    scale: 1.1,
    filter: "blur(9px)",
})

tl.to("#loader, #loader h1",{
    y: 300,
    opacity:0,
    // blur:("60px"),
    duration:0.6,
    filter: "blur(10px)",
    delay:1.7,
    display:"none",
    
})



// tl.to("#loader",{
//     y: 600,
//     opacity:0,
//     // blur:("60px"),
//     duration:0.4,
//     filter: "blur(7px)",
//     delay:0,
// })

tl.from("#nav,#nav #nleft",{
    opacity:0,
    y:-50,
    stagger: 0.2,
    duration:0.5,
    delay:-0.5,
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



function videoconAnimation(){
    var videocon= document.querySelector("body")
    var pointer= document.querySelector("#pointer ")
    videocon.addEventListener("mouseenter",function(){
      gsap.to(pointer,{
          scale:1,
          opacity:1
      })
    
    })
    videocon.addEventListener("mousemove",function(dets){
      gsap.to(pointer,{
          left:dets.x+20,
          top:dets.y+30,
      })
    })

    // videocon.addEventListener("mouseleave",function(){
    //     gsap.to(pointer,{
    //         scale:0.7,
    //         opacity:1
    //     })
    // })

    var videocon= document.querySelector("body #page1 #wrapper2")
    var pointer= document.querySelector("#pointer ")
    var pointer2= document.querySelector("#pointer i ")
    videocon.addEventListener("mouseenter",function(){
        gsap.to(pointer,{
            scale:4,
            opacity:1,

        })
        gsap.to(pointer2,{
          
          opacity:1,

      })

    })
    var videocon= document.querySelector("body #page1 #wrapper2")
    var pointer= document.querySelector("#pointer ")
    videocon.addEventListener("mouseleave",function(){
        gsap.to(pointer,{
            scale:1,
            opacity:1,

        })
        gsap.to(pointer2,{
          
          opacity:0,

      })

    })


    }
    videoconAnimation()



// function overlaypointer(){
//     const span = document.querySelector('.hover-btn2')
//     const overlay = document.querySelector('.overlay')

//     window.addEventListener('mousemove', (e) => {
//         const { clientX, clientY } = e;
//         const x = Math.round((clientX / window.innerWidth) * 100);
//         const y = Math.round((clientY / window.innerHeight) * 100);

//         gsap.to(overlay, {
//             '--x': `${x}%`,
//             '--y': `${y}%`,
//             duration: 0.3,
//             ease: 'sine.out',
//             opacity:1
//         })
//     })
// }

//     var videocon= document.querySelector("#page1")
//     // var pointer= document.querySelector("#pointer ")
//     videocon.addEventListener("mouseenter",function(){
//       overlaypointer()
//     })
//     const overlay = document.querySelector('.overlay')
//     videocon.addEventListener("mouseleave",function(){
//       gsap.to(overlay,{
//         opacity:0
//       })
//     })


  // tl.from("#wrapper2 ,#wrapper2 .elem",{
  //   opacity:0,
  //   y:-50,
  //   stagger: 0.2,
  //   duration:0.7,
  //   delay:-0.8,
  //   filter: "blur(10px)",
  // })
   

  // gsap.to("#loop2",{
  //   transform:"translateX(-105%)",
  //   duration:140,
  //   repeat:-1,
  
  //   // scrollTrigger:{
  //   //   trigger:"#page2",
  //   //   scroller:"body",
  //   //   markers:true,
  //   //   start:"top 0%",
  //   //   end:"top 40%",
  //   //   scrub:1
  //   // }





  // })



