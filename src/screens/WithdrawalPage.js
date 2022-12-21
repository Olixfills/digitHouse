import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SafeView from '../components/SafeView';
import CustomFontText from '../components/CustomFontText';
import CustomBox from '../components/CustomBox';
import CustomTextInput from '../components/CustomTextInput';
import FlatButton from '../components/FlatButton';
import AddIcon from '../assets/AddIcon';
import AccountList from '../components/AccountList';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import Header from '../components/Header';

const accountList = [
  {
    name: 'Ajalla Ugo',
    number: 9102356712,
    bank: 'Access Bank',
    id: 1,
  },
  {
    name: 'Ajalla Ugo',
    number: 9102356712,
    bank: 'Access Bank',
    id: 2,
  },
];

const WithdrawalPage = ({navigation}) => {
  const [active, setActive] = useState(1);
  const [accounts, setAccounts] = useState(accountList);
  const [inp, setInp] = useState(0);
  const fee = 25;
  const tots = parseInt(inp) + parseInt(fee);
  const bottomSheetRef = useRef(null);
  const [openInd, setOpenInd] = useState(-1);
  const snapPoints = useMemo(() => ['40%', '70%', '100%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );
  const onClose = () => {
    setOpenInd(-1);
  };

  return (
    <SafeView>
      <Header />
      <CustomBox
        pl={32}
        pr={22}
        flexRow
        justify="space-between"
        align="center"
        mv={29}>
        <CustomFontText
          text="Your Balance"
          color="#4F4E52"
          size={18}
          weight="500"
        />
        <CustomBox flexRow>
          <CustomFontText
            text="N"
            size={13}
            style={{marginTop: 5}}
            color="#3F3D56"
          />
          <CustomFontText text="120,000" size={32} color="#3F3D56" />
        </CustomBox>
      </CustomBox>

      <CustomBox ph={26}>
        <CustomFontText
          text="Withdraw"
          color="#1293A9"
          size={28}
          weight="700"
        />
        <CustomFontText text="Amount" color="#767E80" size={18} weight="500" />
        <CustomTextInput
          borderColor="#1293A9"
          containerStyles={{
            backgroundColor: '#E5F4F3',
            marginTop: 4,
            justifyContent: 'center',
          }}
          inputStyle={{
            fontSize: 18,
            textAlign: 'center',
            color: '#3F3D56',
          }}
          value={inp}
          type="number-pad"
          onChangeText={inp => setInp(inp)}
          placeholder="Withrawal Amount"
        />

        <CustomBox flexRow justify="space-between" align="center">
          <CustomFontText
            text="Select Bank"
            size={14}
            color="#767E80"
            weight="500"
          />
          <FlatButton
            buttonStyle={{width: 135, height: 33}}
            buttonColor="transparent"
            titleColor="#767E80"
            title="Add New Bank"
            icon={<AddIcon />}
          />
        </CustomBox>
        <AccountList data={accounts} active={active} setActive={setActive} />
        <FlatButton
          buttonColor="#1293A9"
          title="Withdraw"
          buttonStyle={{marginBottom: 4}}
          onPress={() => setOpenInd(1)}
        />
        <FlatButton
          buttonColor="#CCCCCC"
          title="Cancel"
          buttonStyle={{marginTop: 5}}
          onPress={() => navigation.goBack()}
        />
      </CustomBox>
      <BottomSheet
        backgroundStyle={{borderRadius: 26}}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={openInd}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onClose={onClose}>
        <CustomBox align="center" ph={24}>
          <CustomFontText
            text="Transaction Summary"
            color="#4F4E52"
            size={20}
            weight="700"
          />
          <CustomFontText
            text="Please review the details of your transaction"
            color="#65656A"
            size={12}
            weight="500"
          />
          <CustomBox
            mt={42}
            justify="space-between"
            flexRow
            w="100%"
            pv={10}
            style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
            <CustomFontText
              color="#616165"
              size={14}
              weight="500"
              text="Transaction Type"
            />
            <CustomFontText
              color="#616165"
              size={16}
              weight="500"
              text="Wallet Withdrawal"
            />
          </CustomBox>
          <CustomBox
            mt={10}
            justify="space-between"
            flexRow
            w="100%"
            pv={10}
            style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
            <CustomFontText
              color="#616165"
              size={14}
              weight="500"
              text="Amount"
            />
            <CustomFontText color="#616165" size={16} weight="500" text={inp} />
          </CustomBox>
          <CustomBox
            mt={10}
            justify="space-between"
            flexRow
            w="100%"
            pv={10}
            style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
            <CustomFontText color="#616165" size={14} weight="500" text="Fee" />
            <CustomFontText color="#616165" size={16} weight="500" text={fee} />
          </CustomBox>
          <CustomBox
            mt={10}
            justify="space-between"
            flexRow
            w="100%"
            pv={10}
            style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}>
            <CustomFontText color="#616165" size={14} weight="500" text="" />
            <CustomFontText
              color="#616165"
              size={16}
              weight="500"
              text={tots}
            />
          </CustomBox>
          <FlatButton
            buttonColor="#1293A9"
            title="Continue"
            buttonStyle={{marginBottom: 4}}
          />
          <FlatButton
            buttonColor="#CCCCCC"
            title="Cancel"
            buttonStyle={{marginTop: 5}}
            onPress={() => navigation.goBack()}
          />
        </CustomBox>
      </BottomSheet>
    </SafeView>
  );
};

export default WithdrawalPage;

const styles = StyleSheet.create({});
