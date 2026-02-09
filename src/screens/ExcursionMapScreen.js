import { View, Text } from 'react-native';
//пока это общая карта при нажатии кнопки начать маршрут.. не знаю можно либо карту оставить общую, либо 
//на несколько карт разделить, как сделать так чтобы точки на всех устройствах отображались одинаково? завтра я
//это обдумаю уже хочу спаать

function ExcursionMapScreen({ route }) {
  const { excursionId } = route.params || {};
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Экран карты маршрута</Text>
    </View>
  );
}

export default ExcursionMapScreen;