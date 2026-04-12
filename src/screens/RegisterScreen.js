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

      <View style={styles.header}>
        <View style={styles.logoCircle}>
          <Image source={require('../../assets/crown.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>ChessMaster</Text>
        <Text style={styles.subtitle}>Satranç eğitim uygulaması</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ornek@email.com"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Şifre</Text>
        <TextInput
          style={styles.input}
          placeholder="........"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>

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
    backgroundColor: '#121212', // Home ekranıyla uyumlu derin siyah
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoCircle: {
    backgroundColor: '#f57c00', // Turuncu tema rengi
    padding: 15,
    borderRadius: 40,
    marginBottom: 15,
  },
  logo: { width: 50, height: 50, tintColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#aaa', marginTop: 5 },
  inputContainer: { width: '100%' },
  label: { color: '#fff', marginBottom: 8, fontSize: 14, fontWeight: 'bold' },
  input: {
    backgroundColor: '#1e1e24', // Diğer bileşenlerle uyumlu koyu gri
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  loginButton: {
    backgroundColor: '#f57c00', // Ana aksiyon rengi
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12
  },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  registerButton: {
    backgroundColor: '#1e1e24',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333'
  },
  registerText: { color: '#ccc', fontSize: 16 }
});