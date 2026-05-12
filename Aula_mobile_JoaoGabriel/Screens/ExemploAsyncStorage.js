import { useEffect, useState } from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ExemplOAsyncStorage(){

    const [nome, setNome] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState('')

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
    useEffect(() => {
        MostrarNome();
    }, []);


    return(
        <View>
            <TextInput
            placeholder='nome'
            value={nome}
            onChangeText={setNome}
                
                />
                <Button title='Salvar Pessoa' onPress={Salvarnome}/>
                <Text> {nomeSalvo}</Text>
        </View>
    )
}