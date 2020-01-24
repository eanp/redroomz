/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Badge} from 'native-base';

import MoIcon from 'react-native-vector-icons/Octicons';
import MaIcon from 'react-native-vector-icons/AntDesign';
import MeIcon from 'react-native-vector-icons/Entypo';
import MmIcon from 'react-native-vector-icons/AntDesign';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MfIcon from 'react-native-vector-icons/FontAwesome5';
import MzIcon from 'react-native-vector-icons/Ionicons';

export default class Servicebar extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <MfIcon name="wifi" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: -4}}>
            <Text style={styles.textservice}>Free Wifi</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <MeIcon name="tv" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 3}}>
            <Text style={styles.textservice}>Satelite Television</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <McIcon name="cup-water" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 8}}>
            <Text style={styles.textservice}>Mineral Water</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <MzIcon name="ios-bed" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 10}}>
            <Text style={styles.textservice}>Clean Linen</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <MfIcon name="bath" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 10}}>
            <Text style={styles.textservice}>Clean Washroom</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.iconservicetag}>
            <McIcon name="water-pump" style={styles.iconservice} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 1}}>
            <Text style={styles.textservice}>Toiletries</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headicon: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  icontag: {
    flex: 2,
    marginHorizontal: 5,
  },
  iconservice: {
    fontSize: 24,
    color: '#FB4D4E',
  },
  iconservicetag: {
    backgroundColor: '#ddd',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  textservice: {
    top: 5,
    fontSize: 11,
  },
});
