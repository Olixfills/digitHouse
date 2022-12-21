import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomBox from './CustomBox';
import CheckedRadio from '../assets/CheckedRadio';
import Radio from '../assets/Radio';
import CustomFontText from './CustomFontText';

const AccountCard = ({name, number, bank, active, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{}} activeOpacity={0.7}>
      <CustomBox
        w={330}
        pt={24}
        pb={19}
        ph={14}
        bg={active ? '#E5F4F3' : '#F2F2F2'}
        mv={9}
        radius={7}
        flexRow
        align="center"
        justify="space-between">
        <CustomBox flexRow align="center">
          <CustomBox>{active ? <CheckedRadio /> : <Radio />}</CustomBox>
          <CustomBox ml={12}>
            <CustomFontText
              text={name}
              color="#616165"
              size={18}
              weight="500"
            />
            <CustomFontText
              text={number}
              size={14}
              color="#656262"
              weight="400"
            />
          </CustomBox>
        </CustomBox>

        <CustomBox>
          <CustomFontText text="Bank" color="#616165" size={12} weight="500" />
          <CustomFontText text={bank} size={12} color="#656262" weight="400" />
        </CustomBox>
      </CustomBox>
    </TouchableOpacity>
  );
};

export default AccountCard;

const styles = StyleSheet.create({});
