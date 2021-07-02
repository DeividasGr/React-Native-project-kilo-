import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {DefaultButton} from '../../components';
import {AuthContext} from '../../context/AuthProvider';

function ForgotPasswordView() {
  const navigation = useNavigation();
  const {reset} = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleReset = () => {
    reset(email);
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Text>Reset your credentials</Text>
      <Input onChangeText={setEmail} value={email} placeholder="Enter Email" />
      <ButtonContainer>
        <DefaultButton
          title="Reset"
          size="sm"
          bgColor="yellow"
          onPress={handleReset}
        />
        <DefaultButton
          title="Go Back"
          size="sm"
          bgColor="rebeccapurple"
          onPress={() => navigation.goBack()}
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

export default ForgotPasswordView;
