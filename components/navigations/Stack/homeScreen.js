import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';

const sampleMovies = [
  {
    id: '1',
    title: 'Inception',
    image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
  },
  {
    id: '2',
    title: 'Interstellar',
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
];

export default function HomeScreen({navigation,route }) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🎬 MovieVerse</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.sectionTitle}>🔥 Featured</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sampleMovies.map(movie => (
          <View style={styles.featuredCard} key={movie.id}>
            <Image source={{ uri: movie.image }} style={styles.featuredImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieTitle}>{route.params?.result}</Text>

          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>🎥 Popular</Text>
      <FlatList
        data={sampleMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>            
            <Text style={styles.movieTitle}>{route.params?.result}</Text>

          </View>
        )}
      />
      <Button
      title='go to About'
      onPress={()  => navigation.navigate("About",
        {name:'Criss'})
      }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#fff',
    marginBottom: 20,
    height: 45,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2f2f2',
    marginBottom: 10,
  },
  featuredCard: {
    marginRight: 12,
    width: 140,
    alignItems: 'center',
  },
  featuredImage: {
    width: 140,
    height: 200,
    borderRadius: 10,
  },
  movieCard: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 10,
  },
  movieImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 16,
    flexShrink: 1,
  },
});
