import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import theme from '../utils/theme';

interface IButton {
  onClick?: () => void;
  text?: string;
}

const Button: React.FC<IButton> = ({onClick, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.buttonBackground,
    width: '100%',
    height: responsiveHeight(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
});
