import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {DefaultButton} from '../../components';

function LoginView() {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
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
          size="sm"
          bgColor="brown"
        />
        <DefaultButton
          title="New here? Register!"
          onPress={() => navigation.navigate('Register')}
          size="sm"
          bgColor="cyan"
        />
        <DefaultButton
          title="Forgot Password?"
          onPress={() => navigation.navigate('ForgotPassword')}
          size="sm"
          bgColor="rebeccapurple"
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  width: 80%;
  border-radius: 5px;
`;

export default LoginView;
