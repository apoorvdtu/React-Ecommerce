export function Product() {
  this.productId = generateProductId();
  this.productName = "";
  this.productOriginalPrice = "";
  this.productDiscountPrice = "";
  this.productStockUnits = "";
  this.productCategory = "";
}
function generateProductId() {
  return (
    Date.now().toString(36) +
    Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)
  );
}
