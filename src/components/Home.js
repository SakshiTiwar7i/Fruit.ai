import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff8a80, #ff80ab);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 300px;
`;

const Tile = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #333;
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Title>Fruit.Ai</Title>
      <Grid>
        <Tile to="/chatbot">Chat</Tile>
        <Tile to="/translator">Translator</Tile>
        <Tile to="/faq">FAQ</Tile>
        <Tile to="/about">About</Tile>
      </Grid>
    </Container>
  );
};

export default Home;
