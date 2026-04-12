import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      alert('Lütfen email ve şifre girin');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Logo ve Başlık */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/crown.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>ChessMaster</Text>
        <Text style={styles.subtitle}>Satranç eğitim uygulaması</Text>
      </View>

      {/* Form Alanı */}
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ornek@email.com"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Şifre</Text>
        <TextInput
          style={styles.input}
          placeholder="........"
          placeholderTextColor="#555"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Giriş Butonu (Turuncu) */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>

        {/* Kayıt Butonu (Koyu Lacivert/Gri) */}
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1c', // Görseldeki koyu arka plan
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    backgroundColor: '#f57c00',
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
    tintColor: '#fff' // Logoyu beyaz yapmak için
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#252a34', // Input iç rengi
    color: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  loginButton: {
    backgroundColor: '#e67e00', // Turuncu buton
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    // Hafif gölge efekti
    elevation: 3,
  },
  loginText: { 
    color: '#000', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  registerButton: { 
    backgroundColor: '#252a34', 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333'
  },
  registerText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  }
});