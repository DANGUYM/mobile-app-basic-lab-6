import React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';

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

const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <Button title="Chat" color="red" onPress={() => alert('Chat with ' + item.shop)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 12,
    color: '#888',
  },
});

export default ChatScreen;
