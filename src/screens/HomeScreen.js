import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
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

  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
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
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 3,
    

  },
  part1:{
    flex:0.4,
  },
  part2:{
    flex:0.6,
    marginLeft:5,
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

export default HomeScreen;
