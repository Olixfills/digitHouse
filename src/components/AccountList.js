import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import AccountCard from './AccountCard';

const AccountList = ({data, active, setActive}) => {
  const renderItem = ({item}) => (
    <AccountCard
      name={item.name}
      number={item.number}
      bank={item.bank}
      active={active === item.id}
      onPress={() => setActive(item.id)}
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

export default AccountList;

const styles = StyleSheet.create({});
