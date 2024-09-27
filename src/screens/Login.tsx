import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import {translate} from '../config/i18';
import {Icons} from '../utils/Icons';
import theme, {fonts} from '../utils/theme';

interface IUser {
  name: string;
  password: string;
}
interface IErrors {
  name: string;
  password: string;
}
interface ILogin {
  user: IUser;
  errors: IErrors;
}

class Login extends Component<{}, ILogin> {
  state: ILogin = {
    user: {name: '', password: ''},
    errors: {name: '', password: ''},
  };

  passwordInputRef = React.createRef<TextInput>();

  onChangeText = (text: string, name: string) => {
    this.setState(prev => ({...prev, user: {...prev.user, [name]: text}}));
  };
  handleSignin = () => {
    const {user} = this.state;
    let errorsObj: IErrors = {name: '', password: ''};
    if (user.name === '') {
      errorsObj.name = translate('userNameErr');
    } else {
      errorsObj.name = '';
    }
    if (user.password === '') {
      errorsObj.password = translate('passwordErr');
    } else {
      errorsObj.password = '';
    }
    if (Object.values(errorsObj).length === 0) {
      
      errorsObj = {name: '', password: ''};
    } else {
      this.setState((prev: ILogin) => ({...prev, errors: errorsObj}));
    }
  };
  handleRef = () => {
    this.passwordInputRef.current?.focus();
  };
  render() {
    console.log(this.state.user);
    return (
      <ScrollView>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TextInput
          icon={Icons.userIcon}
          placeHolderText={translate('Username')}
          onChangeText={this.onChangeText}
          value={this.state.user.name}
          name="name"
          error={this.state.errors.name}
          returnKeyType="next"
          onSubmitEditing={this.handleRef}
        />
        <TextInput
          icon={Icons.passwordIcon}
          placeHolderText={translate('Password')}
          onChangeText={this.onChangeText}
          value={this.state.user.password}
          name="password"
          error={this.state.errors.password}
          isSecure={true}
          refs={this.passwordInputRef}
        />
        <Button text="Sign in" onClick={this.handleSignin} />
        <Text style={styles.forgotText}>{translate('forgotPassword')}?</Text>
        <Image source={require('../assets/logo1.png')} style={styles.image} />
      </ScrollView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: responsiveHeight(18),
    width: responsiveWidth(55),
    alignSelf: 'center',
  },
  forgotText: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: responsiveFontSize(2),
    color: theme.white,
    fontFamily: fonts.primaryBold,
  },
  image: {
    height: responsiveHeight(20),
    width: responsiveWidth(60),
    alignSelf: 'center',
    marginTop: 80,
  },
});
