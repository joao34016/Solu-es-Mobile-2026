import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from 'react';


export default function App() {
  
  const [Mensagem, setMensagem] = useState('Olá')
  const [Soma, setSoma] = useState(0)

  

  function TrocaMsg(){
    if (Mensagem == 'Olá'){
      setMensagem('Oi, trocamos de mensagem!')
    }else{
      setMensagem('Olá')
    }
    
  }
  function Somas(){
    setSoma(Soma+1)
  }
  function Dim(){
    if (Soma >0){
    setSoma(Soma-1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}> {Mensagem} </Text>
      <Button
      buttonColor={'orange'}
      TextColor='#fff'
      mode = 'text'
      onPress={TrocaMsg}>Clique aqui

      </Button>
      
     
     
      
      <View style={styles.lado}>
      
      <Button buttonColor={'orange'}
      onPress={Somas}
      mode='text'
      textColor='black'>Soma</Button>



      
    
     


      <Button
      buttonColor={'orange'}
      onPress={Dim}
      mode='text'
      textColor='black'>Diminuir

      </Button>
      <Text style={styles.txt}> {Soma} </Text>
      

      
      
      </View>
      </View>
     
    
      
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 30,
  },
  lado:{
    flexDirection: 'row',
    gap: 5
  }
})

  


