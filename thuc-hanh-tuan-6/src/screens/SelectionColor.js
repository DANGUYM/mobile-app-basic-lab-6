import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SelectionColor = ({navigation}) => {

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
        
        <View style = {styles.previewSelection}>
            <Image
                source={
                selectedColor === 'red' ? require('../img/red.png') :
                selectedColor === 'black' ? require('../img/black.png') :
                selectedColor === 'blue' ? require('../img/blue.png') :
                require('../img/white.png')
                }
                style={styles.image}
            />
      <View style={styles.tittleContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3</Text>
        <Text style={styles.title}>Hàng chính hãng</Text>
      </View>

    </View>


      <View style={styles.colorOptionsContainer}>

        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: 'lightblue' }]}
          onPress={() => handleColorSelection('lightBlue')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: 'red' }]}
          onPress={() => handleColorSelection('red')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: 'black' }]}
          onPress={() => handleColorSelection('black')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: 'blue' }]}
          onPress={() => handleColorSelection('blue')}
        />
      </View>


      <TouchableOpacity
        onPress={() => navigation.navigate('ProductCard')}
    // onPress={() => navigation.navigate('ProductCard', {selectedColor})}
        style={styles.buyButton}>
        <Text style={styles.buyButtonText}>XONG</Text>
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
    previewSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
    tittleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
    },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  colorOptionsContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginBottom: 10,
  },
  colorOption: {
    width: 90,
    height: 90,
    marginHorizontal: 5,
    borderRadius: 5,
    margin: 10,
    marginLeft: 130,
  },
  buyButton: {
    backgroundColor: 'blue',
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

export default SelectionColor;
