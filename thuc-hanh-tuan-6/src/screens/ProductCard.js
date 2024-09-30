import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({navigation}) => {

  const [selectedColor, setSelectedColor] = useState('red');

  const colorOptions = {
    red: '../img/red.png',
    black: '../img/black.png',
    blue: '../img/blue.png',
    lightBlue: '../img/white.png',
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>

      <Image
        source={
          selectedColor === 'red' ? require('../img/red.png') :
          selectedColor === 'black' ? require('../img/black.png') :
          selectedColor === 'blue' ? require('../img/blue.png') :
          require('../img/white.png')
        }
        style={styles.image}
      />
      
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <Text style={styles.rating}>⭐⭐⭐⭐⭐ (Xem 828 đánh giá)</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>1.790.000 đ</Text>
      </View>

        
      <View style={styles.deliveryContainer}>
      
      <Text style={styles.deliveryNote}>Ở đâu rẻ hơn hoàn tiền</Text>
      <Image source={require('../img/question.png')}/>

      </View>

      <TouchableOpacity style={styles.optionButton}>
        <Text
        onPress={() => navigation.navigate('SelectionColor')}
        style={styles.optionButtonText}>4 MÀU - CHỌN LOẠI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 280,
    height: 320,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  rating: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  discountedPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryNote: {
    fontSize: 18,
    color: 'red',
    marginRight: 10,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    width: '100%',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProductCard;
