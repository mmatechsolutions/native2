import { useEffect, useState } from "react";
import { View,StyleSheet, FlatList, Text } from "react-native";


export default function List() {

    const [postList,setPostList] = useState([])

    const fetchData =  async(limit=50) => {
        const res =await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

         const data = await  res.json();
         setPostList(data);
    };

    useEffect(()=> {
        fetchData();
    },[]);


    return(
        <View style={styles.listContainer}>
            <FlatList
            data={postList}
            renderItem={({item}) => {
                return(
                    <View style={ styles.card}>

                        <Text style={ styles.titleText}>{item.title}</Text>
                        <Text style={ styles.bodyText}>{item.body}</Text>
                </View>
                )
            }}
            ItemSeparatorComponent={<View style={{height:16}}/>}
            ListEmptyComponent={<Text>NO Posts Found</Text>}
            ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End Of List</Text>}


             />
            

        </View>
    )
}

const styles = StyleSheet.create({
  
    listContainer:{
        flex:1,
        padding:16,
    },
    card:{
        backgroundColor:'white',
        padding:16,
        borderRadius:8,
        borderWidth:1,
    },
    titleText:{
        fontSize:30,
    },
    bodyText:{
        fontSize:24,
        color:'#666666'
    },
    headerText:{
        fontSize:24,
        textAlign:"center",
        marginBottom:12
    },
    footerText:{
        fontSize:24,
        textAlign:'center',
        marginTop:12
    }
});
