import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ExcursionMapScreen from '../screens/ExcursionMapScreen';
import AuthOptionsScreen from '../screens/AuthOptionsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Button } from 'react-native';

import ExcursionDetailScreen from '../screens/ExcursionDetailScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              title="Войти"
              onPress={() => navigation.navigate('AuthOptions')}
            />
          ),
        })}
      />
      <Stack.Screen name="AuthOptions" component={AuthOptionsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ExcursionDetail" component={ExcursionDetailScreen} />
      <Stack.Screen name="ExcursionMap" component={ExcursionMapScreen} />

    </Stack.Navigator>
  );
}