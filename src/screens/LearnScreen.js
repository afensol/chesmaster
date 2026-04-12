import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

export default function LearnScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Satranç Öğren</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {['Temel Hareketler', 'Açılış Prensipleri', 'Oyun Sonu Taktikleri', 'Şah Mat Kalıpları'].map((lesson, index) => (
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
  header: { fontSize: 28, fontWeight: 'bold', color: '#f57c00', marginBottom: 20 },
  scrollContent: { paddingBottom: 20 },
  lessonCard: { 
    backgroundColor: '#1e1e24', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lessonTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  lessonStatus: { color: '#f57c00', fontWeight: 'bold' },
  backButton: { backgroundColor: '#333', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  backButtonText: { color: '#fff', fontWeight: 'bold' }
});