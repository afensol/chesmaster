import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password.length >= 6) {
      alert('Kayıt başarılı!');
      navigation.navigate('Login');
    } else {
      alert('Lütfen tüm alanları doldurun ve şifre en az 6 karakter olsun.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo ve Başlık */}
      <Image source={require('../../assets/crown.png')} style={styles.logo} />
      <Text style={styles.title}>ChessMaster</Text>
      <Text style={styles.subtitle}>Yeni hesap oluştur</Text>

      {/* İsim Input */}
      <TextInput
        style={styles.input}
        placeholder="İsim"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="ornek@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Şifre Input */}
      <TextInput
        style={styles.input}
        placeholder="Şifre (min. 6 karakter)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Butonlar */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Zaten hesabın var mı? Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 80, height: 80, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15 },
  registerButton: { backgroundColor: '#0d47a1', padding: 12, borderRadius: 8, width: '80%', alignItems: 'center', marginBottom: 10 },
  registerText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  loginButton: { backgroundColor: '#f57c00', padding: 12, borderRadius: 8, width: '80%', alignItems: 'center' },
  loginText: { color: '#fff', fontSize: 14, fontWeight: 'bold' }
});
