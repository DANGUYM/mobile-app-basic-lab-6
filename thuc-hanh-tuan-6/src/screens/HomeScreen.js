import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <View style={styles.logo}>




        </View>
      </View>

      <Text style={styles.title}>GROW YOUR BUSINESS</Text>

      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.signUpButton}
        onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    // marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#00A0FF',
    borderWidth: 12,
    borderColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    // marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    // marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginButton: {
    backgroundColor: '#FFC700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    // marginRight: 10,
  },
  signUpButton: {
    backgroundColor: '#FFC700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
