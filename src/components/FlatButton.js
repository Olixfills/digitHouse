import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import CustomFontText from './CustomFontText';

const FlatButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
  activeOpacity,
  icon,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || '#1293A9',
      }}
      onPress={isLoading ? () => {} : onPress}
      activeOpacity={activeOpacity || 0.7}>
      {icon && <View style={{marginRight: 10}}>{icon}</View>}
      {/* Use the customfontText */}
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <CustomFontText
          style={{...styles.title, ...textStyle, color: titleColor || '#fff'}}
          text={title}
        />
      )}
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#2E3192',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
