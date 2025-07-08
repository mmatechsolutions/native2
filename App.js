import React from 'react';
import { StyleSheet,View,Text, SafeAreaView} from 'react-native';


export default function App() {
 
  return (
    <SafeAreaView style={styles.safeCont}>

      <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Welcome!
        </Text>

      </View>
     
    </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
   safeCont:{
    flex:1,
    backgroundColor:'white'
   },
  container: {
    flex:1,
    backgroundColor:'plum',
    paddingTop:5
  },
   box:{
    padding:20,
   },
   text:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
   },
  
  
});
