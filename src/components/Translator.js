import React, { useState } from 'react';
import styled from 'styled-components';

const TranslatorContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TranslateButton = styled.button`
  padding: 10px;
  background-color: #7e57c2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TranslatedText = styled.p`
  margin-top: 20px;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
`;

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    setTranslatedText(`Translated: ${inputText}`);
  };

  return (
    <TranslatorContainer>
      <Input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <TranslateButton onClick={handleTranslate}>Translate</TranslateButton>
      <TranslatedText>{translatedText}</TranslatedText>
    </TranslatorContainer>
  );
};

export default Translator;
