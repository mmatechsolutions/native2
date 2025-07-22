import React from 'react';
import { StyleSheet,SafeAreaView, Platform, ScrollView} from 'react-native';
import Input from './components/input';


export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <Input/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex:1,
    backgroundColor:'f5f5f5',
    paddingTop: Platform.OS === "android" ? 50:0,
  }
});
