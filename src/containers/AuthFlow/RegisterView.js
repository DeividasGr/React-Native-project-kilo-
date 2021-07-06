import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {
  DefaultButton,
  Container,
  ButtonContainer,
  DefaultInput,
  Title,
} from '../../components';
import {COLORS} from '../../styles';
import {useTranslation} from 'react-i18next';

export function RegisterView() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container bgColor={COLORS.primaryBg}>
      <Title title={t('title:signUp')} />
      <DefaultInput
        onChangeText={newValue => setEmail(newValue)}
        value={email}
        placeholder={t('placeholder:email')}
        autoCapitalize="none"
      />
      <DefaultInput
        onChangeText={newValue => setPassword(newValue)}
        value={password}
        placeholder={t('placeholder:password')}
        secureTextEntry
      />
      <ButtonContainer>
        <DefaultButton
          title={t('common:register')}
          onPress={() => register(email, password)}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title={t('common:back')}
          onPress={() => navigation.navigate('Login')}
          bgColor={COLORS.secondary}
        />
      </ButtonContainer>
    </Container>
  );
}
