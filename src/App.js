import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraWrapper from './CameraWrapper';


export default function App() {
  return (
    <View style={styles.container}>
      <CameraWrapper></CameraWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});