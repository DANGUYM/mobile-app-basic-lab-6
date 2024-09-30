import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const VeriifyScreen = ({navigation}) => {
    return  (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/565/565655.png' }} // URL icon khóa
                style={styles.lockIcon}
            />
            <Text style={styles.title}>VERIFY</Text>
            <Text style={styles.description}>
                Provide your account's email for which you want to reset your password
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                />
            </View>
            <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => {
                navigation.navigate('Login');
              }}
            >
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3EFFF', // Màu nền xanh nhạt
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    lockIcon: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
    nextButton: {
        backgroundColor: '#00CFFF',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default VeriifyScreen;