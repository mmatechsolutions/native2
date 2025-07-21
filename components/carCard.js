 import { View,Text, StyleSheet,Platform,Image} from "react-native";

 export default function CarCard( 
    {   name,
        top_speed,
        color,
        fuel,
        transmission,
        image}
 ){
     return(
        <View style={styles.card}>
           <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.color}>{color}</Text>
           </View>

           <Image 
           source={image}
            accessibilityLabel={`${name}`} 
            style={styles.image}
            />

            <View style={styles.specsContainer}>
            <View style={styles.specItem}>
                <Text style={styles.label}>Fuel:</Text>
                <Text style={styles.value}>{fuel}</Text>
            </View>

            <View style={styles.specItem}>
                <Text style={styles.label}>Top Speed:</Text>
                <Text style={styles.value}>{top_speed}</Text>
            </View>

            <View style={styles.specItem}>
                <Text style={styles.label}>Transmission:</Text>
                <Text style={styles.value}>{transmission}</Text>
            </View>
            </View>

        </View>
     )
 }

 const styles = StyleSheet.create({
    card: {
        backgroundColor:'wheat',
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
           ios: {
                shadowOffset:{width:2, height:2},
                shadowColor:"#333",
                shadowOpacity:0.3,
                shadowRadius:4
            },
            android:{
                elevation:5
            }
    })
    },
    nameContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:32
    },
    name:{
        fontSize:30,
        fontWeight:"bold"
    },
    color:{
        fontSize:22
    },
    image:{
        width:'100%',
        height: 200,
        marginBottom:16
    },
    specsContainer: {
        marginTop: 10,
        gap: 8 
    },
    specItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginRight: 6,
        color: '#333'
    },
    value: {
        color: '#555'
    }

 })