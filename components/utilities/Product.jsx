export function Product({  productName,productImgSrc, productOriginalPrice,  productDiscountPrice, productStockUnits, productCategory }) {
    this.productId = generateProductId();
    this.productName = productName;
    this.productImgSrc = productImgSrc;
    this.productOriginalPrice = productOriginalPrice;
    this.productDiscountPrice = productDiscountPrice;
    this.productStockUnits = productStockUnits;
    this.productCategory = productCategory;
}
function generateProductId(){

    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
}
export function fetchProductsFromLocalStorage(){
    const productsJSON = localStorage.getItem('products')??'[]';
    const products = JSON.parse(productsJSON);
    return products;
}