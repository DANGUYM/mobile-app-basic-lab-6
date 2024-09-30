import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [gender, setGender] = useState(null);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>REGISTER</Text>

      <TextInput style={styles.input} placeholder="Name" />

      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <View style={styles.passwordContainer}>
  <TextInput
    style={[styles.input, { flex: 1 }]}
    placeholder="Password"
    secureTextEntry={!passwordVisible}
  />
  <TouchableOpacity
    style={styles.eyeIcon}
    onPress={() => setPasswordVisible(!passwordVisible)}
  >
    <Image
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/709/709612.png' }}
      style={styles.eyeImage}
    />
  </TouchableOpacity>
</View>


      <TextInput style={styles.input} placeholder="Birthday" keyboardType="numeric" />

      <View style={styles.genderContainer}>
        <TouchableOpacity onPress={() => setGender('Male')} style={styles.genderOption}>
          <View style={styles.radioCircle}>
            {gender === 'Male' && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setGender('Female')} style={styles.genderOption}>
          <View style={styles.radioCircle}>
            {gender === 'Female' && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
      style={styles.registerButton}
      onPress={() => {
        navigation.navigate('Login', { refresh: true });
      }}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EAD3',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  input: {
    backgroundColor: '#CAD8C4',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  eyeImage: {
    width: 20,
    height: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  genderText: {
    fontSize: 16,
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#D75A4A',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
});

export default RegisterScreen;
