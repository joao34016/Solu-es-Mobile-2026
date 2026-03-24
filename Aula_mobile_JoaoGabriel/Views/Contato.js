import { View, Text, TextInput, StyleSheet, Button } from "react-native-web";
import Titulo from "../components/Titulo";

export default function Contato(){
    return(
        <View style={styles.container}>
            <Titulo/>
            <TextInput
            style={styles.txt_input}
            placeholder="Nome"
            />
            <TextInput
            style={styles.txt_input}
            placeholder="Email"
            />
            <TextInput
            style={styles.txt_input}
            placeholder="Mensagem"
            />
            <Button
            title="Enviar"
            />
        </View>
    )
}
const styles = StyleSheet.create({
     container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#f0f0f0ff' 
    },
    txt_input:{
        borderWidth: 1,
        borderColor: '#eb2727ff',
        margintop: 20
        

        
    }
})
