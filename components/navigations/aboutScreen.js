import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function AboutScreen( {navigation,route} ) {
    const { name} = route.params || {}; 
    console.log(`${name} in about screen`); ;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🎬 About MovieVerse</Text>
      <Text style={styles.text}>
        MovieVerse is your go-to app for discovering and tracking the best movies around the world. Whether you're a fan of action, drama, sci-fi, or indie films, MovieVerse provides a beautiful, easy-to-use platform to explore movie details, ratings, trailers, and more.
      </Text>

      <Text style={styles.subheading}>🌟 Features</Text>
      <Text style={styles.text}>
        - Discover popular and trending movies{'\n'}
        - Search by title, genre, or release year{'\n'}
        - View high-quality posters and trailers{'\n'}
        - Save your favorite movies for later
      </Text>

      <Text style={styles.subheading}>📌 Version</Text>
      <Text style={styles.text}>App Version: 1.0.0</Text>

      <Text style={styles.subheading}>📧 Contact</Text>
      <Text style={styles.text}>For support, email us at support@movieverse.app</Text>
      <Button
      title='Go To Home'
      onPress={() => navigation.navigate("Home",{result:'success'})}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    color: '#f5c518',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
  },
});
