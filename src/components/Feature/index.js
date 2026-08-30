import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature";

const Feature = () => {
  return (
    <FeatureContainer>
      <h2>Kebab of the Day</h2>
      <p>
        Juicy lamb kebab served with hummus, fresh veggies, and our signature
        garlic sauce
      </p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
