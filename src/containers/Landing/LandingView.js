import React from 'react';
import styled from 'styled-components/native';
import {DefaultButton, Container, ButtonContainer} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles';

function LandingView() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={require('../../assets/images/landingImage.jpg')} />
      <ButtonContainer position="absolute">
        <DefaultButton
          title="Login"
          bgColor={COLORS.transparentOrange}
          onPress={() => navigation.navigate('Login')}
        />
        <DefaultButton
          title="Register"
          bgColor={COLORS.transparentYellow}
          onPress={() => navigation.navigate('Register')}
        />
      </ButtonContainer>
    </Container>
  );
}

const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

export default LandingView;
