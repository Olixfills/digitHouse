import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SafeView from '../components/SafeView';
import CustomBox from '../components/CustomBox';
import CardBg from '../assets/CardBg';
import CustomFontText from '../components/CustomFontText';
import WalletIcon from '../assets/WalletIcon';
import FlatButton from '../components/FlatButton';
import AddIcon from '../assets/AddIcon';
import MoneyIcon from '../assets/MoneyIcon';
import BottomSheet from '@gorhom/bottom-sheet';
import Header from '../components/Header';
import TransList from '../components/TransList';

const transactions = [
  {
    name: 'Account Top Up',
    date: '24 Oct. 2020 8:45pm',
    amt: '50,000',
    id: 1,
    type: 'credit',
  },
  {
    name: 'Rent Payment',
    date: '24 Oct. 2020 8:45pm',
    amt: '-50,000',
    id: 2,
    type: 'debit',
  },
  {
    name: 'Account Top Up',
    date: '24 Oct. 2020 8:45pm',
    amt: '50,000',
    id: 3,
    type: 'credit',
  },
];
const WalletPage = ({navigation}) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['51%', '100%'], []);

  return (
    <SafeView>
      <Header />
      <CustomBox justify="center" align="center">
        <CustomBox
          radius={20}
          bg="#1293A9"
          w={317}
          h={159}
          p={17}
          pb={22}
          mb={20}>
          <CardBg style={styles.cardBg} />
          <CustomBox flexRow justify="space-between" align="center" m={0}>
            <CustomBox flexRow>
              <CustomFontText text="N" size={13} style={{marginTop: 5}} />
              <CustomBox pt={0}>
                <CustomFontText text="120,000" size={32} />
                <CustomFontText text="Balance" size={13} />
              </CustomBox>
            </CustomBox>
            <WalletIcon />
          </CustomBox>
          <CustomBox flexRow justify="space-between" align="center" mt={33}>
            <View>
              <CustomFontText text="Account Number" size={9} />
              <CustomFontText text="9102356712" size={14} />
            </View>
            <View>
              <CustomFontText text="Bank" size={9} />
              <CustomFontText text="Access Bank" size={14} />
            </View>
          </CustomBox>
        </CustomBox>
      </CustomBox>
      <CustomBox flexRow justify="space-between" ph={24} align="center">
        <FlatButton
          buttonColor="#E5F4F3"
          buttonStyle={{width: 135, height: 43}}
          title="Top Up Wallet"
          titleColor="#656262"
          icon={<AddIcon />}
          textStyle={styles.buttonText}
        />
        <FlatButton
          buttonColor="#E5F4F3"
          buttonStyle={{width: 140, height: 43}}
          title="Withdraw Funds"
          titleColor="#656262"
          icon={<MoneyIcon />}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate('Withdraw')}
        />
      </CustomBox>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        backgroundStyle={{backgroundColor: '#f2f2f2', borderRadius: 26}}>
        <CustomBox style={{flex: 1}} ph={23}>
          <CustomBox flexRow justify="space-between" align="center">
            <CustomFontText
              text="Last Transactions"
              color="#676464"
              size={16}
              weight="500"
            />
            <FlatButton
              buttonColor="transparent"
              titleColor="#1293A9"
              buttonStyle={{height: 25}}
              title="See All"
              textStyle={{fontSize: 12}}
            />
          </CustomBox>
          <TransList data={transactions} />
        </CustomBox>
      </BottomSheet>
    </SafeView>
  );
};

export default WalletPage;

const styles = StyleSheet.create({
  cardBg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
