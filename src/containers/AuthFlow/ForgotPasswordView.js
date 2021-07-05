import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {DefaultButton, Container, ButtonContainer} from '../../components';
import {AuthContext} from '../../context/AuthProvider';
import {COLORS} from '../../styles';

function ForgotPasswordView() {
  const navigation = useNavigation();
  const {reset} = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleReset = () => {
    reset(email);
    navigation.navigate('Login');
  };

  return (
    <Container bgColor={COLORS.primaryBg}>
      <Text>Reset your credentials</Text>
      <Input onChangeText={setEmail} value={email} placeholder="Enter Email" />
      <ButtonContainer>
        <DefaultButton
          title="Reset"
          bgColor={COLORS.secondary}
          onPress={handleReset}
        />
        <DefaultButton
          title="Go Back"
          bgColor={COLORS.secondary}
          onPress={() => navigation.goBack()}
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

export default ForgotPasswordView;
