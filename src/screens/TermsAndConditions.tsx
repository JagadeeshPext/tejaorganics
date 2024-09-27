import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {TermsData} from '../utils/constants';
import theme from '../utils/theme';

interface IProps {
  navigation: any;
}

export class TermsAndConditions extends Component<IProps> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <FontAwesome6
              onPress={() => this.props.navigation.navigate('Home')}
              name="chevron-left"
              color={theme.iconDarkColor}
              style={{fontSize: responsiveFontSize(2.2)}}
            />
            <Text style={styles.headerText}>Terms & conditions</Text>
          </View>

          <View style={styles.termsContainer}>
            <FlatList
              data={TermsData}
              renderItem={({item}) => (
                <View style={styles.item}>
                  <FontAwesome5
                    name="chevron-right"
                    color={theme.iconDarkColor}
                    style={styles.icon}
                  />
                  <Text style={styles.title}>{item.text}</Text>
                </View>
              )}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    height: '100%',
    alignItems: 'center',
  },
  innerContainer: {
    width: '85%',
    marginTop: 10,
    gap: 30,
  },
  header: {
    gap: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    color: theme.iconDarkColor,
    fontWeight: '600',
  },
  termsContainer: {
    borderWidth: 2,
    height: 'auto',
    borderColor: theme.lightBorderColor,
    borderRadius: 20,
    padding: 15,
    backgroundColor: theme.white,
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    padding: 10,
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: theme.textColor,
  },
  icon: {
    paddingTop: 6,
    fontSize: responsiveFontSize(1.8),
  },
});
