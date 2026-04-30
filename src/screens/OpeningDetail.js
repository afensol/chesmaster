import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { Chess } from 'chess.js';

const OpeningDetail = ({ route }) => {
  const { opening } = route.params;
  const [game, setGame] = useState(new Chess());
  const [currentMove, setCurrentMove] = useState(0);

  const handleNext = () => {
    if (currentMove < opening.moves.length) {
      const gameCopy = new Chess(game.fen());
      gameCopy.move(opening.moves[currentMove]);
      setGame(gameCopy);
      setCurrentMove(currentMove + 1);
    }
  };

  const handleReset = () => {
    setGame(new Chess());
    setCurrentMove(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{opening.name}</Text>
      
      <View style={styles.boardContainer}>
        <Chessboard fen={game.fen()} boardSize={340} />
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.moveCount}>Hamle: {currentMove} / {opening.moves.length}</Text>
        <Text style={styles.movesList}>{opening.moves.slice(0, currentMove).join(' ')}</Text>
        
        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.btnText}>Sonraki Hamle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetText}>Sıfırla</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center' },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  boardContainer: { padding: 10, backgroundColor: '#1e1e24', borderRadius: 10 },
  infoArea: { width: '90%', marginTop: 30, alignItems: 'center' },
  moveCount: { color: '#888', fontSize: 16 },
  movesList: { color: '#8A2BE2', fontSize: 18, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  nextBtn: { backgroundColor: '#8A2BE2', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  resetBtn: { marginTop: 15 },
  resetText: { color: '#888', textDecorationLine: 'underline' }
});

export default OpeningDetail;