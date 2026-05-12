import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, StatusBar } from 'react-native';
import database from '../data/database';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      const user = database.loginUser(email, password);

      if (user) {
        navigation.navigate('Home', { user: user });
      } else {
        Alert.alert("Hata", "Email veya şifre hatalı!");
      }
    } catch (error) {
      Alert.alert("Hata", "Giriş yapılırken bir hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/crown.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>ChessMaster</Text>
        <Text style={styles.subtitle}>Giriş Yap</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="ornek@email.com" 
          placeholderTextColor="#555" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none"
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Hesap Oluştur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1c', paddingHorizontal: 30, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 40 },
  logoContainer: { backgroundColor: '#f57c00', padding: 15, borderRadius: 50, marginBottom: 15 },
  logo: { width: 50, height: 50, tintColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', letterSpacing: 1 },
  subtitle: { fontSize: 16, color: '#888', marginTop: 5 },
  form: { width: '100%' },
  label: { color: '#fff', marginBottom: 8, fontSize: 14, fontWeight: '600' },
  input: { backgroundColor: '#252a34', color: '#fff', borderRadius: 12, padding: 15, marginBottom: 20, borderWidth: 1, borderColor: '#333' },
  loginButton: { backgroundColor: '#e67e00', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  loginText: { color: '#000', fontSize: 18, fontWeight: 'bold' },
  registerButton: { backgroundColor: '#252a34', padding: 16, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  registerText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});