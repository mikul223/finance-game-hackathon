

import { NavigationContainer } from '@react-navigation/native';
import './src/services/firebase';
import AppNavigator from './src/navigation/AppNavigator';



// выполнение
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}