import { StyleSheet, Text, View } from "react-native";


export default function Box({children, style}){
    return(
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#FFF',
        padding:40,
    },
    text:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }
})