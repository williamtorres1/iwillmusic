import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  PermissionsAndroid,
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

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    )
      .then(response => {
        console.log(response);
      })
      .catch(err => console.error(err));

    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ).then(response => console.log(response));
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#191414" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={playOrPause}>
          <Text style={styles.buttonText}>Play/Pause</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
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
