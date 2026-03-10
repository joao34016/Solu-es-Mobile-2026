import {View, Image, StyleSheet} from "react-native";

export default function Images(){
    return(
        <View style={styles.view_image}>
        <Image style={styles.Image} source={require('../Sources/vascos.jpg')}/>
        {/* <Image style={styles.Image} source={require('../Sources/phvasco.png')}/> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    Image:{
    height: 200,
    width: 250,
    
    

  },
  view_image:{
    flexDirection: 'row',
    alignContent: 'space-around',
    gap: 20
    
  },
})