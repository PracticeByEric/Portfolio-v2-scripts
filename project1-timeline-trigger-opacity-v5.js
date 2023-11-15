// Timeline trigger based scroll
const project1Scroll = document.getElementById("project1-scrolling-div");

// ==============================>> TITLES FROM EACH SECTION<<===================================
// Titles in SECTION 1: AUDIT
const titleProduct = document.getElementById("project1-timeline-audit-products-title");
const titlePatterns = document.getElementById("project1-timeline-audit-patterns-title");
const titleReferences = document.getElementById("project1-timeline-audit-references-title");
// Titles in SECTION 2: DEFINE
const titleUX = document.getElementById("project1-timeline-define-ux-title");
const titleVisual = document.getElementById("project1-timeline-define-visual-title");
// Title in SECTION 3: DESIGN
const titleConsideration = document.getElementById("project1-timeline-design-consideration-title");
// Title in SECTION 4: DESIGN REVIEW
const titleReview = document.getElementById("project1-timeline-review-review-title");
const titleEducate = document.getElementById("project1-timeline-review-educate-title");


// // set default opacity for all titles
// let opacity = 0;
let detailSectionOpacityInital = 0.35;


// ========================>> SECTION 1: AUDIT<<====================================================
// detecting audit trigger position in relation to each section
function auditTriggerSectionPos(){
    // Get audit trigger
    const auditTrigger = document.getElementById("project1-timeline-audit-trigger");
    // get audit trigger div dimension
    const auditRect = auditTrigger.getBoundingClientRect();

    // Each detail section
    const productDetail = document.getElementById("project1-timeline-audit-products-detail");
    const patternDetail = document.getElementById("project1-timeline-audit-patterns-detail");
    const referenceDetail = document.getElementById("project1-timeline-audit-references-detail");
    // Each detail section opacity set to default
    productDetail.style.opacity = detailSectionOpacityInital;
    patternDetail.style.opacity = detailSectionOpacityInital;
    referenceDetail.style.opacity = detailSectionOpacityInital;
    // Each detail section dimension
    const productRect = productDetail.getBoundingClientRect();
    const patternRect = patternDetail.getBoundingClientRect();
    const referenceRect = referenceDetail.getBoundingClientRect();

    
    // if(auditRect.top < pdRect.top){
    //     console.log("OUTSIDE")
    // } else{
    //   console.log("EXCEEDED");  
    //   // show product Title div
    //   productTitle.style.display = 'block';
    // }

    // STAGE ONE: Show product title in audit section
    if(auditRect.top > productRect.top && auditRect.bottom < productRect.bottom){
        //console.log("INTERSECT PRODUCT!");
        // // display title product
        // titleProduct.style.display = 'block';

        // show title
        titleProduct.style.display = 'block';
        // // fade in
        // let fadeIn = setInterval(() => {
        //     if (opacity >=1 ){
        //         clearInterval(fadeIn);
        //     }
        //     titleProduct.style.opacity = opacity;
        //     opacity += 0.01;
        // }, 25);
        // console.log(opacity);
        
        // Increase opacity when in range
        productDetail.style.opacity = 1;
    }
    else{
        //console.log("OUTSIDE PRODUCT!");
        titleProduct.style.display = 'none';
        // Decrease opacity
        productDetail.style.opacity = detailSectionOpacityInital;
    }

    // STAGE TWO: Show pattern title in audit section
    if(auditRect.top > patternRect.top && auditRect.bottom < patternRect.bottom){
        //console.log("INTERSECT PATTERNS!");
        titlePatterns.style.display = 'block';
        // Increase opacity when in range
        patternDetail.style.opacity = 1;
    }else{
        //console.log("OUTSIDE PATTERNS!");
        titlePatterns.style.display = 'none';
        // Reset opacity
        patternDetail.style.opacity = detailSectionOpacityInital;
    }

    // STAGE THREE: Show references title in audit section
    if(auditRect.top > referenceRect.top && auditRect.bottom < referenceRect.bottom){
        //console.log("INTERSECT REFERENCES!");
        titleReferences.style.display = 'block';
        // Increase opacity when in range
        referenceDetail.style.opacity = 1;
    }else{
        //console.log("OUTSIDE REFERENCES!");
        titleReferences.style.display = 'none';
        // Reset opacity
        referenceDetail.style.opacity = detailSectionOpacityInital;
    }
}

