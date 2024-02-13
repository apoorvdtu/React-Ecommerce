import React,{useState,useEffect} from "react";
export const PRODUCT_MAX_QUANTITY_REACHED_MESSAGE = 'MAXIMUM PRODUCT QUANTITY REACHED';
export const PRODUCT_MIN_QUANTITY_REACHED_MESSAGE = 'MINIMUM PRODUCT QUANTITY is 1';
export const PRODUCTS_LOCAL_STORAGE_KEY = 'products';
export const PRODUCTS_DEFAULT_INITIAL_VALUE = [];
export function useLocalStorageHook(key,defaultInitialValue){
    const[state,setState] = React.useState(()=>{
        const valueJSON = window.localStorage.getItem(key);
        return valueJSON?JSON.parse(valueJSON):defaultInitialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key,JSON.stringify(state));
    },)
    return [state,setState];
}