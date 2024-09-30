import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Order = () => {
  const [quantity, setQuantity] = useState(1); // Quản lý số lượng sản phẩm
  const [discountCode, setDiscountCode] = useState(''); // Quản lý mã giảm giá

  const originalPrice = 150000;
  const price = 141800; // Giá sản phẩm
  const totalPrice = price * quantity; // Tính tổng tiền theo số lượng

  const increaseQuantity = () => setQuantity(prev => prev + 1); // Hàm tăng số lượng
  const decreaseQuantity = () => { if (quantity > 1) setQuantity(prev => prev - 1); }; // Hàm giảm số lượng

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source = {require('../img/toan.png')}/>

        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.productTitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>
            {price.toLocaleString('vi-VN')} đ</Text>

          <Text style={styles.originalPrice}>
            {originalPrice.toLocaleString('vi-VN')} đ</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.buyAfter} onPress={() => navigation.navigate('ForgetPassword')}>Mua sau</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>


    <View style={styles.voucher}>
       <Text style={styles.quantityContainer}>Mã giảm giá đã lưu</Text>

      <TouchableOpacity>
        <Text style={styles.quantityContainer} onPress={() => navigation.navigate('ForgetPassword')}>Xem tại đây</Text>
      </TouchableOpacity>
    </View>



      {/* Phần nhập mã giảm giá */}
      <View style={styles.discountContainer}>
        <TextInput
          style={styles.discountInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        {/* <Button style={styles.submitVoucher} title="Áp dụng" onPress={() => {}} /> */}
        <TouchableOpacity>
          <Text style={styles.submitVoucher}>Áp dụng</Text>
        </TouchableOpacity>
          
      </View>

      {/* Phần hiển thị tổng tiền */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Tạm tính</Text>
        <Text style={styles.totalAmount}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
      </View>

      {/* Phần hiển thị nút thanh toán */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 125,
    height: 150,
    marginRight: 10,
    marginTop: 5,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  voucher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityButton: {
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  buyAfter: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 80,
  },
  discountContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  submitVoucher: {
    backgroundColor: 'blue',
    borderRadius: 5,
    color: '#fff',
    padding: 14,
    fontSize: 16,
    fontWeight : 'bold',
    
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  checkoutButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Order;
