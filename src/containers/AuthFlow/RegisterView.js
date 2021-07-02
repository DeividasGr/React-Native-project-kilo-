import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import {Text, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {DefaultButton} from '../../components';

function LoginView() {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Text>Register Screen</Text>
      <Input
        onChangeText={newValue => setEmail(newValue)}
        value={email}
        placeholder="Enter Email"
      />
      <Input
        onChangeText={newValue => setPassword(newValue)}
        value={password}
        placeholder="Enter Password"
        secureTextEntry
      />
      <ButtonContainer>
        <DefaultButton
          title="Register"
          onPress={() => register(email, password)}
          size="sm"
          bgColor="orange"
        />
        <DefaultButton
          title="Back to Login"
          onPress={() => navigation.navigate('Login')}
          size="sm"
          bgColor="green"
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
