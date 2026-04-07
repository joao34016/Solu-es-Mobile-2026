import { NavigationContainer } from "@react-navigation/native"
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Pessoas from "./Screens/Pessoas";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';



export default function Bottab(){

  const Tab = createBottomTabNavigator();
  
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'red',
        tabBarActiveTintColor: '#f8f5f5ff',
        tabBarInactiveBackgroundColor: '#58242460',
        tabBarInactiveTintColor: 'blue',
        headerStyle:{
          backgroundColor: '#f02323ff',
        },
        headerTintColor: '#12b2f1ff',
        headerTitleAlign: 'center',
        
      }}>
        <Tab.Screen   name="Login" component={Login}
        options={{
          tabBarIcon: () => (
            <Entypo name="login" size={24} color="black" />
          )
        }}/>
        <Tab.Screen    name="Home Screen"  component={Pessoas}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={24} color="black" />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )

  
}