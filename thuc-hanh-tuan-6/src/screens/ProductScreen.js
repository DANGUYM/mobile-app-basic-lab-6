import React from 'react';
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: '../img/usb.png',
    rating: '⭐⭐⭐⭐⭐ (22)',

  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: '../img/cap.png',
    rating: '⭐⭐⭐⭐⭐ (22)',

  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: '../img/usb.png',
    rating: '⭐⭐⭐⭐⭐ (22)',

  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: '⭐⭐⭐⭐⭐ (22)',
    image: '../img/cap.png',
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: '../img/usb.png',
    rating: '⭐⭐⭐⭐⭐ (22)',

  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: '../img/cap.png',
    rating: '⭐⭐⭐⭐⭐ (22)',
  }
];

const ProductScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      {/* <Image source={{ uri: item.image }} style={styles.productImage} /> */}
      <Image source={require('../img/usb.png')} style={styles.productImage} />
      <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Image style={styles.searchIcon} source={require('../img/arrow.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput} 
          placeholder="Dây cáp usb" 
        />
        <TouchableOpacity style={styles.cartButton}>
          <Image style={styles.cartIcon} source={require('../img/cart.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton}>
          <Image style={styles.moreIcon} source={require('../img/....png')} />
        </TouchableOpacity>

      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} 
        columnWrapperStyle={styles.row}
      />

      <View style={styles.footer}>

      <TouchableOpacity style={styles.navButton}>
          <Image source={require('../img/multi-task.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../img/home.png')} />
        </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
          <Image source={require('../img/back.png')} />
        </TouchableOpacity>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#00aaff',
    alignItems: 'center',
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#1BA9FF',
    borderRadius: 5,
    marginRight: 5,
  },
  searchIcon: {
    height:28,
    width: 28,
    
  },
  searchInput: {
    width: '50%',
    padding: 10,
    marginLeft: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
  },
  cartButton: {
    marginLeft: 20,

    marginBottom: 5,
  },
  cartIcon: {
    height: 40,
    width: 40,
  },
  moreIcon: {
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    alignItems: "center"
  },
  navButton: {
    padding: 10,
    backgroundColor: '#1BA9FF',
    
  },
});

export default ProductScreen;

