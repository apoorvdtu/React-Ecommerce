import React from 'react'
import { PRODUCT_MAX_QUANTITY_REACHED_MESSAGE,PRODUCT_MIN_QUANTITY_REACHED_MESSAGE } from '../utilities/constant';
import styles from 'Cart.module.css'
function CartItem({product,productQty,setProductQty}) {
    const increaseProductQuantity = ()=>{
        const {productStockUnits} = product;
        if(productQty+1<=productStockUnits){
            setProductQty(productQty+1);
        }
        else{
            alert(PRODUCT_MAX_QUANTITY_REACHED_MESSAGE);
        }
    }
    const decreaseProductQuantity = ()=>{
        if(productQty-1!==0){
            setProductQty(productQty-1);
        }
        else{
            alert(PRODUCT_MIN_QUANTITY_REACHED_MESSAGE);
        }
    }
    return (
        <div className="cart-item">
            <div className="cart-item__product-info">
                <div className="cart-item__product-name" aria-label="Product Name">
                   {product.productName}
                </div>
                <div className="cart-item__in-stock" aria-label="In stock">
                    {product.productStockUnits>0&&'In Stock'}
                    {product.productStockUnits>0&&'Out Of Stock'}
                </div>
                <div className="cart-item__free-shipping" aria-label="Eligible for FREE Shipping">
                    Eligible for FREE Shipping
                </div>
                <div className="cart-item__product-counter">
                    <button onClick={decreaseProductQuantity} className="cart-item__product-button cart-item__product-button--dec " aria-label="Decrease Quantity">-</button>
                    <div className="cart-item__product-qty" aria-label="Quantity">&nbsp;Qty:&nbsp;{productQty}</div>
                    <button onClick={increaseProductQuantity} className="cart-item__product-button cart-item__product-button--inc" aria-label="Increase Quantity">+</button>
                </div>
                <button className="cart-item__product-remove" aria-label="Remove Product">Delete</button>
            </div>
            <div className="product-price">
                <div className="product-price__current-price" aria-label="Current Price">
                    Rs{product.productDiscountPrice}
                </div>
                <div className="product-price__product-mrp-price" aria-label="MRP">
                    MRP:
                    <del>{product.productOriginalPrice}</del>
                </div>
            </div>
        </div>
    )
}

export default CartItem
