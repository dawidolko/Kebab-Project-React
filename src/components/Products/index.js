import React from "react";
import { useCart } from "../../context/CartContext";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductInfo,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./Products";

const Products = ({ heading, data, id }) => {
  const { addItem } = useCart();

  return (
    <ProductsContainer id={id}>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton
                  type="button"
                  onClick={() => addItem(product)}
                  aria-label={`${product.button}: ${product.name}`}>
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
