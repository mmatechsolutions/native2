import react from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import DrawerHomePage from './drawerHome';
 import DrawerSettingsPage from "./settingsDrawer";


 const Drawer = createDrawerNavigator();

 export default function MyDrawer () {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={DrawerHomePage} />
                <Drawer.Screen name='Settings' component={DrawerSettingsPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
 }