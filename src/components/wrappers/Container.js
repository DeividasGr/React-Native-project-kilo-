import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../styles';
import PropTypes from 'prop-types';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? props.bgColor : COLORS.white)};
`;

export function Container({children, bgColor}) {
  return <Wrapper bgColor={bgColor}>{children}</Wrapper>;
}

Container.propTypes = {
  bgColor: PropTypes.string,
};
