// BG color change start from 'homepage-main-wrapper'
$("homepage-main-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        backgroundColor: "#000000",
      },
      {
         backgroundColor: "#242426",
        duration: 1
      }
    );
  });