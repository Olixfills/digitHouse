/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text} from 'react-native';

const ReadMore = ({onPress}) => {
  const [dispText, setDispText] = React.useState(false);

  return (
    <Text
      style={{color: '#2E3192'}}
      onPress={() => {
        onPress();
        setDispText(txt => !txt);
      }}>
      {dispText ? 'Show Less' : 'Read More'}
    </Text>
  );
};

export default function CustomFontText({
  text,
  style = {},
  numberOfLines,
  onPress,
  showMore,
  showMoreFunc,
  color,
  size,
  weight,
}) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          fontFamily: 'Roboto',
          color: color || '#fff',
          fontSize: size,
          fontWeight: weight,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {`${text}`}
      {showMore && <ReadMore onPress={showMoreFunc} />}
    </Text>
  );
}
