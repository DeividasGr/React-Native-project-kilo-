import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {DefaultButton} from '../../components';
import {useNavigation} from '@react-navigation/native';

function LandingView() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={require('../../assets/images/landingImage.jpg')} />
      <ButtonContainer>
        <DefaultButton
          title="Login"
          size="sm"
          bgColor="#ff7300ab"
          onPress={() => navigation.navigate('Login')}
        />
        <DefaultButton
          title="Register"
          bgColor="#ffae00bd"
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

const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  position: absolute;
`;

export default LandingView;
