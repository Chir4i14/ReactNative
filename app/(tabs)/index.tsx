import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import bgImage from './Chirai.png'; // ajuste o caminho conforme sua estrutura

export default function HomeScreen() {
  return (
    <ImageBackground
      source={bgImage}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    >
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.47)', // opacidade para contraste
      }}>
        <Text style={{ fontSize: 44, fontWeight: 'bold', color: '#333' }}>Meus trabalhos artisticos</Text>
        <Text style={{ marginTop: 10, color: '#666' }}>De Nickmus</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.8)', // opacidade para contraste
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    marginTop: 10,
    color: '#666',
  },
});
