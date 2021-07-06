import React from 'react';
import {Container, Title} from '../../components';
import {useTranslation} from 'react-i18next';

function DetailsView() {
  const {t} = useTranslation();

  return (
    <Container>
      <Title title={t('demo:Details Screen')} />
    </Container>
  );
}

export default DetailsView;
