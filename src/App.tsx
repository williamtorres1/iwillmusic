 import React from 'react';
 import {
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';

import start from './utils/player'

 const App = () => {
   return (
     <View>
       <TouchableOpacity onPress={start}>
         <Text>Play</Text>
       </TouchableOpacity>
     </View>
   );
 };

 export default App;
