import { Text, View, TouchableOpacity } from 'react-native';

function HomeScreen({route, navigation}) {

  const handleBoton = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleBoton}>
        <Text> ACA PUEDEN IR LOS DATOS PERSONALES DEL GUARDIA </Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
}

export default HomeScreen;
