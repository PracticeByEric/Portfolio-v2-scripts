// Timeline trigger based scroll
const project1Scroll = document.getElementById("project1-scrolling-div");

// Titles that show up for each section
// SECTION 1: AUDIT
const titleProduct = document.getElementById("project1-timeline-audit-products-title");
const titlePatterns = document.getElementById("project1-timeline-audit-patterns-title");
const titleReferences = document.getElementById("project1-timeline-audit-references-title");

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
        console.log("INTERSECT PRODUCT!");
        titleProduct.style.display = 'block';
    }else{
        console.log("OUTSIDE PRODUCT!");
        titleProduct.style.display = 'none';
    }

    // STAGE TWO: Show pattern title in audit section
    if(auditRect.top > patternRect.top && auditRect.bottom < patternRect.bottom){
        console.log("INTERSECT PATTERNS!");
        titlePatterns.style.display = 'block';
    }else{
        console.log("OUTSIDE PATTERNS!");
        titlePatterns.style.display = 'none';
    }

    // STAGE THREE: Show references title in audit section
    if(auditRect.top > referenceRect.top && auditRect.bottom < referenceRect.bottom){
        console.log("INTERSECT REFERENCES!");
        titleReferences.style.display = 'block';
    }else{
        console.log("OUTSIDE REFERENCES!");
        titleReferences.style.display = 'none';
    }
}

project1Scroll.addEventListener("scroll", auditTriggerSectionPos);
auditTriggerSectionPos();
