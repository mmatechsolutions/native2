import react from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import DrawerHomePage from './drawerHome';
 import DrawerSettingsPage from "./settingsDrawer";
import Login from '../../loginForm';
import CarCard from '../../carCard';
import List from '../../networking';


 const Drawer = createDrawerNavigator();

 export default function MyDrawer () {
    return(
        <NavigationContainer>
            <Drawer.Navigator
            screenOptions={{
                    drawerActiveTintColor:"teal",
                    drawerActiveBackgroundColor:'lightgreen',
                    drawerContentStyle:{
                        backgroundColor:'lightblue'
                    }
                }}>
                <Drawer.Screen name='Home' component={DrawerHomePage} 
                
                />
                <Drawer.Screen name='Settings' component={DrawerSettingsPage} />
                <Drawer.Screen name='Login' component={Login} />
                <Drawer.Screen name='Cars' component={CarCard} />
                <Drawer.Screen name='List' component={List} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
 }