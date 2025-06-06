import {View, Text,Image} from 'react-native';
import Chirai from '@/assets/images/ChiraiGhibly.png'
export default function ProfileScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fce4ec',
    }}>
      <Image
        source={Chirai}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ad1457' }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="36px" fill="#ad1457"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
        </svg> Perfil</Text>
      <Text style={{ marginTop: 10, color: '#ad1457' }}>Nick Chirai</Text>
    </View>
  );
}
