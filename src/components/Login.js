import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const TermsText = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 20px;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SegmentControl = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const SegmentButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: #007bff;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const RememberCheckbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialText = styled.p`
  margin: 20px 0 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Icon = styled.i`
  font-size: 24px;
  cursor: pointer;
`;

const FingerprintIcon = styled.div`
  margin-top: 20px;
  font-size: 40px;
  color: #007bff;
  cursor: pointer;
`;

  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <TermsText>
          By signing in you are agreeing to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
        </TermsText>

        <SegmentControl>
          <SegmentButton>Login</SegmentButton>
          <SegmentButton>Register</SegmentButton>
        </SegmentControl>

        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CheckboxContainer>
          <RememberCheckbox>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label style={{ marginLeft: '5px' }}>Remember password</label>
          </RememberCheckbox>
          <a href="#" style={{ fontSize: '12px', color: '#007bff' }}>Forgot password?</a>
        </CheckboxContainer>

        <Button onClick={handleLogin}>Login</Button>

        <SocialText>or connect with</SocialText>
        <SocialIcons>
          <Icon className="fab fa-facebook-f"></Icon>
          <Icon className="fab fa-instagram"></Icon>
          <Icon className="fab fa-linkedin-in"></Icon>
          <Icon className="fas fa-volleyball-ball"></Icon> {/* Changed icon */}
        </SocialIcons>

        <FingerprintIcon>
          <i className="fas fa-fingerprint"></i> {/* Fingerprint Icon */}
        </FingerprintIcon>
      </Form>
    </Container>
  );
};

export default Login;
