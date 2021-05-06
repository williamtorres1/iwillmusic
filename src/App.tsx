import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import RNFS from 'react-native-fs';

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
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ])
      .then(response => console.log(response))
      .catch(err => console.error(err));

    console.log(RNFS.DownloadDirectoryPath);

    RNFS.readFile('/storage/emulated/0/Download/artwork.jpg', 'UTF-8')
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
    width: '35%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f9f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ff880d',
    fontWeight: 'bold',
  },
});

export default App;
