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
// Title in SECTION 3
// Title in SECTION 4
// Title in SECTION 5

// // set initial opacity for all titles
// let opacity = 0;

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
    }
    else{
        //console.log("OUTSIDE PRODUCT!");
        titleProduct.style.display = 'none';
    }

    // STAGE TWO: Show pattern title in audit section
    if(auditRect.top > patternRect.top && auditRect.bottom < patternRect.bottom){
        //console.log("INTERSECT PATTERNS!");
        titlePatterns.style.display = 'block';
    }else{
        //console.log("OUTSIDE PATTERNS!");
        titlePatterns.style.display = 'none';
    }

    // STAGE THREE: Show references title in audit section
    if(auditRect.top > referenceRect.top && auditRect.bottom < referenceRect.bottom){
        //console.log("INTERSECT REFERENCES!");
        titleReferences.style.display = 'block';
    }else{
        //console.log("OUTSIDE REFERENCES!");
        titleReferences.style.display = 'none';
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
    // Get each detail div dimension
    const uxRect = uxDetail.getBoundingClientRect();
    const visualRect = visualDetail.getBoundingClientRect();

    // STAGE ONE: Show ux title in ux section
    if(defineRect.top > uxRect.top && defineRect.bottom < uxRect.bottom){
        console.log("INTERSECT UX!");

        // show ux title
        titleUX.style.display = 'block';
    }else{
        console.log("OUTSIDE UX!");
        titleUX.style.display = 'none';
    }
    // STAGE TWO: Show visual tile in visual section

    if(defineRect.top > visualRect.top && defineRect.bottom < visualRect.bottom){
        console.log("INTERSECT VISUAL!");

        // show visual title
        titleVisual.style.display = 'block';
    }else{
        console.log("OUTSIDE VISUAL!");
        titleVisual.style.display = 'none';
    }
}

project1Scroll.addEventListener("scroll", auditTriggerSectionPos);
auditTriggerSectionPos();
