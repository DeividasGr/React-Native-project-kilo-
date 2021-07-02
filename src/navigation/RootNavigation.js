import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/AuthProvider';
import HomeScreen from '../containers/MainFlow/HomeView';
import LoginView from '../containers/AuthFlow/LoginView';
import RegisterView from '../containers/AuthFlow/RegisterView';
import ForgotPasswordView from '../containers/AuthFlow/ForgotPasswordView';
import LandingView from '../containers/Landing/LandingView';

const Stack = createStackNavigator();

function LandingViewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingViewStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function RootNavigation() {
  const {user, setUser} = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(customer) {
    setUser(customer);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default RootNavigation;
