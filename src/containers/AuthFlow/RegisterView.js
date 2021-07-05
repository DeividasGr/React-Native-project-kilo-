import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {DefaultButton, Container, ButtonContainer} from '../../components';
import {COLORS} from '../../styles';

function LoginView() {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container bgColor={COLORS.primaryBg}>
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
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title="Back to Login"
          onPress={() => navigation.navigate('Login')}
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
