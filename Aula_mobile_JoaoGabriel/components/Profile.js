import {View, Text, Image} from 'react-native';

export function Joao(){
    return(
        <View>
            <Text>
                Meu primeiro componente sozinho
                            
            </Text>
        </View>
    )
}


export function Person(){
    return(
        <View>
            <Image source={require('../Sources/vascos.jpg')}/>
            <Text>componente
            </Text>
           
        </View>
    )
}

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente

            </Text>

        </View>

    )
}