import {View, StyleSheet, Text} from 'react-native';

export default function Titulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Meu Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#822424ff'
        
    }
})