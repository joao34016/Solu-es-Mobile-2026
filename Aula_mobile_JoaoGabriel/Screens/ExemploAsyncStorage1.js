import { useEffect, useState } from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Exemplo1AsyncStorage(){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState()

    const Salvarnome = async () => {
        try {
            await AsyncStorage.setItem('@nomePessoa', nome);
            alert('nome salvo!')
        } catch (e) {
            console.log(e)
        }
    };
    const MostrarNome = async () => {
        try {
            const value = await AsyncStorage.getItem('@nomePessoa');
            if (value !== null) {
            setNomeSalvo(value)
            }
        } catch (e) {
            console.log(e)
        }
    };
    
    const SalvarPessoa = async () => {
    const pessoa = {
        nome: nome,
        senha: senha
    }
    try {
        const jsonValue = JSON.stringify(pessoa);
        await AsyncStorage.setItem('@pessoa', jsonValue);
        alert('Pessoa salva!')
    }   catch (e) {
        console.log(e)
    // saving error
    }
};

const MostrarPessoa = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@pessoa');
    if (jsonValue != null){
        const pessoa = JSON.parse(jsonValue)
        setNomeSalvo(pessoa)
    }
  } catch (e) {
    console.log(e)
  }
};
    useEffect(() => {
        MostrarPessoa();
    }, []);


    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='nome'
            value={nome}
            onChangeText={setNome}
                
            />
            <TextInput 
            style={styles.input}
            placeholder='senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry= {true}
                
            />
            <Button title='Salvar Pessoa' onPress={SalvarPessoa}/>
            <Text style={styles.txt_title}> {nomeSalvo?.nome}</Text>
            <Text style={styles.txt_title}> {nomeSalvo?.senha}</Text>
        </View>
        
    )
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1111ff',
    alignItems: "center",
    justifyContent: 'center',
  },
  txt_title:{
    fontSize: 50,
    fontWeight: "bold",
    color: '#ffffffff',
    
  },
    input: {
    height: 60,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 150
  },
  
});