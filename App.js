import React from 'react';
import { StyleSheet,SafeAreaView, Platform, ScrollView} from 'react-native';
import CarCard from './components/carCard';


export default function App() {
  const cars = {
    "name": "Audi RS7",
    "top_speed": "305 km/h",
    "color": "Nardo Gray",
    "fuel": "Petrol",
    "transmission": "8-speed automatic",
    "image": require("./assets/audi.jpg")
 }
 const gtr={
    "name": "Nissan GT-R",
    "top_speed": "315 km/h",
    "color": "Jet Black Pearl",
    "fuel": "Petrol",
    "transmission": "6-speed dual-clutch",
    "image":  require("./assets/gtr.jpg")
  }
 const porsche = {
    "name": "Porsche 911",
    "top_speed": "330 km/h",
    "color": "Guards Red",
    "fuel": "Petrol",
    "transmission": "8-speed PDK automatic",
    "image": require("./assets/911.jpg")
  }

 const m5= {
    "name": "BMW M5",
    "top_speed": "305 km/h",
    "color": "Marina Bay Blue",
    "fuel": "Petrol",
    "transmission": "8-speed automatic",
    "image":require("./assets/m5.jpg")
  }
  const benz={
    "name": "Mercedes-AMG GT",
    "top_speed": "318 km/h",
    "color": "Designo Selenite Grey",
    "fuel": "Petrol",
    "transmission": "7-speed dual-clutch automatic",
    "image": require("./assets/benz.jpg")
  }
  const lambo={
    "name": "Lamborghini Huracán",
    "top_speed": "325 km/h",
    "color": "Verde Mantis",
    "fuel": "Petrol",
    "transmission": "7-speed dual-clutch",
    "image": require("./assets/lambo.jpg")
  }
 const corvette= {
    "name": "Chevrolet Corvette C8",
    "top_speed": "312 km/h",
    "color": "Torch Red",
    "fuel": "Petrol",
    "transmission": "8-speed dual-clutch",
    "image":require("./assets/corvette.jpg")
  }
 
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CarCard {...cars}/>
          <CarCard {...porsche}/>
          <CarCard {...gtr}/>
          <CarCard {...m5}/>
          <CarCard {...lambo}/>
          <CarCard {...benz}/>
          <CarCard {...corvette}/>
        </ScrollView>
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
