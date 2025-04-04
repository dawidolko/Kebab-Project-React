import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #2c1a0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #d2691e;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f8e9d2;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff2e6;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color: #fce8d5;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #ffc26f;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #d2691e;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222;
    color: #fff;
    cursor: pointer;
  }
`;
