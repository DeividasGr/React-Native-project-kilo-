import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider';
import {
  DefaultButton,
  ButtonContainer,
  Container,
  Title,
} from '../../components';
import {COLORS} from '../../styles';
import {useTranslation} from 'react-i18next';

export function HomeView() {
  const {logout} = useContext(AuthContext);
  const {t} = useTranslation();

  return (
    <Container>
      <Title title={t('demo:Home Screen')} />
      <ButtonContainer>
        <DefaultButton
          title={t('common:logout')}
          bgColor={COLORS.secondary}
          onPress={() => logout()}
        />
      </ButtonContainer>
    </Container>
  );
}
