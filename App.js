import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import Registration from './src/pages/Patient/Registration';
import Listing from './src/pages/Patient/Listing';
import Details from './src/pages/Patient/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green'}}
        text1Style={{
          fontSize: 15,
          fontFamily: 'Montserrat-Regular',
          fontWeight: '400',
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={{borderLeftColor: 'red'}}
        text1Style={{
          fontSize: 15,
          fontFamily: 'Montserrat-Regular',
          fontWeight: '400',
        }}
      />
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      {/* <Registration /> */}

      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
