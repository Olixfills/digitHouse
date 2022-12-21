import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from './Header';

export default function SafeView({
  children,
  bodyColor = '#ffffff',
  safeAreaColor = '#fff',
  style,
  isRootPage,
}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: safeAreaColor, ...style}}>
      {/* {!isRootPage && <Header />} */}
      <View
        style={{flex: 1, backgroundColor: bodyColor}}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}>
        {children}
      </View>
    </SafeAreaView>
  );
}
