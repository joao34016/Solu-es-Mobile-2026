import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react";
import openDB from "../database/db"
import 'coi-serviceworker';


const db = openDB();



export default function Produtos(){

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState();

    const adicionarProduto = async() => {
        try {
            await db.runAsync (
                'INSERT INTO produtos (nome, valor) VALUES (? , ?)', [nome, parseFloat(valor)]
            )
            alert('Produto adicionado! ')
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.txt_title}>
                Produtos
            </Text>
            <TextInput style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}

            />
            <TextInput style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            
            />

            <Button 
            title="Cadastrar"
            onPress={adicionarProduto}
                     
            />
        </View>
    )
    
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
    width: 150,
  },
  
});