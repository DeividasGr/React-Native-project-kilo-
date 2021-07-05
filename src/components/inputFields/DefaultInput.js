import React from 'react';
import styled from 'styled-components/native';
import {SIZES, COLORS} from '../../styles';

const TextInput = styled.TextInput`
  height: ${SIZES.input}px;
  margin-top: ${SIZES.margin}px;
  border-width: 1px;
  width: 80%;
  border-radius: ${SIZES.radius}px;
  padding-left: ${SIZES.base}px;
  background-color: ${COLORS.white};
`;

export function DefaultInput({...rest}) {
  return <TextInput {...rest} />;
}
