import React, { useRef, useCallback } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { Chess } from 'chess.js';

const ChessBoardScreen = () => {

  const chessRef = useRef(new Chess());


  const onMove = useCallback(({ move }) => {
    try {
      const result = chessRef.current.move(move);
      if (result) {
        console.log('Yapılan Hamle:', result.san);
        console.log('Oyun Durumu:', chessRef.current.fen());
      }
    } catch (error) {

      console.log('Geçersiz Hamle denemesi');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>6. Hafta: Satranç Tahtası</Text>
      </View>
      
      <View style={styles.boardContainer}>
        <Chessboard 
          onMove={onMove} 
          gestureEnabled={true} // Taşların kaydırılabilmesini sağlar
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          Hamle sırası: {chessRef.current.turn() === 'w' ? 'Beyaz' : 'Siyah'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  boardContainer: {
    width: '100%',
    aspectRatio: 1, // Tahtayı kare yapar
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  infoSection: {
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ChessBoardScreen;