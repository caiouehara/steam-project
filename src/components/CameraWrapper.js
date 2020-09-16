import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraWrapper() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      console.log("Camera Requested")
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.touchArea}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.flipButton}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  camera: {
    flex: 1,
  },
  touchArea: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
  },
  flipButton: { 
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'
  }
});
