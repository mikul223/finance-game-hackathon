
// главный экран
 
//  View контейнер, FlatList(лучше подходит для изображения с текстом) прокручивание контейнера свайп, TouchableOpacity изображение как кнопка, Dimensions получение размера окна
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import excursionsData from '../../assets/data/excursions.json';
import { excursionImages } from '../utils/imageImports';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_MARGIN = width * 0.02;

function HomeScreen({ navigation }) {
  const renderExcursionCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ExcursionDetail', { excursionId: item.id })}
      style={{
        width: CARD_WIDTH,
        marginHorizontal: CARD_MARGIN,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#abb5c0',
        marginTop: 40,
        marginBottom:100,
      }}
    >
      <Image
        source={excursionImages[item.image]}
        style={{
          width: '100%',
          height: 300,
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 14, color: '#000000', marginBottom: 8 }} numberOfLines={2}>
          {item.shortDescription}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            {item.pointsCount} точек
          </Text>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            {item.duration} мин
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <FlatList
        data={excursionsData}
        renderItem={renderExcursionCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 0,
          paddingHorizontal: (width - CARD_WIDTH) / 2 - CARD_MARGIN,
        }}
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
}

export default HomeScreen;