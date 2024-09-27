import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {timerBg} from '../assets/assets';
import Button from '../common/Button';
import OtpInputField from '../common/OtpInput';
import {translate} from '../config/i18';
import {Icons} from '../utils/Icons';
import {fonts} from '../utils/theme';
interface IOtp {
  timer: number;
}

class Otp extends Component<{}, IOtp> {
  id = null;
  state: IOtp = {timer: 30};

  handleTimer = () => {
    id = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer <= 1) {
          clearInterval(this.id!);
          return {timer: 0};
        }
        return {timer: prevState.timer - 1};
      });
    }, 1000);
  };

  componentDidMount(): void {
    if (this.state.timer > 0) {
      this.handleTimer();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          {Icons.backIcon}
          <Text style={styles.otpText}>{translate('otpTitle')}</Text>
        </View>
        <Text style={styles.text}>{translate('verificationNumberText')}</Text>
        <View style={styles.otpInputContainer}>
          <OtpInputField />
        </View>
        <ImageBackground source={timerBg} style={styles.timerBg}>
          <View>
            <Text style={styles.timerText}>{this.state.timer}</Text>
            <Text style={styles.secText}>{translate('secText')}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.forgetText}>{translate('statusOtp')}</Text>
        <View style={styles.btn}>
          <Button text="Verify" />
        </View>
      </SafeAreaView>
    );
  }
}

export default Otp;

const styles = StyleSheet.create({
  text: {
    color: '#343A40',
    fontSize: responsiveFontSize(2.1),
    alignSelf: 'center',
    fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    marginTop: 35,
  },
  container: {
    margin: 15,
  },
  timerBg: {
    height: responsiveHeight(11),
    width: responsiveHeight(11),
    marginTop: 85,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    textAlign: 'center',
  },
  secText: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
  },
  forgetText: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: responsiveFontSize(1.8),
  },
  btn: {
    marginTop: 55,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  otpText: {
    fontSize: responsiveFontSize(2.2),
    color: '#343A40',
    fontFamily: fonts.primarySemiBold,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  otpInputContainer: {
    marginTop: 50,
  },
});
