
// главный экран


import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главный экран (здесь будут экскурсии)</Text>
    </View>
  );
}


export default HomeScreen;