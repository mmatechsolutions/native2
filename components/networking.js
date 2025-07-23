import { useEffect, useState } from "react";
import React from 'react'
import { View,StyleSheet, FlatList, Text, StatusBar, SafeAreaView, ActivityIndicator, TextInput, Button } from "react-native";


export default function List() {

    const [postList,setPostList] = useState([]);
    const [isLoading,setIsLoading] =useState(true);
    const [refreshing,setRefreshing] = useState(false);

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [isPosting, setIsposting] = useState(false);
    const [error, setError] = useState("");


    const fetchData =  async(limit=5) => {
        try{
            const res =await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

            const data = await  res.json();
            setPostList(data);
            setIsLoading(false);
            setError("");
        }catch (error) {
            console.error("Error fetching data:",error);
            setIsLoading(false);
            setError('Failed to fetch post list');
        }
    };

    const handleRefresh = async () =>{
        setRefreshing(true);
        fetchData(15);
        setRefreshing(false);
        
    }

    const addPost= async () => {
        
            setIsposting(true)
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
                    method: 'post',
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify({
                        title: postTitle,
                        body: postBody
                    })
                })
                setError("")
                 const newPost = await res.json()
                    setPostList([newPost, ...postList]);
                    setPostTitle("");
                    setPostBody("");
                    setIsposting(false);
        }catch{
            console.error("Error sending post:",error);
            setIsLoading(false);
            setError('Failed  to add new post');
    
           
        } finally{
             setIsposting(false);
        }

       
    };
    useEffect(()=> {
        fetchData();
    },[]);

    if (isLoading) {
        return(
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Loading....</Text>
            </SafeAreaView>
        )
    }


    return(
        error ? (
            <View style={styles.errorContainer}>
                <Text >{error}</Text> 
            </View>
        ):(
        <View style={styles.listContainer}>
            <View style={styles.inputContainer} >
                <TextInput
                style={styles.input}
                    placeholder="Post Title"
                    value={postTitle}
                    onChangeText={setPostTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Post Body"
                    value={postBody}
                    onChangeText={setPostBody}
                />
                <Button 
                    title={isPosting ? "Adding..." : "Add Post" } 
                    onPress={addPost}
                    disabled={isPosting || !postTitle.trim() || !postBody.trim()}

                    
                />

            </View>
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
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                ItemSeparatorComponent={() => <View style={{height:16}}/>}
                ListEmptyComponent={<Text>NO Posts Found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End Of List</Text>}
                refreshing={refreshing}
                onRefresh={handleRefresh}

            

             />
            

        </View>
    ))
}



const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 16,
    color: "#666",
  },
  headerText: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "600",
    color: "#1976d2",
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    fontStyle: "italic",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 44,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  errorContainer:{
    backgroundColor:"#FFC0CB",
    padding:16,
    borderRadius:8,
    borderWidth:1,
    margin:16, 
    alignItems:"center"
  },
  errorText:{
    color:"#D8000C",
    fontSize:16,
    textAlign:"center",

  }
});
