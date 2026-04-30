import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { OPENINGS } from '../data/openings'; // ../ kullanarak bir üst klasöre çıktık

const OpeningList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('OpeningDetail', { opening: item })}
    >
      <View style={styles.cardInfo}>
        <Text style={styles.openingName}>{item.name} ⭐</Text>
        <Text style={styles.movesPreview}>{item.moves.slice(0, 4).join(' ')}...</Text>
        <View style={[styles.badge, { backgroundColor: item.levelColor + '22' }]}>
          <Text style={[styles.badgeText, { color: item.levelColor }]}>{item.difficulty}</Text>
        </View>
      </View>
      <View style={styles.playButtonBg}>
        <Text style={styles.playIcon}>▶</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBanner}>
        <Text style={styles.bannerTitle}>Açılış Repertuarı</Text>
        <Text style={styles.bannerSub}>Popüler açılışları öğren ve stratejilerini keşfet.</Text>
      </View>
      <FlatList
        data={OPENINGS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  headerBanner: { backgroundColor: '#8A2BE2', padding: 20, margin: 15, borderRadius: 15 },
  bannerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  bannerSub: { color: '#e0e0e0', fontSize: 13, marginTop: 5 },
  listPadding: { paddingHorizontal: 15, paddingBottom: 20 },
  card: {
    backgroundColor: '#1e1e24',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3
  },
  cardInfo: { flex: 1 },
  openingName: { color: 'white', fontSize: 17, fontWeight: 'bold' },
  movesPreview: { color: '#888', fontSize: 13, marginVertical: 4 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start', marginTop: 5 },
  badgeText: { fontSize: 11, fontWeight: 'bold' },
  playButtonBg: { backgroundColor: '#8A2BE2', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  playIcon: { color: 'white', fontSize: 18, marginLeft: 3 }
});

export default OpeningList;