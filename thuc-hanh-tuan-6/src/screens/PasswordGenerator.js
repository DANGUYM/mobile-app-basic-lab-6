import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  const toggleCheckbox = (setter, value) => {
    setter(!value);
  };

  const generatePassword = () => {
    let characterSet = '';
    if (includeLowerCase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpperCase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) characterSet += '0123456789';
    if (includeSpecialSymbol) characterSet += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!characterSet) {
      Alert.alert('Vui lòng chọn ít nhất một tùy chọn!');
      return;
    }

    const passwordLen = parseInt(passwordLength) || 0;

    if (passwordLen <= 0) {
      Alert.alert('Vui lòng nhập độ dài mật khẩu hợp lệ!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLen; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Generated Password"
          value={password}
          editable={false}
        />
      </View>

      <View style={styles.optionContainer}>
        <Text>Password length</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
        />
      </View>

      <View style={styles.optionContainer}>
        <Text>Include lower case letters</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeLowerCase, includeLowerCase)}
        >
          <View style={includeLowerCase ? styles.checkboxSelected : styles.checkboxUnselected} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text>Include upper case letters</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeUpperCase, includeUpperCase)}
        >
          <View style={includeUpperCase ? styles.checkboxSelected : styles.checkboxUnselected} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text>Include number</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeNumber, includeNumber)}
        >
          <View style={includeNumber ? styles.checkboxSelected : styles.checkboxUnselected} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text>Include special symbol</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeSpecialSymbol, includeSpecialSymbol)}
        >
          <View style={includeSpecialSymbol ? styles.checkboxSelected : styles.checkboxUnselected} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
        <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#202C59',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  passwordInput: {
    backgroundColor: '#0E1635',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    width: 80,
    textAlign: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  checkboxSelected: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
  },
  checkboxUnselected: {
    width: 12,
    height: 12,
  },
  generateButton: {
    backgroundColor: '#3B4FE4',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;

