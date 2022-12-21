import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CustomFontText from './CustomFontText';

const CustomTextInput = ({
  label,
  inputStyle,
  labelStyle,
  placeholder,
  value,
  onChangeText,
  password,
  type,
  errorText,
  borderColor = 'transparent',
  containerStyles,
  leftIcon,
  rightText,
}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.mainContainer}>
      {label && (
        <CustomFontText style={{...styles.label, ...labelStyle}} text={label} />
      )}

      <View
        style={{
          ...styles.inputContainer,
          borderColor: errorText ? '#bf0a30' : borderColor,
          ...containerStyles,
        }}>
        {leftIcon && leftIcon}
        <TextInput
          style={{...styles.input, ...inputStyle}}
          placeholder={placeholder}
          value={value}
          keyboardType={type || 'default'}
          onChangeText={onChangeText}
          secureTextEntry={password ? show : false}
        />
        {rightText && (
          <CustomFontText text={rightText} style={styles.rightText} />
        )}
      </View>
      {errorText && <CustomFontText text={errorText} style={styles.error} />}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 10,
    color: '#787373',
    width: '95%',
    marginLeft: 5,
  },
  label: {
    color: '#787373',
    marginBottom: 5,
    fontWeight: '400',
    fontSize: 10,
  },
  inputContainer: {
    height: 44,
    borderWidth: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4,
  },
  error: {
    color: '#bf0a30',
    textAlign: 'justify',
  },
  mainContainer: {
    marginBottom: 14,
  },
  rightText: {
    color: '#1293A9',
    fontWeight: '500',
    fontSize: 12,
    position: 'absolute',
    right: 8,
  },
});
