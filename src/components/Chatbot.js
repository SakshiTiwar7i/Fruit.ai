import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the UI
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 10px;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f5f5f5')};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f5f5f5')};
  border-bottom: ${(props) => (props.theme === 'dark' ? '1px solid #555' : 'none')};
  border-radius: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.h2`
  font-size: 16px;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
`;

const Status = styled.span`
  font-size: 12px;
  color: ${(props) => (props.theme === 'dark' ? 'lightgreen' : 'green')};
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  background-color: ${(props) => (props.isSender ? '#D1C4E9' : props.theme === 'dark' ? '#555' : '#fff')};
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  max-width: 70%;
  align-self: ${(props) => (props.isSender ? 'flex-end' : 'flex-start')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
`;

const Timestamp = styled.span`
  display: block;
  font-size: 10px;
  color: ${(props) => (props.theme === 'dark' ? '#bbb' : '#999')};
  margin-top: 5px;
  text-align: ${(props) => (props.isSender ? 'right' : 'left')};
`;

const FruitCard = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#fff')};
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px; /* Reduced width */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FruitImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 10px;
`;

const FruitDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const FruitName = styled.p`
  font-weight: bold;
  color: red; /* Changed font color to red */
  font-size: 16px; /* Increased font size */
`;

const FruitPrice = styled.p`
  font-size: 14px; /* Increased font size */
  color: red; /* Changed font color to red */
`;

const FruitQuantity = styled.p`
  font-size: 14px; /* Increased font size */
  color: red; /* Changed font color to red */
`;

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fff')};
  border-top: ${(props) => (props.theme === 'dark' ? '1px solid #555' : '1px solid #ddd')};
  border-radius: 30px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 50px;
  margin-right: 10px;
  background-color: ${(props) => (props.theme === 'dark' ? '#555' : '#f1f1f1')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#333')};
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #7e57c2;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const MicIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ThemeToggle = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #7e57c2;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  align-self: center;
`;

// Main Chatbot component
const Chatbot = () => {
  const [theme, setTheme] = useState('light');
  const [messages, setMessages] = useState([
    { id: 1, text: 'This is a sample message', isSender: false, timestamp: '10:30 AM' },
    { id: 2, text: 'This is a sample message from me', isSender: true, timestamp: '10:32 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const fruits = [
    { name: 'Orange', price: '$8.00', quantity: 2, total: '$16.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nz1C_5rV4mSRufXpiXDEq3stBNgK3LoMgw&s' },
    { name: 'Cucumber', price: '$11.76', quantity: 1, total: '$11.76', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZhnkgqIZBluqIBsejzhkTenOiEjs7cBTEw&s' },
    { name: 'Tangerine', price: '$6.40', quantity: 4, total: '$25.60', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiRLL5w_LsjIkOK9esRAHzs8cpYRI7dPYog&s' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, isSender: true, timestamp: '10:35 AM' }]);
      setNewMessage('');
    }
  };

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTchSrxe7JFt9jOxqM_IHfJnlFr_L5m6PVHQ&s" alt="User Avatar" />
        <UserInfo>
          <Username theme={theme}>John Doe</Username>
          <Status>Online</Status>
        </UserInfo>
      </Header>

      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble key={message.id} isSender={message.isSender} theme={theme}>
            {message.text}
            <Timestamp isSender={message.isSender} theme={theme}>{message.timestamp}</Timestamp>
          </MessageBubble>
        ))}

        {/* Display Fruit Cards */}
        {theme === 'dark' && (
          <div>
            {fruits.map((fruit, index) => (
              <FruitCard key={index} theme={theme}>
                <FruitImage src={fruit.image} alt={fruit.name} />
                <FruitDetails>
                  <FruitName theme={theme}>{fruit.name}</FruitName>
                  <FruitPrice theme={theme}>Price: {fruit.price}</FruitPrice>
                  <FruitQuantity theme={theme}>x {fruit.quantity}</FruitQuantity>
                  <FruitPrice>Total: {fruit.total}</FruitPrice>
                </FruitDetails>
              </FruitCard>
            ))}
          </div>
        )}
      </MessagesContainer>

      <InputContainer theme={theme}>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          theme={theme}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
        <MicIcon src="https://cdn-icons-png.flaticon.com/512/1789/1789188.png" alt="Microphone" />
      </InputContainer>

      <ThemeToggle onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </ThemeToggle>
    </Container>
  );
};

export default Chatbot;
