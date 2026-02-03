// вход в аккаунт выбор 


import { View, Text, Button } from 'react-native';

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

export default AuthOptionsScreen;