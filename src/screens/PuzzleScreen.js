import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { Chess } from 'chess.js';

const { width } = Dimensions.get('window');

const PUZZLE_DATA = [
  {
    id: 1,
    instruction: "Beyaz Oynar: Arka Sıra Matı!",
    fen: '6k1/p4ppp/4p3/8/8/7P/Pr3PP1/3R2K1 w - - 0 1', 
    correctMove: { from: 'd1', to: 'd8' }
  },
  {
    id: 2,
    instruction: "Beyaz Oynar: Boğmaca Matı!",
    fen: '3r2rk/p5pp/1p4n1/3p2N1/2pP4/2P1R3/qPBQ1PPP/6K1 w - - 0 1', 
    correctMove: { from: 'g5', to: 'f7' }
  },
  {
    id: 3,
    instruction: "Beyaz Oynar: Vezirle Mat!",
    fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1',
    correctMove: { from: 'f3', to: 'f7' }
  }
];

const ChessApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPuzzle = PUZZLE_DATA[currentIndex];
  
  const [game, setGame] = useState(new Chess(currentPuzzle.fen));
  const [message, setMessage] = useState(currentPuzzle.instruction);
  const [boardKey, setBoardKey] = useState(0);

  const loadNextPuzzle = useCallback(() => {
    const nextIdx = (currentIndex + 1) % PUZZLE_DATA.length;
    const nextPuzzle = PUZZLE_DATA[nextIdx];
    
    setCurrentIndex(nextIdx);
    setGame(new Chess(nextPuzzle.fen));
    setMessage(nextPuzzle.instruction);
    setBoardKey(prev => prev + 1);
  }, [currentIndex]);

  const onMove = ({ move }) => {
    if (move.from === currentPuzzle.correctMove.from && move.to === currentPuzzle.correctMove.to) {
      const gameCopy = new Chess(game.fen());
      gameCopy.move({ from: move.from, to: move.to, promotion: 'q' });
      
      setGame(gameCopy);
      setMessage("✅ HARİKA! Puzzle Çözüldü.");

      setTimeout(() => {
        loadNextPuzzle();
      }, 1500);
      
      return true;
    } else {
      setMessage("❌ Yanlış hamle, tekrar dene!");
      setTimeout(() => {
        setBoardKey(prev => prev + 1);
      }, 500);
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>SATRANÇ BULMACA</Text>
        <View style={styles.emptySpace} />
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.instructionText}>{message}</Text>
      </View>

      <View style={styles.boardWrapper}>
        <Chessboard 
          key={`board-${boardKey}`} 
          fen={game.fen()} 
          onMove={onMove}
          boardSize={width - 30}
        />
      </View>

      <View style={styles.footerSpacer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c262e',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '300',
  },
  title: {
    color: '#808e9b',
    fontSize: 14,
    letterSpacing: 3,
    fontWeight: '700',
  },
  emptySpace: {
    width: 40,
  },
  messageContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  instructionText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  boardWrapper: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 4,
    elevation: 15,
  },
  footerSpacer: {
    flex: 1,
  }
});

export default ChessApp;