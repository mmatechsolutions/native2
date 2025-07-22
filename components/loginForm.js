import { useState } from "react";
import { StyleSheet,View,Text,TextInput,Button, Image,KeyboardAvoidingView, Platform } from "react-native";


export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validation = () => {
        let errors = {}
        if (!username) errors.username= "Username is required"
        if (!password) errors.password= "password is required"

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }


    const handleSubmit = () => {
    if (validation() ) {
        console.log("Submitted", username, password);
        // reset states
        setUsername("");
        setPassword("")
        setErrors({})
    }
    }
    return(
        <KeyboardAvoidingView 
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === "ios" ? 100:0}
        style={styles.container}
        >
            <View style={styles.form}>
                <Image 
                source={require('../assets/m5.jpg')}
                style={styles.image}
                />
                <Text style={styles.label}>Username</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    {
                        errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
                    }
                <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input } 
                        secureTextEntry 
                        placeholder="Enter password"
                        value={password}
                        onChangeText={setPassword}
                    />
                     {
                        errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                    }

                <Button 
                    title="Login" 
                    onPress={()=>{handleSubmit()}}
                />
            </View>
        </KeyboardAvoidingView>



    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
        backgroundColor:"#f5f5f5"
    },
    
        form:{
            backgroundColor:"white",
            padding:20,
            borderRadius:10,
            shadowColor:"black",
            shadowOffset:{
                width:0,
                height:2
            },
            shadowOpacity:0.25,
            shadowRadius:4,
            elevation:5
        },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold'
    },
    input:{
        height:40,
        borderColor:'#ddd',
        borderWidth:1,
        marginBottom:15,
        paddding:10,
        borderRadius:5
    },
    image:{
        width:300,
        height:300,
        alignSelf:'center',
        marginBottom:50
    },
    errorText:{
        color:'red',
        marginBottom:10,
    }

})