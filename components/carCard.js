 import { View,Text, StyleSheet,Platform, FlatList} from "react-native";
 import carData from "./cars.json"

 export default function CarCard(){
     return(
        <FlatList 
        data={carData.cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=>{
            return(
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.speed}>{item.top_speed}</Text>
                    <Text style={styles.color}>{item.color}</Text>
                </View>
            )
        }}
        ItemSeparatorComponent={<View style={{height:20}}/>}
        ListEmptyComponent={<Text>No Cars Found</Text>}
        ListHeaderComponent={<Text style={styles.header}>Cars</Text>}
        ListFooterComponent={<Text style={styles.header}>End of Cars</Text>}
        />
     )
 }

 const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 16,
        // marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        ...Platform.select({
            ios: {
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            },
            android: {
            elevation: 3,
            }
        })
        },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6
        },
    speed: {
        fontSize: 16,
        color: '#0077cc',
        marginBottom: 4
        },
    color: {
        fontSize: 16,
        color: '#555'
        },

        header:{
            fontSize:24,
            fontWeight:'bold',
            textAlign:'center',
            margin:12
        }

 })