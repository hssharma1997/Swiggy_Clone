import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MainHeader from '../Components/MainHeader';
import HomeOptions from '../Components/HomeOptions';
import HomeBottomText from '../Components/HomeBottomText';
import HomeTopText from '../Components/HomeTopText';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#ffffff', '#f2f2f2', '#e6e6e6']}
      style={styles.screenContainer}>
      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeTopText/>
        <HomeOptions />
        <HomeBottomText/>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
