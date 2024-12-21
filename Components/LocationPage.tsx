import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Location from 'expo-location';

const LocationPage = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const fetchLocation = async () => {
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      Alert.alert('Location Updated', 'Your location has been refreshed!');
    } catch (error) {
      setErrorMsg('Error fetching location');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Current Location:</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <Text style={styles.locationText}>
          Latitude: {location.coords.latitude}
          {'\n'}
          Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text style={styles.loadingText}>Fetching location...</Text>
      )}
      <Button title="Refresh Location" onPress={fetchLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LocationPage;
