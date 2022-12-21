import {View} from 'react-native';
import React from 'react';

const CustomBox = ({
  children,
  ph,
  pv,
  p,
  pt,
  pb,
  pl,
  pr,
  m,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  h,
  w,
  maxH,
  maxW,
  flexRow,
  justify,
  align,
  fullHeight,
  bg,
  radius,
  style,
}) => {
  return (
    <View
      style={{
        margin: m,
        padding: p,
        marginHorizontal: mh,
        marginVertical: mv,
        paddingHorizontal: ph,
        paddingVertical: pv,
        height: h,
        width: w,
        maxHeight: maxH,
        maxWidth: maxW,
        flexDirection: flexRow ? 'row' : 'column',
        justifyContent: justify,
        alignItems: align,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        backgroundColor: bg,
        borderRadius: radius,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default CustomBox;
