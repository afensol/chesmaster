import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      

      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <Text style={styles.userName}>Satranç Ustası</Text>
        <Text style={styles.userEmail}>kullanici@chessmaster.com</Text>
      </View>


      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Puzzle</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1500</Text>
          <Text style={styles.statLabel}>Elo</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 60 },
  profileHeader: { alignItems: 'center', marginBottom: 40 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#f57c00', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 40, color: '#fff', fontWeight: 'bold' },
  userName: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  userEmail: { fontSize: 14, color: '#888', marginTop: 5 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 40 },
  statBox: { backgroundColor: '#1e1e24', padding: 20, borderRadius: 15, width: '40%', alignItems: 'center' },
  statValue: { fontSize: 22, fontWeight: 'bold', color: '#f57c00' },
  statLabel: { fontSize: 12, color: '#aaa', marginTop: 5 },
  logoutButton: { borderWidth: 1, borderColor: '#ff4444', padding: 15, borderRadius: 12, alignItems: 'center' },
  logoutText: { color: '#ff4444', fontWeight: 'bold' }
});