import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>LOGIN</Text>

      <View>

      <TextInput style={styles.input} placeholder="Name" keyboardType="email-address" />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}>

          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/709/709612.png' }}
            style={styles.eyeImage}
          />
        </TouchableOpacity>
      </View>

      </View>


      <View>

      <TouchableOpacity 
      style={styles.loginButton}
      onPress={() => {
        navigation.navigate('Home');
      }}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text> */}
      <TouchableOpacity>
        <Text 
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgetPassword')}
        >Forgot your password?</Text>
      </TouchableOpacity>

       </View>

      {/* <Text style={styles.orLoginText}>Or login with</Text> */}

      {/* <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }}
            style={styles.googleImage}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC700',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#DCBD3B',
    // borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  eyeImage: {
    width: 20,
    height: 20,
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    width: '100%',
    // borderRadius: 5,
    marginBottom: 15,
    marginTop: 15,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#000000',
  },
  forgotPassword: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    // textDecorationLine: 'underline',
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
  orLoginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
  },
  // socialContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginTop: 20,
  //   width: '80%',
  // },
  // socialButton: {
  //   backgroundColor: '#3b5998',
  //   padding: 10,
  //   borderRadius: 5,
  //   width: 50,
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // socialText: {
  //   color: 'white',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  // googleImage: {
  //   width: 24,
  //   height: 24,
  // },
});

export default LoginScreen;
