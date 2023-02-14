import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        contentContainerStyle
        style={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.des}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.des}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.des}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.des}>맑음</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  city: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "black",
    fontSize: 60,
    fontWeight: "500",
  },
  weather: {
    backgroundColor: "skyblue",
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
    color: "white",
  },
  des: {
    fontSize: 60,
    color: "white",
  },
});
