import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';

const Tab2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products'); 
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderProductItem = (item, index) => (
    <View key={item.id} style={[styles.card, index % 2 !== 0 ? styles.cardOdd : styles.card]}>
      <View style={styles.part1}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      </View>
      <View style={styles.part2}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardsContainer}>
        {products.map((item, index) => (
          renderProductItem(item, index)
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Adjust as needed to create the desired spacing between cards
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardOdd: {
    marginLeft: '2%',
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 3,
  },
  part1: {
    flex: 0.4,
  },
  part2: {
    flex: 0.6,
    marginLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
  },
  price: {
    marginTop: 8,
    color: 'green',
  },
});

export default Tab2;
