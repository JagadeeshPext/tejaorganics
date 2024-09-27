import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import Auth from './src/screens/Auth';
import Otp from './src/screens/Otp';
import TermsAndConditions from './src/screens/TermsAndConditions';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoad(false), 2000);
  }, []);
  return (
    <NavigationContainer>
      {isLoad ? (
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('./src/assets/Splash.png')}
        />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Auth}
          />
          <Stack.Screen
            name="Otp"
            options={{headerShown: false}}
            component={Otp}
          />
          <Stack.Screen
            name="termsAndConditions"
            options={{headerShown: false}}
            component={TermsAndConditions}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
