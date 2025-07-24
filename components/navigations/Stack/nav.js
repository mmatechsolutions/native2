import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import AboutScreen from "./aboutScreen";
import { Button } from "react-native";


const Stack = createNativeStackNavigator();

export default function Navs() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={
                { 
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Menu"
                                color="black"
                            />
                        ),
                        contentStyle: {
                            backgroundColor: '#bd2020ff',
                        },
                }
            }> 

                <Stack.Screen name="Home" component={HomeScreen}  />
                <Stack.Screen name="About" component={AboutScreen}/>
            </Stack.Navigator>
            


        </NavigationContainer>
    )
}