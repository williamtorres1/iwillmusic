import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import { start, pause } from './utils/player';

const App: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  function playOrPause() {
    if (!playing) {
      setPlaying(true);
      return start();
    }
    setPlaying(false);
    return pause();
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#191414" barStyle="light-content" />
      <TouchableOpacity style={styles.button} onPress={playOrPause}>
        <Text style={styles.buttonText}>Play/Pause</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#191414',
  },
  button: {
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#ff880d',
    fontWeight: 'bold',
  },
});

export default App;
