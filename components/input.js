import { SafeAreaView, TextInput, StyleSheet, StatusBar,Text } from "react-native";
import React,{ useState } from "react";




export default function Input () {

    const [name,setName] = useState("");

    return(
        <SafeAreaView style= {styles.container}>
            <TextInput style= {styles.input} value={name} onChangeText={setName}/>
            <Text>My name is {name}</Text>
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
        }
    });