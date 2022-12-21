import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBox from './CustomBox';
import UserAvatar from 'react-native-user-avatar';
import CustomFontText from './CustomFontText';
import BellIcon from '../assets/BellIcon';

const Header = () => {
  return (
    <CustomBox
      pt={37}
      h={92}
      ph={21}
      mb={16}
      justify="space-between"
      align="center"
      flexRow>
      <CustomBox flexRow justify="space-between" align="center">
        <UserAvatar
          size={49}
          name="Ajalla Ugo"
          src="https://avatars4.githubusercontent.com/u/7225802?v=4"
          style={{borderColor: '#1293A9', borderWidth: 2}}
          bgColor="#1293A9"
        />
        <CustomFontText text="Ajalla Ugo" style={styles.userName} />
      </CustomBox>
      <CustomBox
        h={43}
        w={44}
        justify="center"
        align="center"
        bg="#E5F4F3"
        radius={7}>
        <BellIcon />
      </CustomBox>
    </CustomBox>
  );
};

export default Header;

const styles = StyleSheet.create({
  userName: {
    fontWeight: '500',
    fontSize: 18,
    color: '#616165',
    marginLeft: 4,
  },
});
