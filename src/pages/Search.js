/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  TouchableOpacity, Image, ImageBackground
} from 'react-native'
import { Badge, } from 'native-base';
import { withNavigation } from 'react-navigation'

import MoIcon from 'react-native-vector-icons/Octicons';
import MaIcon from 'react-native-vector-icons/AntDesign';
import MeIcon from 'react-native-vector-icons/Entypo';
import MmIcon from 'react-native-vector-icons/AntDesign';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MfIcon from 'react-native-vector-icons/FontAwesome5';
import MzIcon from 'react-native-vector-icons/Ionicons';

import imagebanner from '../assets/banner.jpg';
import whitelogo from '../assets/rrwhite.png';

import RecomendedProperties from '../component/RecomendedProperties';
import NearbyProperties from '../component/NearbyProperties';
import PromosOffers from '../component/PromosOffers';
import Servicebar from '../component/Servicebar';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/getData';

class Headbar extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={whitelogo} style={{ height: 35, width: 120 }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 3 }} />
          <View style={styles.icontag}>
            <MoIcon style={styles.headicon} name="gift" />
          </View>
          <View style={styles.icontag}>
            <MaIcon style={styles.headicon} name="wallet" onPress={() => this.props.navigation.navigate('RedCash')} />
            <Badge
              style={{
                height: 12,
                width: 35,
                marginTop: -28,
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 10, color: 'white' }}>{(this.props.saldo/1000).toFixed(0)}k</Text>
            </Badge>
          </View>
          <View style={(styles.icontag, { marginLeft: 10 })}>
            <MeIcon style={styles.headicon} name="dots-three-vertical" />
          </View>
        </View>
      </View>
    );
  }
}

class Headsearch extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            marginTop: 15,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{ fontSize: 10, marginTop: 3, color: '#ddd' }}>
              City/Area/Property Name
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <MmIcon name="search1" style={{ fontSize: 18 }} />
            <Text style={{ fontSize: 15 }}> RedRoomz Near me</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class Headcalendar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: 60,
          marginTop: 15,
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={{ fontSize: 12, color: '#ddd' }}>Check in</Text>

          <Text style={{ fontSize: 12, top: 10 }}>21 Jan, 2020</Text>
          <Text style={{ fontSize: 12, color: '#ddd', top: 8 }}>Today</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            left: -10,
          }}>
          <Text
            style={{ fontSize: 12, backgroundColor: '#ddd', borderRadius: 5 }}>
            {' '}
            1 Night{' '}
          </Text>
        </View>
        <View style={{ flex: 1, marginLeft: -5 }}>
          <Text style={{ fontSize: 12, color: '#ddd' }}>Check Out</Text>

          <Text style={{ fontSize: 12, top: 10 }}>22 Jan, 2020</Text>
          <Text style={{ fontSize: 12, color: '#ddd', top: 8 }}>Tomorrow</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderColor: '#ddd',
          }}>
          <Text style={{ fontSize: 12, color: '#ddd', top: -10 }}>Room(s)</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', top: -8 }}>01</Text>
        </View>
      </View>
    );
  }
}

class Headbutton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SearchHotels')}>

        <View style={{ backgroundColor: '#FB4D4E', height: 50, marginTop: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Search RedRoomz</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class City extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{}}>
          <Image
            style={{
              height: 60,
              width: 60,
              backgroundColor: 'red',
              borderRadius: 40,
              marginHorizontal: 5,
            }}
            source={imagebanner}
          />
        </TouchableOpacity>
        <View style={{}}>
          <Text style={{ fontSize: 10 }}>City</Text>
        </View>
      </View>
    );
  }
}

class Travel extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
          marginTop: 10,
        }}>
        <TouchableOpacity style={{}}>
          <Image
            style={{
              height: 180,
              width: 280,
              backgroundColor: 'red',
              borderRadius: 10,
              marginHorizontal: 5,
            }}
            source={imagebanner}
          />
        </TouchableOpacity>
        <View style={{ left: -75 }}>
          <Text style={{ fontSize: 16 }}>City</Text>
          <Text style={{ fontSize: 12, color: '#ddd' }}>
            Posted on: 21 Jan 2020
          </Text>
        </View>
      </View>
    );
  }
}

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getProfile(this.props.auth.token))
    if (!(this.props.auth.token)) {
      alert('no token')
      setTimeout(() => {
        this.props.navigation.navigate('Login')
      }, 2000);
    } 
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <ImageBackground source={imagebanner} imageStyle=
            {{ opacity: 0.8 }} style={{ height: 270 }}>
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
              <Headbar navigation={this.props.navigation} saldo={this.props.profile.data && this.props.profile.data.saldo || 0} />
              <Headsearch />
              <Headcalendar />
              <Headbutton navigation={this.props.navigation} />
            </View>
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, marginHorizontal: 15 }}>
            <View>
              <View><Text style={{ marginVertical: 5, left: 3, fontSize: 16 }}>Recomended Properties</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* <RecomendedProperties navigation={this.props.navigation} /> */}
                <RecomendedProperties />
                <RecomendedProperties />
                <RecomendedProperties />
                <RecomendedProperties />
                <RecomendedProperties />
                <RecomendedProperties />
              </ScrollView>
            </View>
            <View>
              <View><Text style={{ marginTop: 20, marginBottom: 5, left: 3, fontSize: 16 }}>Promos and Offers</Text>
              </View>
              <PromosOffers />

            </View>
            <View>
              <View><Text style={{ marginTop: 20, marginVertical: 5, left: 3, fontSize: 16 }}>Nearby Properties</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <NearbyProperties />
              </ScrollView>
            </View>
            <View>
              <Text style={{ marginTop: 20, marginBottom: -10, left: 3, fontSize: 16 }}>RedRoomz Service Guarantee</Text>
            </View>
            <Servicebar />
            <View style={{ marginTop: 10 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
              </ScrollView>
            </View>
            <View style={{}}>
              <Text style={{ marginTop: 30, left: 3, fontSize: 16 }}>
                Travel Stories
                            </Text>
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Travel />
                <Travel />
                <Travel />
                <Travel />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View >
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile:state.profile
  }
}

// export default Login
export default connect(mapStateToProps)(App)

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
