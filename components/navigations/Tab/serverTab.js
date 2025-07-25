import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Profile from "./profile";
import CourseList from "./course";
import Settings from "./settings";
import DrawerHomePage from "../drawer/drawerHome";
import Ionicons from '@expo/vector-icons/Ionicons'

import {useState} from 'react'
const Tab = createBottomTabNavigator();

export default function NavTab () {
    const [badge, setbadge] = useState(44)
    
    return(

        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: 'teal',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: 'wheat' },
                }}
            >
                <Tab.Screen  name="Home" component={DrawerHomePage}
                options={{
                        tabBarIcon: ({color}) => <Ionicons name="home-outline" size={20}  color={color}/>
                    }}
                    
                    />
                    <Tab.Screen  name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="person-outline" size={20}  color={color}/>
                    }}
                    />
                    <Tab.Screen  name="Courses" component={CourseList} 
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="book-outline" size={20}  color={color}/>
                    }}
                    />
                    
                    <Tab.Screen  name="Settings" component={Settings}
                    options={{
                        tabBarIcon: ({color}) => <Ionicons name="settings-outline" size={20}  color={color}/>,
                        tabBarBadge: badge > 0 ? badge :null,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}