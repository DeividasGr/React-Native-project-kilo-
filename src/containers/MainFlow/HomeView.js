import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {
  DefaultButton,
  ButtonContainer,
  Container,
  Title,
} from '../../components';
import {COLORS} from '../../styles';
import {useTranslation} from 'react-i18next';
import {locale} from '../../utils/locale';

function HomeView() {
  const {logout} = useContext(AuthContext);
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <Container>
      <Title title={t('demo:Home Screen')} />
      <ButtonContainer>
        <DefaultButton
          onPress={() =>
            locale.changeLanguage(locale.language === 'en' ? 'lt' : 'en')
          }
          title={t('common:changeLanguage')}
          bgColor={COLORS.secondary}
        />
        <DefaultButton
          title={t('common:logout')}
          bgColor={COLORS.secondary}
          onPress={() => logout()}
        />
      </ButtonContainer>
    </Container>
  );
}

export default HomeView;
