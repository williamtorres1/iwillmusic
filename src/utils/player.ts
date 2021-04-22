import TrackPlayer from 'react-native-track-player';

const start = async () => {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add({
    id: '1',
    url:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
    title: 'Artist title',
    artist: 'William Shakespeare',
    artwork:
      'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
  });
  await TrackPlayer.play();
};

const pause = async () => {
  await TrackPlayer.pause();
};

export { start, pause };
