import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Chessboard from 'react-native-chessboard';
import { Chess } from 'chess.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const COURSE_DATA = [
  {
    id: 'tas_hareketleri',
    category: 'Taşların Hareketi',
    steps: [
      { id: 'p1', title: 'Piyon', desc: 'Piyonlar ilk hamlede 2, sonra 1 kare ileri gider. Taşları çapraz alırlar.', fen: '4k3/8/8/8/8/8/4P3/4K3 w - - 0 1' },
      { id: 'p2', title: 'At', desc: 'Atlar "L" şeklinde hareket eder. Taşların üzerinden atlayabilirler.', fen: '4k3/8/8/8/4N3/8/8/4K3 w - - 0 1' },
      { id: 'p3', title: 'Kale', desc: 'Kale yatay ve dikey olarak istediği kadar gidebilir.', fen: '4k3/8/8/8/4R3/8/8/4K3 w - - 0 1' },
      { id: 'p4', title: 'Fil', desc: 'Filler sadece çapraz karelerde hareket edebilirler.', fen: '4k3/8/8/8/4B3/8/8/4K3 w - - 0 1' },
      { id: 'p5', title: 'Vezir', desc: 'Hem kale hem fil gibi her yöne gidebilir. En güçlü taştır.', fen: '4k3/8/8/8/4Q3/8/8/4K3 w - - 0 1' },
    ]
  },
  {
    id: 'ozel_hamleler',
    category: 'Özel Kurallar',
    steps: [
      { id: 's1', title: 'Rok', desc: 'Şah ve kale yer değiştirir. Şahı korumaya almak için kullanılır.', fen: 'r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1' },
      { id: 's2', title: 'Geçerken Alma', desc: 'Yan yana gelen piyonların özel alma kuralıdır.', fen: 'rnbqkbnr/ppp1p1pp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 1' },
      { id: 's3', title: 'Şah Mat', desc: 'Şahın kaçacak yeri kalmadığında oyun mat ile biter.', fen: 'R5k1/5ppp/8/8/8/8/8/4K3 w - - 0 1' },
    ]
  }
];

export default function LearnScreen({ navigation }) {
  const [currentStep, setCurrentStep] = useState(COURSE_DATA[0].steps[0]);
  

  const chessRef = useRef(new Chess(currentStep.fen));

  const selectStep = (step) => {
    setCurrentStep(step);
    chessRef.current = new Chess(step.fen);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Satranç Akademisi</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>
        

        <View style={styles.boardContainer}>
          <Chessboard 
            key={currentStep.id} 
            fen={currentStep.fen}
            boardSize={320}
            onMove={({ from, to }) => {
              try {
                const move = chessRef.current.move({ from, to, promotion: 'q' });
                if (move) console.log("Hamle Başarılı");
              } catch (e) {
                console.log("Bu hamle kural dışı");
              }
            }}
          />
        </View>


        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>{currentStep.title}</Text>
          <Text style={styles.stepDesc}>{currentStep.desc}</Text>
          <View style={styles.tipBox}>
            <Icon name="gesture-double-tap" size={16} color="#F57C00" />
            <Text style={styles.tipText}>Taşları sürükleyerek kuralı test edebilirsin!</Text>
          </View>
        </View>

        {COURSE_DATA.map((category) => (
          <View key={category.id} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {category.steps.map((step) => (
              <TouchableOpacity 
                key={step.id} 
                style={[styles.stepItem, currentStep.id === step.id && styles.activeStepItem]}
                onPress={() => selectStep(step)}
              >
                <View style={styles.stepLeft}>
                  <View style={[styles.dot, currentStep.id === step.id && styles.activeDot]} />
                  <Text style={[styles.stepItemText, currentStep.id === step.id && styles.activeText]}>
                    {step.title}
                  </Text>
                </View>
                <Icon 
                  name={currentStep.id === step.id ? "play-circle" : "chevron-right"} 
                  size={20} 
                  color={currentStep.id === step.id ? "#F57C00" : "#555"} 
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A1C20' },
  headerRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 50, marginBottom: 15 },
  backBtn: { backgroundColor: '#2C2F36', padding: 8, borderRadius: 12, marginRight: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  scrollPadding: { paddingHorizontal: 20, paddingBottom: 30 },
  boardContainer: { alignItems: 'center', backgroundColor: '#252932', padding: 10, borderRadius: 20, marginBottom: 20 },
  instructionCard: { backgroundColor: '#252932', padding: 20, borderRadius: 20, marginBottom: 25, borderLeftWidth: 5, borderLeftColor: '#F57C00' },
  stepTitle: { color: '#F57C00', fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  stepDesc: { color: '#fff', fontSize: 15, lineHeight: 22, opacity: 0.9 },
  tipBox: { flexDirection: 'row', alignItems: 'center', marginTop: 12, backgroundColor: '#1A1C20', padding: 8, borderRadius: 10 },
  tipText: { color: '#888', fontSize: 12, marginLeft: 8 },
  categorySection: { marginBottom: 20 },
  categoryTitle: { color: '#888', fontSize: 13, fontWeight: 'bold', marginBottom: 10, textTransform: 'uppercase' },
  stepItem: { backgroundColor: '#252932', padding: 15, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  activeStepItem: { backgroundColor: '#2C2F36', borderWidth: 1, borderColor: '#F57C00' },
  stepLeft: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#555', marginRight: 12 },
  activeDot: { backgroundColor: '#F57C00' },
  stepItemText: { color: '#9DA3B0', fontSize: 16, fontWeight: '500' },
  activeText: { color: '#fff' }
});