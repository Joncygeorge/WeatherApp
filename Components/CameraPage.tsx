// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import { Camera, CameraType } from 'expo-camera';

// const CameraPage = () => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [cameraRef, setCameraRef] = useState<Camera | null>(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePhoto = async () => {
//     if (cameraRef) {
//       const photo = await cameraRef.takePictureAsync();
//       Alert.alert('Photo Taken!', `Photo saved to: ${photo.uri}`);
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text style={styles.permissionText}>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={CameraType.back}
//         ref={(ref) => setCameraRef(ref)}
//       >
//         <View style={styles.buttonContainer}>
//           <Button title="Take Photo" onPress={takePhoto} />
//         </View>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   permissionText: {
//     flex: 1,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 18,
//   },
// });

// export default CameraPage;
