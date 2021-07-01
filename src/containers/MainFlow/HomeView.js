import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';

function HomeView() {
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

export default HomeView;
