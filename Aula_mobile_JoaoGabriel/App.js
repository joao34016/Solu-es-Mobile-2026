import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import { useState } from 'react';
import { drivers } from './components/drivers';
// const drivers = drivers[1]
export default function App() {
  
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}> TITULO </Text>
      {drivers.map((drivers) => (
      <Card>
        <Card.Cover source={{uri: drivers.image}}></Card.Cover>
         <Card.Content style={styles.cards}>
          <Text style={styles.txt} >{drivers.name}</Text>
          <Text style={styles.txt} >{drivers.description}</Text>
          <Text style={styles.txt} >{drivers.team}</Text>
          <Text style={styles.txt} >{drivers.country}</Text>
          <Text style={styles.txt} >{drivers.stars}</Text>

        
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
    alignItems: 'center'
    
  }
})

  


