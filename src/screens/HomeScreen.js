import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>ChessMaster</Text>
          <Text style={styles.welcomeText}>Hoş Geldin! 👋</Text>
          <Text style={styles.subtitleSmall}>Bugün ne öğrenmek istersin?</Text>
        </View>
        <View style={styles.logoCircle}>
          <Image source={require('../../assets/crown.png')} style={styles.logo} resizeMode="contain" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: '#f57c00' }]}
          onPress={() => navigation.navigate('Learn')}
        >
          <View style={styles.cardInfo}>
            <Text style={styles.buttonText}>Satranç Öğren</Text>
            <Text style={styles.buttonSub}>Satranç dersleri ve temel taktikler</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.card, { borderLeftColor: '#8A2BE2' }]} 
          onPress={() => navigation.navigate('OpeningList')} 
        >
          <View style={styles.cardInfo}>
            <Text style={styles.buttonText}>Açılış Çalış</Text>
            <Text style={styles.buttonSub}>Açılış repertuarını geliştir</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: '#43a047' }]}
          onPress={() => navigation.navigate('Puzzles')} 
        >
          <View style={styles.cardInfo}>
            <Text style={styles.buttonText}>Günlük Puzzle</Text>
            <Text style={styles.buttonSub}>Her gün yeni bulmacalar çöz</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { borderLeftColor: '#d81b60' }]}
          onPress={() => navigation.navigate('Profile')} 
        >
          <View style={styles.cardInfo}>
            <Text style={styles.buttonText}>Profil</Text>
            <Text style={styles.buttonSub}>İstatistiklerini ve gelişimini gör</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    paddingTop: 60,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#252a34'
  },
  logoCircle: {
    backgroundColor: '#f57c00',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 30,
    height: 30,
    tintColor: '#fff' 
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#f57c00' },
  welcomeText: { fontSize: 22, color: '#fff', fontWeight: '600', marginTop: 5 },
  subtitleSmall: { fontSize: 14, color: '#888', marginTop: 4 },
  scrollContent: {
    paddingBottom: 30
  },
  card: {
    backgroundColor: '#1e1e24', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardInfo: {
    flex: 1
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  buttonSub: { color: '#aaa', fontSize: 13, marginTop: 4 },
  arrow: { color: '#444', fontSize: 22, fontWeight: 'bold' }
});