import React, {useState, useContext} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthProvider';

function LoginView() {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login Screen</Text>
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
      <Button title="Login" onPress={() => login(email, password)} />
      <Button
        title="New here? Register!"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Forgot Password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
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
