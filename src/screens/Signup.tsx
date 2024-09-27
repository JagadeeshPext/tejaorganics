import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import {Icons} from '../utils/Icons';
import {fonts} from '../utils/theme';

interface InputData {
  id: number;
  name: string;
  icon: any; // Replace with appropriate type if known
  placeholder: string;
  item: string;
  returnKeyType: string;
}

interface FormValues {
  phone: string;
  email: string;
  password: string;
  name: string;
  confirmpassword: string;
}

interface SignupState {
  isSelected: boolean;
}

const inputData: InputData[] = [
  {
    id: 1,
    name: 'Name',
    icon: Icons.userIcon,
    placeholder: 'Enter Name',
    item: 'name',
    returnKeyType: 'next',
  },
  {
    id: 2,
    name: 'Phone',
    icon: Icons.mobileIcon,
    placeholder: 'Enter Mobile No',
    item: 'phone',
    returnKeyType: 'next',
  },
  {
    id: 3,
    name: 'Email',
    icon: Icons.emailIcon,
    placeholder: 'Enter Email',
    item: 'email',
    returnKeyType: 'next',
  },
  {
    id: 4,
    name: 'Password',
    icon: Icons.passwordIcon,
    placeholder: 'Enter Password',
    item: 'password',
    returnKeyType: 'next',
  },
  {
    id: 5,
    name: 'Password Confirm',
    icon: Icons.passwordIcon,
    placeholder: 'Enter Confirm Password',
    item: 'confirmpassword',
    returnKeyType: 'done',
  },
];
interface ISignup {
  navigation: any;
}

class Signup extends Component<ISignup, SignupState> {
  state = {
    isSelected: false,
  };
  inputRefs = Array.from({length: inputData.length}, () =>
    React.createRef<TextInput>(),
  );
  handleRef = (index: number) => {
    if (index < 5) {
      this.inputRefs[index].current?.focus();
    }
  };

  render() {
    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name cannot exceed 50 characters'),
      phone: yup
        .string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });

    return (
      <ScrollView style={styles.mainContainer}>
        <Formik<FormValues>
          validationSchema={loginValidationSchema}
          initialValues={{
            phone: '',
            email: '',
            password: '',
            name: '',
            confirmpassword: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleSubmit, touched, values, errors}) => (
            <View style={styles.mainContainer}>
              {inputData.map((each, index) => (
                <TextInput
                  key={each.id}
                  label={each.name}
                  icon={each.icon}
                  placeHolderText={each.placeholder}
                  onChangeText={handleChange(each.item)}
                  value={values[each.item]}
                  name={each.item}
                  error={touched[each.item] && errors[each.item]}
                  isSecure={each.item.includes('password')}
                  keypad={each.item === 'phone' ? 'numeric' : 'default'}
                  returnKeyType={each.returnKeyType}
                  refs={this.inputRefs[index]}
                  onSubmitEditing={() => this.handleRef(index + 1)}
                />
              ))}
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  boxType="square"
                  value={this.state.isSelected}
                  onValueChange={() =>
                    this.setState(prevState => ({
                      isSelected: !prevState.isSelected,
                    }))
                  }
                  style={styles.checkBox}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('termsAndConditions')
                  }>
                  <Text style={{fontFamily: fonts.primarySemiBold}}>
                    Terms and Conditions
                  </Text>
                </TouchableOpacity>
              </View>
              <Button onClick={handleSubmit} text="Sign up" />
            </View>
          )}
        </Formik>
      </ScrollView>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 10,
  },
  checkBox: {
    height: 20,
    width: 20,
  },
});
