var auditTriggerTop;

function update(){
    const auditTrigger = document.getElementById("project1-timeline-audit-trigger");
    let rect = auditTrigger.getBoundingClientRect();
    auditTriggerTop = rect.top;
}

document.addEventListener("scroll", update);
update();

console.log(auditTriggerTop);

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
