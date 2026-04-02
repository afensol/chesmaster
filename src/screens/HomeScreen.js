import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo ve Başlık */}
      <Image source={require('../../assets/crown.png')} style={styles.logo} />
      <Text style={styles.title}>ChessMaster</Text>
      <Text style={styles.subtitle}>Hoş Geldin!</Text>
      <Text style={styles.subtitleSmall}>Bugün ne öğrenmek istersin?</Text>

      {/* Menü Butonları */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Satranç Öğren</Text>
        <Text style={styles.buttonSub}>Satranç dersleri ve taktikler</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Açılış Çalış</Text>
        <Text style={styles.buttonSub}>Açılış repertuarını geliştir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Günlük Puzzle</Text>
        <Text style={styles.buttonSub}>Her gün yeni bulmacalar çöz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profil</Text>
        <Text style={styles.buttonSub}>İstatistiklerini gör</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', padding: 20 },
  logo: { width: 80, height: 80, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#f57c00' },
  subtitle: { fontSize: 20, color: '#fff', marginTop: 10 },
  subtitleSmall: { fontSize: 14, color: '#ccc', marginBottom: 20 },
  button: { backgroundColor: '#1e88e5', padding: 15, borderRadius: 8, width: '90%', marginBottom: 15 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  buttonSub: { color: '#ddd', fontSize: 12 }
});
