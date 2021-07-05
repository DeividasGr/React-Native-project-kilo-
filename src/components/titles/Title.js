import React from 'react';
import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../styles';
import PropTypes from 'prop-types';

const TextTitle = styled.Text`
  font-size: ${SIZES.largeTitle}px;
  text-align: center;
  letter-spacing: ${SIZES.letterSpacing}px;
  color: ${COLORS.transparentOrange};
`;

export function Title({title}) {
  return <TextTitle>{title}</TextTitle>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
