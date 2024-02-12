import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchProductsFromLocalStorage, Product } from '../utilities/Product';
function saveProductsInLocalStorage(product){
    const products = fetchProductsFromLocalStorage();
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
}
function AddProductForm() {
    function handleAddProductForm(event){
        event.preventDefault();
        const productDetailsObj = {
            productName:event.target.productName.value,
            productCategory:event.target.productCategory.value,
            productOriginalPrice:event.target.productOriginalPrice.value,
            productDiscountPrice:event.target.productDiscountPrice.value,
            productStockUnits:event.target.productDiscountPrice.value,
            productImgSrc:'/ef'
        };
        const product = new Product(productDetailsObj);
        saveProductsInLocalStorage(product);
        event.target.reset();
    }
    return (
        <Form onSubmit={handleAddProductForm}>
            <Form.Group className="mb-3" controlId="productName" aria-label="Product Name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control  type="text" placeholder="Enter Product Name"/>
            
            </Form.Group>
            <Form.Group  className="mb-3" controlId="productCategory" aria-label="Product Category">
            <Form.Label>Product Category</Form.Label>
                <Form.Select required>
                    <option value="mobiles">Mobiles</option>
                    <option value="tvs">TVs</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productOriginalPrice">
                <Form.Label>Product Original Price</Form.Label>
                <Form.Control required type="number" placeholder="Enter Product Original Price"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productDiscountPrice">
                <Form.Label>Product Discount Price</Form.Label>
                <Form.Control required type="number" placeholder="Enter Product Discount Price"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productStockUnits">
                <Form.Label>Product Stock Units</Form.Label>
                <Form.Control required type="number" placeholder="Enter Product Stock Units"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
    );
}

export default AddProductForm
