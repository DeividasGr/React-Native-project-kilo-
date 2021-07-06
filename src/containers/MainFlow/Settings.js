import React from 'react';
import {
  Container,
  Title,
  ButtonContainer,
  DefaultButton,
} from '../../components';
import {useTranslation} from 'react-i18next';
import {locale} from '../../utils/locale';
import {COLORS} from '../../styles';

function Settings() {
  const {t} = useTranslation();

  return (
    <Container>
      <Title title={t('settings:title')} />
      <ButtonContainer>
        <DefaultButton
          onPress={() =>
            locale.changeLanguage(locale.language === 'en' ? 'lt' : 'en')
          }
          title={t('common:changeLanguage')}
          bgColor={COLORS.secondary}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Settings;
