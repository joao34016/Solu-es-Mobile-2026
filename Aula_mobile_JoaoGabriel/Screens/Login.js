import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';


export default function Login({navigation}) { 
  return (
    <View style={styles.container}>
      <Text style={styles.txt_title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
      />
      <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType="numeric"
      />
      <Button
      title='Logar'
      onPress={() => navigation.navigate('Home Screen') }
      />
    </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: 'center',
  },
  txt_title:{
    fontSize: 50,
    fontWeight: "bold",
    color: '#070707ff',
    
  },
    input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  
});
