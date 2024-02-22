import React from "react";
import { Prices } from "./types";
type CartPriceProps = {
  prices: Prices;
  placeOrderButtonOnClick: () => void;
};
export const CartPrice = ({ prices, placeOrderButtonOnClick }: CartPriceProps) => {
  const { totalDiscountPrice, totalOriginalPrice, discountPercentage, discountValue } = prices;
  return (
    <>
      <div className="cart-prices">
        <div className="cart-prices__details">
          <span className="cart-prices__price-detail-text" aria-label="Price Details">
            Price Details
          </span>
          <hr />
          <div className="prices">
            <span className="prices__label prices__label--total" aria-label="Price">
              Price :
            </span>
            <span className="prices__value prices__value--total" aria-label="Total Price">
              Rs{totalOriginalPrice}
            </span>
          </div>
          <div className="prices">
            <span className="prices__label prices__label--discount" aria-label="Discount">
              Discount :
            </span>
            <span className="prices__value prices__value--discount" aria-label="Discounted Price">
              Rs{discountValue}
            </span>
          </div>
          <hr />
          <strong className="prices prices--final">
            <span className="prices__label prices__label--final" aria-label="Final Price">
              Final Price :
            </span>
            <span className="prices__value prices__value--final" aria-label="Final Price Value">
              Rs{totalDiscountPrice}
            </span>
          </strong>
          <hr />
          <div className="prices">
            <span className="prices__label prices__label--saving" aria-label="Total Savings">
              Total Savings :
            </span>
            <span
              className="prices__value prices__value--saving"
              aria-label="Savings In Percentage"
            >
              {discountPercentage}%
            </span>
          </div>
        </div>
        {/* <button className="cart-prices__place-order" aria-label="Place Order">
          Place Order
        </button> */}
        <div className="cart-prices__place-order-wrapper">
          <button
            className="cart-prices__place-order"
            onClick={placeOrderButtonOnClick}
            aria-label="Place Order"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
