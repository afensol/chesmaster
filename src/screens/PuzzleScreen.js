import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function PuzzleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.puzzleBox}>
        <Text style={styles.emoji}>🧩</Text>
        <Text style={styles.title}>Günün Bulmacası</Text>
        <Text style={styles.desc}>Sıra Beyazda. 3 Hamlede Mat!</Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Bulmacayı Çöz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  puzzleBox: { backgroundColor: '#1e1e24', padding: 40, borderRadius: 20, alignItems: 'center', width: '100%', marginBottom: 30 },
  emoji: { fontSize: 50, marginBottom: 10 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  desc: { color: '#aaa', fontSize: 16, marginTop: 10 },
  actionButton: { backgroundColor: '#f57c00', padding: 18, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 10 },
  actionText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backButton: { padding: 10 },
  backButtonText: { color: '#888', fontSize: 16 }
});