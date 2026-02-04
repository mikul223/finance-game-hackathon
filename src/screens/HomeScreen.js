
// главный экран
 
//  View контейнер, ScrollView прокручивание контейнера свайп, TouchableOpacity изображение как кнопка, Dimensions получение размера окна
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import excursionsData from '../../assets/data/excursions.json';
import { excursionImages } from '../utils/imageImports';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{ flex: 1 }} 
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        {excursionsData.map((excursion) => (
          <TouchableOpacity
            key={excursion.id}
            onPress={() => navigation.navigate('ExcursionDetail', { excursionId: excursion.id })}
            style = {{
              width: width - 40,
              height: 400,
              marginTop: -50,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image 
              source={excursionImages[excursion.image]}
              style={{ 
                width: '100%', 
                height: 500,
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;