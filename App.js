import React from 'react';
import { StyleSheet,View,} from 'react-native';
import Box from './components/box';


export default function App() {
  

  return (
    <View style={styles.container}>
     <Box style={{ backgroundColor: 'red' }}>Box1</Box>
      <Box style={{ backgroundColor: 'blue' }}>Box2</Box>
      <Box style={{ backgroundColor: 'yellow' }}>Box3</Box>
      <Box style={{ backgroundColor: 'purple' }}>Box4</Box>
      <Box style={{ backgroundColor: 'aqua' }}>Box5</Box>
      <Box style={{ backgroundColor: 'green' }}>Box6</Box>
      <Box style={{ backgroundColor: 'wheat' }}>Box7</Box>
      <Box style={{ backgroundColor: 'orange' }}>Box8</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'plum',
    marginTop:40,
    borderWidth:6,
    borderColor:'red'
  },
});
