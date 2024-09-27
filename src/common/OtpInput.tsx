import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
export class OtpInputField extends Component {
  render() {
    return (
      <OtpInput
        numberOfDigits={4}
        focusColor="green"
        focusStickBlinkingDuration={10500}
        onTextChange={text => console.log(text)}
        onFilled={text => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
    );
  }
}

export default OtpInputField;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    gap:13
  },
  pinCodeContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(17),
  },
  pinCodeText: {},
  focusStick: {},
  activePinCodeContainer: {
    borderWidth: 2,
    borderColor: '#A0E045',
  },
});
