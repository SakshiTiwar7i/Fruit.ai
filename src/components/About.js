import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed; /* Fixes the position to cover the entire viewport */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #ff6b6b, #4e9fd8); /* Pink to Blue gradient */
  z-index: -1; /* Places the background behind other content */
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative; /* Ensures it is above the background */
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const AboutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
`;

const About = () => {
  return (
    <>
      <BackgroundContainer />
      <AboutContainer>
        <Heading>Fruit.Ai</Heading>
        <Description>
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist.
        </Description>
        <AboutButton>ABOUT</AboutButton>
      </AboutContainer>
    </>
  );
};

export default About;
