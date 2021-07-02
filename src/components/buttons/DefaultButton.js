import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  margin-top: 20px;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  align-self: stretch;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  color: #fff;
`;

export function DefaultButton({onPress, title, bgColor}) {
  return (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
