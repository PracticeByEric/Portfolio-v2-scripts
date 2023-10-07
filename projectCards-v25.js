// The code include project card show and hide as well as header and footer

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Project card container size change on scroll
$("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-wrapper']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    // Sizing original 100px
    // Gap original from 10px
    tl.fromTo(targetElement, {
          // old 100px
          width: "100px",
          // old 100px
        height:"100px",
        // old 10px
        gap: "10px",
      },
      // Sizing to 426px height
      // Gap to 16px
      {
        gap: "16px",
        width: "70vh",
        height:"70vh",
        duration: 1,
      }
    );
  });
  
  // Project card radius change on scroll
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-collapse']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    // Project card radius from 5px
    tl.fromTo(targetElement, {
              borderRadius: "5px",
      },
      // Project card radius change to 24px
      {
              borderRadius: "24px",
        duration: 1,
      }
    );
  });

  // Project card grid height change on scroll
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-column-grid']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    // Project column height from fill 100%, no over ride
    tl.fromTo(targetElement, {
              height:"100px",
      },
      // Project column height limit to 488px
      {    
        height: "448px",
        duration: 1,
      }
    );
  });
  
  // Project card shrinkage animation
  // Project card 1 top 
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-1-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "10%"
      },
      {
        width: "100%",
        height: "100%",
        duration: 1,
      }
    );
  });
  
    // Project card 1 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-1-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "55%"
      },
      {
        width: "100%",
        height: "100%",
        duration: 1,
      }
    );
  });
  
  // Project card 2 top 
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-2-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "0%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // Project card 2 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-2-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "20%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  // Project card 3 top
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-3-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "20%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // Project card 3 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-3-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "0%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  // Project 4 card top
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-4-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "10%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // Project card 4 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-4-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "15%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  // Project card 5 top
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-5-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "2%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // Project card 5 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-5-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "30%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // Project card 6 top
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-6-top']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "10%"
      },
      {
        width: "100%",
        height: "100%",
        duration: 1,
      }
    );
  });
  
  // Project card 6 bottom
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='project-card-6-bottom']");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "100%",
        height: "55%"
      },
      {
        width: "100%",
        height: "100%",
        duration: 1,
      }
    );
  });
  
  // BG color change start from 'homepage-main-wrapper'
  // tagged element format ".xxxxx(tag name)"
$(".main-bg-gradient-trigger").each(function (index) {
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
      backgroundColor: "#EBEBF0",
    },
    {
       backgroundColor: "#242426",
      duration: 1
    }
  );
});

  // dot-bg opacity
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("[jc-portfolio='dottedCanvas-container']");
    // let targetElement = $(".homepage-bg-dot");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "95% 95%",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        opacity: "0%",
      },
      {
        opacity: "100%",
        duration: 1
      }
    );
  });
  
  // Header show and hide
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".header-homepage-bg");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "80% 80%",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
      // remove header movement
       // y: "150px", 
      opacity: "0%",
      },
      {
        // remove header movement
        // y: "0px", 
      opacity: "100%",
        duration: 80
      }
    );
  });
  
  // Footer show and hide
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".footer-grid");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
  
        start: "80% 80%",
        end: "bottom bottom",
        scrub: 1
      }
    });
    // tl.from(targetElement, {
    //   y: "150px", 
    //   duration: 1
    // });
    // Change opacity
    tl.fromTo(targetElement, {
      // remove header movement
      opacity: "0%",
      },
      {
      opacity: "100%",
        duration: 80
      }
    );
  });

  