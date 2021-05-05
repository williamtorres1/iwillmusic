import TrackPlayer from 'react-native-track-player';

const start = async (): Promise<void> => {
  try {
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
    await TrackPlayer.add({
      id: '2',
      url: 'file:///data/user/Download/artwork.jpg',
      title: `I don't know`,
      artist: 'A great artist',
      artwork: `file:///storage/sdcard0/Download/artwork.jpg`,
    });

    await TrackPlayer.play();
  } catch (err) {
    console.error(err);
  }
};

const pause = async (): Promise<void> => {
  await TrackPlayer.pause();
};

export { start, pause };
