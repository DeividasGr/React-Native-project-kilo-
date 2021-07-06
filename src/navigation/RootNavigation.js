import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ForgotPasswordView,
  RegisterView,
  LoginView,
  LandingView,
  DetailsView,
  HomeView,
  Settings,
} from '../containers';
import {COLORS} from '../styles';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              color={focused ? COLORS.secondary : COLORS.black}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Details"
        component={DetailsView}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="info"
              color={focused ? COLORS.secondary : COLORS.black}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="cog"
              color={focused ? COLORS.secondary : COLORS.black}
              size={25}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabsNavigator}
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
        component={LandingView}
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
