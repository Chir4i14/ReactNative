import { View, Text } from 'react-native';
import {HelloWave} from '@/components/HelloWave';
import { MaterialIcons, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e3f2fd',
    }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1565c0' }}> Explorar</Text>
      <Text style={{ marginTop: 10, color: '#1565c0' }}>Descubra novas possibilidades!</Text>
      <HelloWave />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialIcons name="favorite" size={48} color="red" />
        <Ionicons name="home-outline" size={30} color="purple" />
        <FontAwesome name="user" size={30} color="orange" />
        <Feather name="camera" size={30} color="green" />
      </View>
    </View>
  );
}
