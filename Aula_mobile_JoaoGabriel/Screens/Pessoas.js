import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import { Pessoa } from '../data/Pessoa';


export default function Pessoas() {
  
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}> 11 Titulares Vasco </Text>
      {Pessoa.map((pess) => (     
        <Card key={pess.id}>
        <Card.Cover source={{uri: pess.image}}></Card.Cover>
         <Card.Content style={styles.cards}>
          <Text style={styles.txt} >{pess.name}</Text>
          <Text style={styles.txt} >{pess.age}</Text>
          <Text style={styles.txt} >{pess.city}</Text>
          <Text style={styles.txt} >{pess.posicao}</Text>
          
        </Card.Content>
      </Card>
      ))}
      </View>
      </ScrollView>
    
       
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
    
  },
  cards:{
    alignItems: 'center',
    
    
  }
})

  


