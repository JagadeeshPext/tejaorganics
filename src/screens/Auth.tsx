import React, {useState} from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {translate} from '../config/i18';
import Login from './Login';
import Signup from './Signup';

const Auth = ({navigation}: any) => {
  const [login, setIsLogin] = useState(true);
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={
        login
          ? require('../assets/background.png')
          : require('../assets/whiteBg.png')
      }>
      <ImageBackground
        style={styles.subContainer}
        source={
          login
            ? require('../assets/background.png')
            : require('../assets/whiteBg.png')
        }>
        <View style={styles.formContainer}>
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            style={styles.btns}>
            <Text style={login ? styles.title1 : styles.title}>
              {translate('login')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            style={styles.btns}>
            <Text style={!login ? styles.title1 : styles.title}>
              {translate('signUp')}
            </Text>
          </TouchableOpacity>
        </View>
        {login ? <Login /> : <Signup navigation={navigation} />}
      </ImageBackground>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  title1: {
    fontSize: 15,
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: 'rgb(0,0,0)',
    fontWeight: '700',
    overflow: 'hidden',
  },

  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: 4,
    backgroundColor: 'rgb(0,0,0)',
    margin: 15,
    marginTop: Platform.OS == 'android' ? 15 : 65,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    padding: 6,
    color: '#fff',
    fontWeight: '700',
    // backgroundColor: 'black',
  },
  mainContainer: {
    height: '100%',
  },
  subContainer: {
    height: '100%',
    padding: 10,
  },
  btns: {
    width: '48%',
  },
});
