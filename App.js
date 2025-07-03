import React from 'react';
import { StyleSheet,View,Text, Dimensions} from 'react-native';


export default function App() {
  

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Welcome!
        </Text>

      </View>
     
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'plum',
    alignItems: 'center',
    justifyConten:'center',
        paddingTop:40,

  },
   box:{
    width: windowWidth > 500 ? "70%": "90%",
    height:windowHeight > 600? "30%": "90%",
    backgroundColor:'wheat',
    alignItems: 'center',
    justifyContent:'center'
   },
   text:{
    fontSize:windowWidth > 500 ? 40 : 24,
   }
});
