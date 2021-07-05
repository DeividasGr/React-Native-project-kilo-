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
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
import {locale} from '../../utils/locale';

function ForgotPasswordView() {
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
      <Icon
        name="language"
        size={40}
        color={COLORS.white}
        onPress={() =>
          locale.changeLanguage(locale.language === 'en' ? 'lt' : 'en')
        }
      />
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

export default ForgotPasswordView;
