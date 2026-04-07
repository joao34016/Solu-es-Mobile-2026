import { NavigationContainer } from "@react-navigation/native"
import Login from "./Screens/Login";
import Pessoas from "./Screens/Pessoas";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';
import Images from "./components/image";

function TabNavigate(){
  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Pessoas}/>
      <Tab.Screen name="Imagens" component={Images}/>
    </Tab.Navigator>

  )
}



export default function App(){

  
    const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home Screen" component={TabNavigate}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

  
}