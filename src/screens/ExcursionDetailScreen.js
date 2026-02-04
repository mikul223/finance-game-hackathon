import { View, Text } from 'react-native';

function ExcursionDetailScreen({ route }) {
  const { excursionId } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Детали экскурсии ID: {excursionId}</Text>
      <Text>(Здесь будет подробная информация)</Text>
    </View>
  );
}

export default ExcursionDetailScreen;