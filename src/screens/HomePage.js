/* eslint-disable react-hooks/exhaustive-deps */
import {Dimensions, StyleSheet, Platform, View} from 'react-native';
import React, {useEffect} from 'react';
import HomeImage from '../assets/HomeImage';
import Logo from '../assets/Logo';

const HomePage = ({navigation}) => {
  const windWidth = Dimensions.get('window').width;
  const windHeight = Dimensions.get('window').height;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.navigate('AuthStack', {screen: 'Login'});
    }, 2000);
    () => timeOut();
  }, []);
  return (
    <View style={styles.container}>
      <HomeImage style={styles.bg} width={windWidth} height={windHeight} />
      <Logo style={styles.logo} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5F4F3',
    flex: 1,
  },
  bg: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 48 : 99,
    right: 0,
    bottom: 0,
  },
  logo: {
    position: 'absolute',
    right: 120,
    bottom: Platform.OS === 'android' ? 135 : 145,
  },
});
