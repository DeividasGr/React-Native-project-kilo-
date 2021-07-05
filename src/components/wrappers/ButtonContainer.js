import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  position: ${props => (props.position ? props.position : 'relative')};
`;

export function ButtonContainer({children, position}) {
  return <ButtonWrapper position={position}>{children}</ButtonWrapper>;
}

ButtonContainer.propTypes = {
  position: PropTypes.string,
};