//===============================>> SECTION 2: DEFINE CRITERIA<<===============================
function defineTriggerSectionPos(){
    //  Get define trigger
    const defineTrigger = document.getElementById("project1-timeline-define-trigger");
    // Get define trigger div dimension
    const defineRect = defineTrigger.getBoundingClientRect();

    // Get each detail section in define
    const uxDetail = document.getElementById("project1-timeline-define-ux-detail");
    const visualDetail = document.getElementById("project1-timeline-define-visual-detail");
    // Each detail section opacity set to default
    uxDetail.style.opacity = detailSectionOpacityInital;
    visualDetail.style.opacity = detailSectionOpacityInital;
    // Get each detail div dimension
    const uxRect = uxDetail.getBoundingClientRect();
    const visualRect = visualDetail.getBoundingClientRect();

    // STAGE ONE: Show ux title in ux section
    if(defineRect.top > uxRect.top && defineRect.bottom < uxRect.bottom){
        // console.log("INTERSECT UX!");
        // show ux title
        titleUX.style.display = 'block';
        // Increase opacity when in range
        uxDetail.style.opacity = 1;
    }else{
        // console.log("OUTSIDE UX!");
        titleUX.style.display = 'none';
        // Reset opacity
        uxDetail.style.opacity = detailSectionOpacityInital;
    }
    // STAGE TWO: Show visual tile in visual section

    if(defineRect.top > visualRect.top && defineRect.bottom < visualRect.bottom){
        // console.log("INTERSECT VISUAL!");
        // show visual title
        titleVisual.style.display = 'block';
        // Increase opacity when in range
        visualDetail.style.opacity = 1;
    }else{
        // console.log("OUTSIDE VISUAL!");
        titleVisual.style.display = 'none';
        // Reset opacity
        visualDetail.style.opacity = detailSectionOpacityInital;
    }
}

//===============================>> SECTION 3: DESIGN<<===============================
function designTriggerSectionPos(){
    // Get design trigger
    const designTrigger = document.getElementById("project1-timeline-design-trigger");
    // Get design trigger div dimension
    const designRect = designTrigger.getBoundingClientRect();

    // Get each detail section
    const considerationDetail = document.getElementById("project1-timeline-design-consideration-detail");
    // Each detail section opacity set to default
    considerationDetail.style.opacity = detailSectionOpacityInital;
    //Get each detail section dimension
    const considerationRect = considerationDetail.getBoundingClientRect();

    // STAGE ONE: Show consideration title in design section
    if(designRect.top > considerationRect.top && designRect.bottom < considerationRect.bottom){
        // console.log("INTERSECT DESIGN!");
        titleConsideration.style.display = 'block';
        // Increase opacity when in range
        considerationDetail.style.opacity = 1;
    }else{
        // console.log("OUTSIDE DESIGN!");
        titleConsideration.style.display = 'none';
        // Reset opacity
        considerationDetail.style.opacity = detailSectionOpacityInital;
    }
}

//==================================>>SECTION 4: DESIGN REVIEW<<=====================================
function designReviewTriggerSectionPos(){
    // Get review trigger
    const designReviewTrigger = document.getElementById("project1-timeline-review-trigger");
    // Get review trigger div dimension
    const designReviewRect = designReviewTrigger.getBoundingClientRect();

    // Get each detail section
    const reviewDetail = document.getElementById("project1-timeline-review-review-detail");
    const educateDetail = document.getElementById("project1-timeline-review-educate-detail");
    // Each detail section opacity set to default
    reviewDetail.style.opacity = detailSectionOpacityInital;
    educateDetail.style.opacity = detailSectionOpacityInital;
    // Get detail section div dimension
    const reviewRect = reviewDetail.getBoundingClientRect();
    const educateRect = educateDetail.getBoundingClientRect();

    // STAGE ONE: Show review title in design review section
    if(designReviewRect.top > reviewRect.top && designReviewRect.bottom < reviewRect.bottom){
        // console.log("INTERSECT REVIEW!");
        titleReview.style.display = 'block';
        // Increase opacity when in range
        reviewDetail.style.opacity = 1;
    }else{
        // console.log("OUTSIDE REVIEW!");
        titleReview.style.display = 'none';
        reviewDetail.style.opacity = detailSectionOpacityInital;
    }
    // STAGE TWO: Show educate title in design review section
    if(designReviewRect.top > educateRect.top && designReviewRect.bottom < educateRect.bottom){
        // console.log("INTERSECT EDUCATE!");
        titleEducate.style.display = 'block';
        // Increase opacity when in range
        educateDetail.style.opacity = 1;
    }else{
        // console.log("OUTSIDE EDUCATE!");
        titleEducate.style.display = 'none';
        // Reset opacity
        educateDetail.style.opacity = detailSectionOpacityInital;
    }
}


//====================================>>ACTIVATE FUNCTIONS ON SCROLL<<===========================
// Audit
project1Scroll.addEventListener("scroll", auditTriggerSectionPos);
// Define
project1Scroll.addEventListener("scroll", defineTriggerSectionPos);
// Design
project1Scroll.addEventListener("scroll", designTriggerSectionPos);
// Design Reivew
project1Scroll.addEventListener("scroll", designReviewTriggerSectionPos);

auditTriggerSectionPos();
defineTriggerSectionPos();
designTriggerSectionPos();
designReviewTriggerSectionPos();