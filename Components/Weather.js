import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import * as Haptics from 'expo-haptics';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      fetchWeather(loc.coords.latitude, loc.coords.longitude);
    })();
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      setErrorMsg('Failed to fetch weather data');
    }
  };

  if (!location || !weather) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.temp}>{weather.main.temp} °C</Text>
      <Text style={styles.desc}>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 36,
  },
  desc: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default Weather;
