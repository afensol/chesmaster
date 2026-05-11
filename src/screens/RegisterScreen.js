import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && email && password) {
      // Global bir objeye kaydediyoruz (Kütüphane hatası çıkarmaz)
      if (!global.users) global.users = {};
      global.users[email] = { username, email, password };
      
      Alert.alert("Başarılı", "Hesabınız oluşturuldu!", [
        { text: "Tamam", onPress: () => navigation.navigate('Login') }
      ]);
    } else {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.logoCircle}><Image source={require('../../assets/crown.png')} style={styles.logo} /></View>
        <Text style={styles.title}>Kayıt Ol</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Kullanıcı Adı" placeholderTextColor="#666" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Şifre" secureTextEntry placeholderTextColor="#666" value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', paddingHorizontal: 30, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 50 },
  logoCircle: { backgroundColor: '#f57c00', padding: 15, borderRadius: 40, marginBottom: 15 },
  logo: { width: 50, height: 50, tintColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#aaa', marginTop: 5 },
  inputContainer: { width: '100%' },
  label: { color: '#fff', marginBottom: 8, fontSize: 14, fontWeight: 'bold' },
  input: { backgroundColor: '#1e1e24', color: '#fff', borderRadius: 10, padding: 15, marginBottom: 20, borderWidth: 1, borderColor: '#333' },
  loginButton: { backgroundColor: '#f57c00', padding: 16, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});