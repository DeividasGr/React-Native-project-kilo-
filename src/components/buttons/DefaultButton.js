import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {COLORS, SIZES} from '../../styles';

const ButtonContainer = styled.TouchableOpacity`
  border-radius: ${SIZES.radius}px;
  background-color: ${props => (props.bgColor ? props.bgColor : COLORS.black)};
  margin-top: ${SIZES.margin}px;
  padding-vertical: ${SIZES.base}px;
  align-self: stretch;
`;
const ButtonText = styled.Text`
  font-size: ${SIZES.narmalTitle}px;
  text-align: center;
  width: 100%;
  color: ${props => (props.textColor ? props.textColor : COLORS.white)};
`;

export function DefaultButton({onPress, title, bgColor, textColor}) {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </ButtonContainer>
  );
}

DefaultButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

DefaultButton.defaultProps = {
  bgColor: '',
  textColor: '',
};
