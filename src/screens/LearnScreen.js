import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LearnScreen({ navigation }) {

  const chessWebUrl = 'https://lichess.org/analysis/standard?theme=maple&piece=cburnett';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Satranç Öğren</Text>
      
      {/* SATRANÇ TAHTASI ENTEGRASYONU */}
      <View style={styles.boardWrapper}>
        <WebView 
          source={{ uri: chessWebUrl }} 
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Ders Listesi</Text>
        {['Temel Hareketler', 'Açılış Prensipleri', 'Oyun Sonu Taktikleri'].map((lesson, index) => (
          <TouchableOpacity key={index} style={styles.lessonCard}>
            <Text style={styles.lessonTitle}>{lesson}</Text>
            <Text style={styles.lessonStatus}>Başla →</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Ana Menüye Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#f57c00', marginBottom: 10 },
  boardWrapper: {
    height: 400, 
    backgroundColor: '#1e1e24',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f57c00'
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  sectionTitle: { color: '#888', fontSize: 16, marginBottom: 10, fontWeight: 'bold' },
  scrollContent: { paddingBottom: 20 },
  lessonCard: { 
    backgroundColor: '#1e1e24', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lessonTitle: { color: '#fff', fontSize: 16, fontWeight: '600' },
  lessonStatus: { color: '#f57c00', fontWeight: 'bold' },
  backButton: { backgroundColor: '#333', padding: 15, borderRadius: 10, alignItems: 'center' },
  backButtonText: { color: '#fff', fontWeight: 'bold' }
});