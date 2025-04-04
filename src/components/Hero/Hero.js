import styled from "styled-components";
import ImgBg from "../../images/kebab-3.png";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(30, 20, 10, 0.7),
      rgba(80, 40, 20, 0.1)
    ),
    url(${ImgBg});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #d2691e; /* Spicy warm brown */
  letter-spacing: 3px;
  color: #f8e9d2; /* Warm sandy beige */
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: #fce8d5;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #d2691e; /* Spicy brown */
  color: #fff;
  transition: 0.3s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222; /* Chili red */
    color: #fff;
    cursor: pointer;
  }
`;
