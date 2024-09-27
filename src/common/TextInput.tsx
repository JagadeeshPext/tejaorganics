import React, {Component} from 'react';
import {
  InputModeOptions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import theme, {fonts} from '../utils/theme';
import CountriesInput from './CountriesInput';

interface ITextInput {
  label?: string;
  onChangeText: (text: string, name: string) => void;
  value?: string;
  containerStyle?: object;
  inputStyle?: object;
  placeHolderText?: string;
  labelStyles?: object;
  icon?: React.ReactNode;
  error?: string;
  name?: string;
  keypad?: InputModeOptions;
  isSecure?: boolean;
  returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send';
  refs?: null | React.RefObject<TextInput>;
  onSubmitEditing?: () => void;
  onBlur: () => void;
}

class TextInputField extends Component<ITextInput, {}> {
  render() {
    const {
      label,
      onChangeText,
      value,
      containerStyle,
      inputStyle,
      placeHolderText,
      labelStyles,
      icon,
      error,
      name,
      keypad = 'text',
      isSecure = false,
      returnKeyType = 'done',
      onSubmitEditing,
      onBlur,
      refs,
    } = this.props;

    return (
      <View>
        {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}

        <View style={[styles.container, containerStyle]}>
          {label === 'Phone' && <CountriesInput />}
          <TextInput
            onChangeText={text =>
              onChangeText && onChangeText(text, name ?? '')
            }
            value={value}
            style={[styles.textInput, inputStyle]}
            placeholder={placeHolderText}
            placeholderTextColor={theme.palceHolderColor}
            name={name}
            inputMode={keypad}
            secureTextEntry={isSecure}
            returnKeyType={returnKeyType}
            ref={refs}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
          />
          {icon && icon}
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: Platform.OS === 'android' ? 8 : 18,
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: theme.borderInput,
    marginTop: 14,
  },
  label: {
    fontSize: 18,
    color: '#333',
    fontFamily: fonts.primaryRegular,

    marginTop: Platform.OS === 'android' ? 5 : 5,
  },
  textInput: {
    flex: 1,
    // paddingTop: 10,
    fontSize: 17,
    color: '#000',
    fontFamily: fonts.primarySemiBold,
  },
  icon: {
    marginRight: 10,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginTop: 1,
    margin: 5,
  },
});

export default TextInputField;
