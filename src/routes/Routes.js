import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Registration from '../pages/Registration/Registration';
import RegistrationStepTwo from '../pages/RegistrationStepTwo/RegistrationStepTwo';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          name="RegistrationStepTwo"
          component={RegistrationStepTwo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
