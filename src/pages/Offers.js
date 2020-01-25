/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import o1 from '../assets/o1.png';
import o2 from '../assets/o2.png';

function Travel1(props) {
  return (
    <View style={styles.Traveltag}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Offersdetail')}
        style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.Imagetravel} source={o1} />
        <View style={{}}>
          <Text style={{ fontSize: 12 }}>
            Liburan Hoki Pasti Hepi! Get 25% Discount on your Bookings!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Travel2(props) {
  return (
    <View style={styles.Traveltag}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Offersdetail2')}
        style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.Imagetravel} source={o2} />
        <View style={{}}>
          <Text style={{ fontSize: 12 }}>
            New User Offers - Flat 20% OFF on your First RedRoomz Booking!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Offers(props) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            height: 50,
            backgroundColor: 'white',
            borderBottomWidth: 2,
            borderColor: '#ddd',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 21 }}>Offers</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <ScrollView>
          <Travel2 navigation={props.navigation} />
          <Travel1 navigation={props.navigation} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Traveltag: {
    marginBottom: 15,
    flex: 1,
  },
  Imagetravel: {
    height: 210,
    width: 345,
    borderRadius: 2,
  },
});

export default Offers;
