import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {DefaultButton, Container, ButtonContainer} from '../../components';
import {COLORS} from '../../styles';

function LoginView() {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container bgColor={COLORS.primaryBg}>
      <Text>Login Screen</Text>
      <Input onChangeText={setEmail} value={email} placeholder="Enter Email" />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        secureTextEntry
      />
      <ButtonContainer>
        <DefaultButton
          title="Login"
          onPress={() => login(email, password)}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title="New here? Register!"
          onPress={() => navigation.navigate('Register')}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title="Forgot Password?"
          onPress={() => navigation.navigate('ForgotPassword')}
          bgColor={COLORS.secondary}
        />
      </ButtonContainer>
    </Container>
  );
}

const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  width: 80%;
  border-radius: 5px;
  background-color: #fff;
`;

export default LoginView;
