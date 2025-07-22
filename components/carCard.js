 import { View,Text, StyleSheet,SectionList, } from "react-native";
 import carData from "./cars.json"

 export default function CarCard(){
     return(
       
        <SectionList
          sections={carData}
          renderItem={({item})=>{
            return(

            <View style={styles.card}>
                   <Text style={styles.cardText}>{item}</Text>                   
             </View>
            )
          }}

          renderSectionHeader={({section})=>{
            return(
              <Text style={styles.sectionHeaderText}>{section.fuel} Cars</Text>
            )
          }}

          ItemSeparatorComponent={()=> <View style={{height:16}}/>}
          SectionSeparatorComponent={()=> <View style={{height:16}}/>}
        />
       
     )
 }

 const styles = StyleSheet.create({
   sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  cardText: {
    fontSize: 16,
    color: '#333'
  }
 })