// Column container
$("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".sticky-element");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
          width: "100px",
        height:"100px",
        gap: "10px",
      },
      {
        gap: "16px",
        width: "644px",
        height:"426px",
        duration: 1,
      }
    );
  });
  
  // CARD RADIUS
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".project-card-collapse");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
              borderRadius: "5px",
      },
      {
              borderRadius: "24px",
        duration: 1,
      }
    );
  });
  
  
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-1-top");
  
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
  
  
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-1-bottom");
  
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
        height: "65%"
      },
      {
        width: "100%",
        height: "100%",
        duration: 1,
      }
    );
  });
  
  // 2 TOP
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-2-top");
  
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
  
  
  // 2 BOTTOM
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-2-bottom");
  
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
        height: "25%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  // 3 TOP
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-3-top");
  
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
  
  
  // 3 BOTTOM
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-3-bottom");
  
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
        height: "5%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  // 4 TOP
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-4-top");
  
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
  
  
  // 4 BOTTOM
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-4-empty-placeholder-4-bottom");
  
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
  
  // 5 TOP
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-5-empty-placeholder-5-top");
  
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
        height: "5%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // 5 BOTTOM
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-5-empty-placeholder-5-bottom");
  
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
        height: "25%"
      },
      {
        width: "100%",
        height: "0%",
        duration: 1,
      }
    );
  });
  
  
  // 6 TOP
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-6-empty-placeholder-6-top");
  
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
        height: "100%",
        duration: 1,
      }
    );
  });
  
  // 6 BOTTOM
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".card-6-empty-placeholder-6-bottom");
  
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
  
  
  // BG color change
  $("[jc-portfolio='homepage-main-wrapper']").each(function (index) {
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
    let targetElement = $(".homepage-bg-dot");
  
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
       y: "150px", 
      opacity: "0%",
      },
      {
        y: "0px", 
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
    tl.from(targetElement, {
      y: "150px", 
      duration: 1
    });
  });