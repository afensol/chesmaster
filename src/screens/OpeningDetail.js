import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { Chess } from 'chess.js';

const OpeningDetail = ({ route }) => {
  const { opening } = route.params;
  const [game, setGame] = useState(new Chess());
  const [currentMove, setCurrentMove] = useState(0);
  const [boardKey, setBoardKey] = useState(0); // Chessboard'u yeniden render etmek için

  const handleUserMove = () => {
    const gameCopy = new Chess(game.fen());

    const nextMoveIndex = currentMove + 1;
    setCurrentMove(nextMoveIndex);

    if (nextMoveIndex < opening.moves.length && gameCopy.turn() === 'b') {
      const blackMove = opening.moves[nextMoveIndex];
      const result = gameCopy.move(blackMove);

      if (result) {
        setGame(gameCopy);
        setCurrentMove(nextMoveIndex + 1);
      }
    }
  };

  const handleReset = () => {
    const newGame = new Chess(); 
    setGame(newGame);            
    setCurrentMove(0);           
    setBoardKey(boardKey + 1);   // Chessboard'u yeniden render et
  };

  const formattedMoves = opening.moves.slice(0, currentMove).map((m, i) => {
    return i % 2 === 0 ? `\n${Math.floor(i/2)+1}. ${m}` : ` ${m}`;
  }).join('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{opening.name}</Text>
      
      <View style={styles.boardContainer}>
        <Chessboard 
          key={boardKey}            // reset sırasında yeniden render
          fen={game.fen()} 
          boardSize={340} 
          onMove={() => handleUserMove()} 
        />
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.moveCount}>Hamle: {currentMove} / {opening.moves.length}</Text>
        <Text style={styles.movesList}>{formattedMoves}</Text>
        <Text style={styles.nextMoveText}>
          {currentMove < opening.moves.length 
            ? `Sıradaki hamle: ${opening.moves[currentMove]}` 
            : 'Açılış tamamlandı 🎉'}
        </Text>

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
  nextMoveText: { color: '#FFD700', fontSize: 16, marginTop: 10 },
  resetBtn: { marginTop: 15 },
  resetText: { color: '#888', textDecorationLine: 'underline' }
});

export default OpeningDetail;
