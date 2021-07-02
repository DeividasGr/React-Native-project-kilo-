import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {DefaultButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

function LandingView() {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonContainer>
        <DefaultButton
          title="Login"
          size="sm"
          bgColor="#007bff"
          onPress={() => navigation.navigate('Login')}
        />
        <DefaultButton
          title="Register"
          size="sm"
          bgColor="rebeccapurple"
          onPress={() => navigation.navigate('Register')}
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

export default LandingView;
