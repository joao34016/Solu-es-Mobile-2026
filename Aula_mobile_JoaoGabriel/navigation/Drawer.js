import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Pessoas from "./Screens/Pessoas";


export default function Drawer(){

  const Drawer = createDrawerNavigator();
  
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen    name="Login" component={Login}/>
        <Drawer.Screen    name="Home Screen"  component={Pessoas} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

  
}