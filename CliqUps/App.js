import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const _ = require('lodash');



// For React-Native-Catched-Image Documentation
// import {
//   CachedImage,
//   ImageCacheProvider
// } from 'react-native-cached-image';
// ***** Causes App to bug out ******

//Ran npm install react-native-camera --save  

// Ran npm install --save react-native-fetch-blob

//For react-native-fetch-blob Documentation
// import RNFetchBlob from 'react-native-fetch-blob'
// ********* Causes App to bug out ******* 

// Ran npm install react-native-firebase --save

// Ran npm i -g npm and then Ran npm i --save lodash