import React from 'react';
import { StyleSheet,SafeAreaView, Platform, ScrollView, StatusBar} from 'react-native';
import List from './components/networking';

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
        <List/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex:1,
    backgroundColor:'f5f5f5',
    paddingTop:StatusBar.currentHeight,
  }
});
