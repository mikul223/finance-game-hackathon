import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import excursionsData from '../../assets/data/excursions.json';
import { excursionImages } from '../utils/imageImports';

function ExcursionDetailScreen({ route, navigation }) {
  const { excursionId } = route.params || {};
  
  const excursion = excursionsData.find(item => item.id === excursionId);
  
  if (!excursion) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Экскурсия не найдена</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={excursionImages[excursion.image]}
        style={{
          width: '100%',
          height: 300,
          resizeMode: 'cover',
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>
          {excursion.title}
        </Text>
        
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#eee'
        }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#000000' }}>
              {excursion.duration}
            </Text>
            <Text style={{ fontSize: 12, color: '#000000' }}>минут</Text>
          </View>
          
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#000000' }}>
              {excursion.pointsCount}
            </Text>
            <Text style={{ fontSize: 12, color: '#000000' }}>точек</Text>
          </View>
        </View>
        <Text style={{ fontSize: 16, lineHeight: 24, color: '#000000', marginBottom: 30 }}>
          {excursion.description}
        </Text>

        {excursion.status === 'active' && (
          <TouchableOpacity
            onPress={() => navigation.navigate('ExcursionMap', { excursionId: excursion.id })}
            style={{
              backgroundColor: '#4A90E2',
              paddingVertical: 16,
              paddingHorizontal: 24,
              borderRadius: 10,
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Начать маршрут
            </Text>
          </TouchableOpacity>

        )}
        
        
        {excursion.status === 'active' && (
          <View style={{ 
            backgroundColor: '#dbedff', 
            padding: 15, 
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#4A90E2'
          }}>
            <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 5, color: '#333' }}>
              Готовая к прохождению экскурсия
            </Text>
            <Text style={{ fontSize: 13, color: '#666', lineHeight: 18 }}>
              Эта экскурсия содержит полный контент: аудиогид, точки маршрута и карту. Нажмите "Начать маршрут" для старта.
            </Text>
          </View>
        )}


        
        {excursion.status === 'development' && (
          <View style={{ 
            backgroundColor: '#FFF3CD', 
            padding: 15, 
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: '#FFC107'
          }}>
            <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 5, color: '#856404' }}>
              Экскурсия в разработке
            </Text>
            <Text style={{ fontSize: 13, color: '#856404', lineHeight: 18 }}>
              Эта экскурсия пока недоступна. Мы работаем над её созданием.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default ExcursionDetailScreen;