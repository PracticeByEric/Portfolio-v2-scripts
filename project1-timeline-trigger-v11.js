// project1-scrolling-div

const project1Scroll = document.getElementById("project1-scrolling-div");

function auditTriggerMove(){
    const auditTrigger = document.getElementById("project1-timeline-audit-trigger");
    const rect = auditTrigger.getBoundingClientRect();
    console.log(rect.top);
}

project1Scroll.addEventListener("scroll", auditTriggerMove);
auditTriggerMove();

// // =======================>>>> AUDIT SECTION <<<========================================================================
// // Get audit trigger div
// let auditTrigger = document.getElementById("project1-timeline-audit-trigger").getBoundingClientRect();
// // Get "Products" title div
// let productTitle = document.getElementById("project1-timeline-audit-products-title");
// // Get "Products" detail div
// let productDetail = document.getElementById("project1-timeline-audit-products-detail").getBoundingClientRect();

// // Get position specs for each div
// // position specs for audit trigger div
// var auditTriggerTop = auditTrigger.top;
// var auditTriggerLeft = auditTrigger.left;
// var auditTriggerRight = auditTrigger.right;
// var auditTriggerBottom = auditTrigger.bottom;

// console.log("distance top" + auditTriggerTop);

// // // position specs for "Products" detail div
// // const productDetailTop = productDetail.top;
// // const productDetailLeft = productDetail.left;
// // const productDetailRight = productDetail.right;
// // const productDetailBottom = productDetail.bottom;
