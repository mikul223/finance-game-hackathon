
//базовые имена в React Native
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

import './src/services/firebase';

// главный экран
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главный экран (здесь будут экскурсии)</Text>
    </View>
  );
}

// вход в аккаунт выбор 
function AuthOptionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Button
          title="Войти"
          onPress={() => navigation.navigate('Login')}
        />
        <View style={{ marginTop: 10 }}>
          <Button
            title="Зарегистрироваться"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
}


// экран входа
function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Экран входа (будет скоро)</Text>
    </View>
  );
}

// экран регистрации
function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Экран регистрации (будет скоро)</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();


// выполнение
export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen 
          name="AuthOptions" 
          component={AuthOptionsScreen}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Вход' }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ title: 'Регистрация' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}