import React from 'react';
import { StyleSheet,SafeAreaView, Platform} from 'react-native';
import CarCard from './components/carCard';


export default function App() {
 
  return (
      <SafeAreaView style={styles.container}>
        <CarCard/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex:1,
    backgroundColor:'f5f5',
    paddingTop: Platform.OS === "android" ? 50:0,
  }
});
