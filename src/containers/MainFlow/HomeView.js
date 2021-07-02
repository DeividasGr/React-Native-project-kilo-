import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';
import {DefaultButton} from '../../components';
import styled from 'styled-components/native';

function HomeView() {
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <ButtonContainer>
        <DefaultButton
          title="Logout"
          size="sm"
          bgColor="pink"
          onPress={() => logout()}
        />
      </ButtonContainer>
    </View>
  );
}

const ButtonContainer = styled.View`
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export default HomeView;
