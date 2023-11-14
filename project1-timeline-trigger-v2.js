// =======================>>>> AUDIT SECTION <<<========================================================================
// Get audit trigger div
const auditTrigger = document.getElementById("project1-timeline-audit-trigger").getBoundingClientRect();
// print out auditTrigger dimension
console.log(auditTrigger.top);
// Get "Products" title div
const productTitle = document.getElementById("project1-timeline-audit-products-title");
// Get "Products" detail div
const productDetail = document.getElementById("project1-timeline-audit-products-detail").getBoundingClientRect();

// Get position specs for each div
// position specs for audit trigger div
const auditTriggerTop = auditTrigger.top;
const auditTriggerLeft = auditTrigger.left;
const auditTriggerRight = auditTrigger.right;
const auditTriggerBottom = auditTrigger.bottom;
// position specs for "Products" detail div
const productDetailTop = productDetail.top;
const productDetailLeft = productDetail.left;
const productDetailRight = productDetail.right;
const productDetailBottom = productDetail.bottom;

// audit trigger div overlap product detail div in the boundary of product detail div
if(auditTriggerBottom > productDetailTop && auditTriggerTop < productDetailBottom){
    // show product title
    console.log("SHOW PRODUCT TITLE!");
}