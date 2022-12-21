import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBox from './CustomBox';
import Credit from '../assets/Credit';
import Debit from '../assets/Debit';
import CustomFontText from './CustomFontText';

const Item = ({name, date, amount, type}) => {
  return (
    <CustomBox flexRow justify="space-between" mv={15}>
      <CustomBox flexRow>
        {type === 'credit' ? <Credit /> : <Debit />}
        <CustomBox ml={5}>
          <CustomFontText text={name} size={15} color="#5F5B5B" weight="500" />
          <CustomFontText text={date} size={10} color="#9B9999" weight="500" />
        </CustomBox>
      </CustomBox>
      <CustomFontText text={amount} color="#5F5B5B" size={15} />
    </CustomBox>
  );
};

const TransList = ({data}) => {
  const renderItem = ({item}) => (
    <Item
      name={item.name}
      date={item.date}
      type={item.type}
      amount={item.amt}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default TransList;

const styles = StyleSheet.create({});
