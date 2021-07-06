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

function LoginView() {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container bgColor={COLORS.primaryBg}>
      <Title title={t('title:signIn')} />
      <DefaultInput
        onChangeText={setEmail}
        value={email}
        placeholder={t('placeholder:email')}
        autoCapitalize="none"
      />
      <DefaultInput
        onChangeText={setPassword}
        value={password}
        placeholder={t('placeholder:password')}
        secureTextEntry
      />
      <ButtonContainer>
        <DefaultButton
          title={t('common:login')}
          onPress={() => login(email, password)}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title={t('common:newReg')}
          onPress={() => navigation.navigate('Register')}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title={t('common:forgot')}
          onPress={() => navigation.navigate('ForgotPassword')}
          bgColor={COLORS.secondary}
        />
      </ButtonContainer>
    </Container>
  );
}

export default LoginView;
