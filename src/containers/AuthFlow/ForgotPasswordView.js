import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  DefaultButton,
  Container,
  ButtonContainer,
  DefaultInput,
  Title,
} from '../../components';
import {AuthContext} from '../../context/AuthProvider';
import {COLORS} from '../../styles';
import {useTranslation} from 'react-i18next';

export function ForgotPasswordView() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {reset} = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleReset = () => {
    reset(email);
    navigation.navigate('Login');
  };

  return (
    <Container bgColor={COLORS.primaryBg}>
      <Title title={t('title:forgot')} />
      <DefaultInput
        onChangeText={setEmail}
        value={email}
        placeholder={t('placeholder:email')}
        autoCapitalize="none"
      />
      <ButtonContainer>
        <DefaultButton
          title={t('common:restore')}
          bgColor={COLORS.secondary}
          onPress={handleReset}
        />
        <DefaultButton
          title={t('common:back')}
          bgColor={COLORS.secondary}
          onPress={() => navigation.goBack()}
        />
      </ButtonContainer>
    </Container>
  );
}
