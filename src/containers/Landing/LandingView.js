import React from 'react';
import styled from 'styled-components/native';
import {DefaultButton, Container, ButtonContainer} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../styles';
import {useTranslation} from 'react-i18next';
import {locale} from '../../utils/locale';

function LandingView() {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={require('../../assets/images/landingImage.jpg')} />
      <ButtonContainer position="absolute">
        <Icon
          name="language"
          size={40}
          color={COLORS.white}
          onPress={() =>
            locale.changeLanguage(locale.language === 'en' ? 'lt' : 'en')
          }
        />
        <DefaultButton
          title={t('common:login')}
          bgColor={COLORS.transparentOrange}
          onPress={() => navigation.navigate('Login')}
        />
        <DefaultButton
          title={t('common:register')}
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
