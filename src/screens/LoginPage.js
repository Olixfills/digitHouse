import {
  BackHandler,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BorderImage from '../assets/BorderImage';
import HouseImg from '../assets/HouseImg';
import SafeView from '../components/SafeView';
import CustomBox from '../components/CustomBox';
import CustomFontText from '../components/CustomFontText';
import CustomTextInput from '../components/CustomTextInput';
import PeopleIcon from '../assets/PeopleIcon';
import KeyIcon from '../assets/KeyIcon';
import FlatButton from '../components/FlatButton';

const LoginPage = ({navigation}) => {
  const windWidth = Dimensions.get('window').width;
  const windHeight = Dimensions.get('window').height;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const onLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('AppStack', {screen: 'Wallet'});
    }, 1000);
  };

  return (
    <SafeView isRootPage style={styles.container} bodyColor="#E5F4F3">
      <BorderImage
        style={styles.bg}
        height={windHeight}
        width={windWidth - 18}
      />
      <CustomBox
        justify="center"
        align="center"
        ph={47}
        mt={Platform.OS === 'ios' ? 180 : 150}>
        <HouseImg />
        <CustomFontText text="Login to your Account" style={styles.loginText} />
        <KeyboardAvoidingView>
          <CustomTextInput
            containerStyles={styles.inputContainer}
            placeholder="Username"
            leftIcon={<PeopleIcon />}
          />
          <CustomTextInput
            containerStyles={styles.inputContainer}
            placeholder="Username"
            leftIcon={<KeyIcon />}
            rightText="Forgot"
          />
        </KeyboardAvoidingView>
        <FlatButton title="Sign In" onPress={onLogin} isLoading={isLoading} />
      </CustomBox>
    </SafeView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5F4F3',
    flex: 1,
  },
  bg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 31,
    left: 25,
  },
  loginText: {
    color: '#6D6767',
    fontSize: 16,
    textAlign: 'left',
    width: '100%',
    marginVertical: 16,
  },
  inputContainer: {
    backgroundColor: '#fff',
  },
});
