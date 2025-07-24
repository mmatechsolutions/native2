import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const carParts = [
  { id: '1', name: 'Brake Pads', price: 'KSh 2,500' },
  { id: '2', name: 'Oil Filter', price: 'KSh 800' },
  { id: '3', name: 'Spark Plug Set', price: 'KSh 1,200' },
  { id: '4', name: 'Headlight Bulb', price: 'KSh 1,000' },
];

export default function DrawerHomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Parts Shop</Text>
      <FlatList
        data={carParts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.partName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
  },
  partName: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#444',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
