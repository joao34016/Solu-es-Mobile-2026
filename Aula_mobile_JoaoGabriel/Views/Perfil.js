import{View, Text, Image, StyleSheet} from 'react-native'
import Titulo from '../components/Titulo'

export default function Perfil(){
    return(
        <View style={styles.container}>
            <Titulo/>
            <Image style={styles.image} source={require('../Sources/vascos.jpg')}></Image>
            <Text style={styles.txt}>João Carlos</Text>
            <Text style={styles.txt}>28 anos</Text>
            <Text style={styles.txt}>Informática</Text>
            <Text style={styles.txt}>Adoro assistir series e filmes e ficar com a família</Text>
            <View style={styles.view_img}>
                <Image style={styles.img_view} source={require('../Sources/phvasco.png')}></Image>
                <Image style={styles.img_view} source={require('../Sources/phvasco.png')}></Image>
                <Image style={styles.img_view} source={require('../Sources/phvasco.png')}></Image>
                <Image style={styles.img_view} source={require('../Sources/phvasco.png')}></Image>
            </View>
        
        </View>
    )

}
   const styles = StyleSheet.create({
     container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    
    txt:{
        fontSize: 20,
        textAlign: 'justify',
        color: '#c2c2c2ff'
    },
    image:{
        height: 300,
        width: 200,
        borderRadius: '50%'
    },
    img_view:{
        width: 200,
        height: 150,
        borderRadius: '50%'

    },
    view_img:{
        flexDirection: 'row',
        padding: 5,
        justifyContent: "space-around"
    }


});
