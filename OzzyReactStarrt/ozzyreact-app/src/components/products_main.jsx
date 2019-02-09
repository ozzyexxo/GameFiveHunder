import React, { Component } from "react";
import Product from "./product";
import Products from "../prodcut_data";

class ProductsMain extends Component {
  state = {
    /* Get products data */
    products: Products
  };

  get_products(prods) {
    return prods.map(prod => {
      return (
        <Product
          key={prod.id}
          name={prod.name}
          price={prod.price}
          description={prod.description}
        />
      );
    });
  }
  render() {
    return (
      <React.Fragment>{this.get_products(this.state.products)}</React.Fragment>
    );
  }
}

export default ProductsMain;
