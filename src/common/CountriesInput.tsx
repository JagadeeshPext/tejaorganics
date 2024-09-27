import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const local_data = [
  {
    value: '1',
    lable: 'IND',
    image: {
      uri: 'https://www.worldometers.info//img/flags/small/tn_in-flag.gif',
    },
  },
  {
    value: '2',
    lable: 'AFG',
    image: {
      uri: 'https://www.worldometers.info//img/flags/small/tn_af-flag.gif',
    },
  },
  {
    value: '3',
    lable: 'AR',
    image: {
      uri: 'https://www.worldometers.info//img/flags/small/tn_al-flag.gif',
    },
  },
  {
    value: '4',
    lable: 'ABW',
    image: {
      uri: 'https://www.worldometers.info//img/flags/small/tn_ba-flag.gif',
    },
  },
  {
    value: '5',
    lable: 'AUS',
    image: {
      uri: 'https://www.worldometers.info//img/flags/small/tn_bf-flag.gif',
    },
  },
];

const CountriesInput = () => {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
};

export default CountriesInput;

const styles = StyleSheet.create({
  dropdown: {
    marginLeft: 10,
    marginRight: 10,

    width: responsiveWidth(22),
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
