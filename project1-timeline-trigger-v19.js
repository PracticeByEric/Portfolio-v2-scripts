// project1-scrolling-div

const project1Scroll = document.getElementById("project1-scrolling-div");

const productTitle = document.getElementById("project1-timeline-audit-products-title");

function triggerSectionPos(){
    const auditTrigger = document.getElementById("project1-timeline-audit-trigger");
    const productDetail = document.getElementById("project1-timeline-audit-products-detail");

    const auditRect = auditTrigger.getBoundingClientRect();
    const pdRect = productDetail.getBoundingClientRect();
    
    // if(auditRect.top < pdRect.top){
    //     console.log("OUTSIDE")
    // } else{
    //   console.log("EXCEEDED");  
    //   // show product Title div
    //   productTitle.style.display = 'block';
    // }

    if(auditRect.top > pdRect.top && auditRect.bottom < pdRect.bottom){
        console.log("INTERSECT!");
        productTitle.style.display = 'block';
    }else{
        console.log("OUTSIDE!");
        productTitle.style.display = 'none';
    }
}

project1Scroll.addEventListener("scroll", triggerSectionPos);
triggerSectionPos();
