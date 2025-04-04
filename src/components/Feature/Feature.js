import styled from "styled-components";
import FeaturePic from "../../images/featured3.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(30, 20, 10, 0.7),
      rgba(80, 40, 20, 0.1)
    ),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  width: 100%;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: #f8e9d2; /* Warm sand/beige tone */
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #fce8d5; /* Lighter warm tone */
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #d2691e; /* Spicy kebab brown */
  color: #fff;
  transition: 0.3s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222; /* Deep chili red */
    color: #fff;
    cursor: pointer;
  }
`;
