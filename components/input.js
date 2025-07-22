import { SafeAreaView, TextInput, StyleSheet, StatusBar,Text,View, Switch } from "react-native";
import React,{ useState } from "react";




export default function Input () {

    const [name,setName] = useState("");
    const [isDarkMode, setIsDarkMode] = useState("");

    return(
        <SafeAreaView style= {styles.container}>
            <TextInput style= {styles.input} value={name} onChangeText={setName}
            // secureTextEntry
            placeholder="Example@email.com"
            // keyboardType
            // ="numeric"
            />
            <TextInput 
            style={[styles.input,styles.multilineInput]}
            placeholder="Message"
            multiline
            />
            <Text>My name is {name}</Text>


            <View style={styles.switchContainer}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch 
                value={isDarkMode}
                onValueChange={()=> setIsDarkMode((previousState)=> !previousState)}
                trackColor={{false:"#767577",  true:"lightblue"}}
                thumbColor="#f4f3f4"

         />
            </View>
        </SafeAreaView>

    
    
    )}

    const styles = StyleSheet.create({
      
      container: {
       flex:1,
       backgroundColor:"teal",
       paddingTop:StatusBar.currentHeight,
       paddingVertical:12
      },
      input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical:12,
        fontSize: 16,
        backgroundColor: '#fff',
        marginVertical: 10
        },
        multilineInput:{
            minHeight:100,
            textAlignVertical:"top"
        },
        text:{
            fontSize:30,
            padding:10
        },
        switchContainer:{
            flexDirection:"row", 
            alignItems:"center",
            justifyContent:"space-between",
            paddingHorizontal:10
        }
    });