import React, {useState, useContext} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';

function LoginView() {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Register Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={newValue => setEmail(newValue)}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={newValue => setPassword(newValue)}
        value={password}
        placeholder="Enter Password"
        secureTextEntry
      />
      <Button title="Register" onPress={() => register(email, password)} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
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

export default LoginView;
