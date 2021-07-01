import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';

function ForgotPasswordView() {
  const navigation = useNavigation();
  const {reset} = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleReset = () => {
    reset(email);
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Reset your credentials</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
      />
      <Button title="Reset" onPress={handleReset} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ForgotPasswordView;
