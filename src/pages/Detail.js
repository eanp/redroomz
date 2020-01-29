/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Icon,
  Footer,
  DatePicker,
  Item,
  Picker,
} from 'native-base';
import { withNavigation } from 'react-navigation';
import PickerBox from 'react-native-picker-box';

import MoIcon from 'react-native-vector-icons/Octicons';
import MaIcon from 'react-native-vector-icons/AntDesign';
import MeIcon from 'react-native-vector-icons/Entypo';
import MmIcon from 'react-native-vector-icons/AntDesign';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MfIcon from 'react-native-vector-icons/FontAwesome5';
import MzIcon from 'react-native-vector-icons/Ionicons';

import RecomendedProperties from '../component/RecomendedProperties';
import NearbyProperties from '../component/NearbyProperties';
import PromosOffers from '../component/PromosOffers';
import Servicebar from '../component/Servicebar';

import Imageroom from '../assets/hotel1.jpg';
import maps from '../assets/maps.png';
import moment from 'moment';

class Lines extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#ddd', height: 1, marginVertical: 10 }} />
    );
  }
}

class Headbar extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
            <View style={(styles.icontag, { marginLeft: 10 })}>
              <TouchableOpacity>
                <MzIcon style={styles.headicon} name="md-arrow-back" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function DetailTitle({ data }) {
  return (
    <>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {data.name}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <View
            style={{
              height: 20,
              width: 35,
              backgroundColor: '#43AB4A',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{ color: 'white', fontSize: 12 }}>4.8/5</Text>
          </View>
          <Text
            style={{
              color: '#43AB4A',
              fontWeight: 'bold',
              marginRight: 10,
              fontSize: 14,
            }}>
            Excellent
          </Text>
          <Text style={{ color: 'red', fontSize: 14 }}>See All reviews</Text>
        </View>
      </View>
      <Lines />
      <View>
        <Text
          style={{
            marginBottom: 5,
            left: 3,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Location
              </Text>
      </View>
      <View style={{ flexDirection: 'row', height: 100 }}>
        <View>
          <Image source={maps} style={{ height: 90, width: 90 }} />
        </View>
        <View style={{ marginLeft: 10, flex: 1, color: '#ddd' }}>
          <Text style={{ color: 'grey' }} numberOfLines={3}>
            {data.description}
            Siloam Hospital Kebon jerouk, jalan masjid rtrw banyak banget
          </Text>
          <Text style={{ color: 'grey', fontSize: 14, marginTop: 10,textTransform:'capitalize' }}>
            <MeIcon name="location-pin" style={{ color: 'red', fontSize: 14 }} />{' '}
            | {data.city}
          </Text>
        </View>
      </View>
      <Lines />
    </>
  );
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin: new Date(),
      checkout: new Date(),
      room: 1,
    };
    this.setDateIn = this.setDateIn.bind(this);
    this.setDate = this.setDate.bind(this);
  }
  onValueChange2(value) {
    this.setState({
      room: value,
    });
  }
  setDateIn(newDate) {
    this.setState({ checkin: newDate });
  }
  setDate(newDate) {
    this.setState({ checkout: newDate });
  }

  totalAmount(price){
    let number = this.state.room * price * 
    moment(this.state.checkout).startOf('day').diff(moment(this.state.checkin).startOf('day'),'days')
    return number
  }

  currencyFormat(price) {
    let number = this.totalAmount(price)
    return 'Rp ' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  gotoBooking(data){
    const params  =  {...data, ...this.state, total: this.totalAmount(data.price) ,
      nights: moment(this.state.checkout).startOf('day').diff(moment(this.state.checkin).startOf('day'),'days'), }
    if (params.nights === 0 ) {
      alert('at least stay for 1 night');
      return;
    }
    this.props.navigation.navigate('Inputbooking',{data: params});
  }
  

  render() {
    const data = this.props.navigation.state.params.data
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <ImageBackground
            source={{uri: data.image}}
            imageStyle={{ opacity: 0.8 }}
            style={{ height: 200 }}>
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
              <Headbar />
            </View>
          </ImageBackground>
          <View style={{ marginHorizontal: 13 }}>
            <DetailTitle data={data} />
            <View
              style={{
                flexDirection: 'row',
                height: 80,
                backgroundColor: '#ddd',
                borderRadius: 10,
              }}>
              <View
                style={{
                  flex: 1, justifyContent: 'center', alignItems: 'center', left: 15, top: 5,
                }}>
                <Text style={{ color: 'grey' }}>Check-In</Text>
                <DatePicker
                  minimumDate={new Date()}
                  maximumDate={this.state.checkout}
                  locale={'en'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  placeHolderText="Select Date"
                  placeHolderTextStyle={{ color: 'grey', fontSize: 10, top: -10 }}
                  textStyle={{ color: 'grey', fontSize: 10, top: -10 }}
                  onDateChange={this.setDateIn}
                  disabled={false}
                />
                <Text style={{ fontSize: 12, fontWeight: 'bold', top: -15 }}>
                  {this.state.checkin.toString().substr(4, 12)}
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MaIcon name="arrowright" style={{ fontSize: 20, color: 'grey' }} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: -15,
                  top: 5,
                }}>
                <Text style={{ color: 'grey' }}>Check-Out</Text>
                <DatePicker
                  minimumDate={this.state.checkin}
                  maximumDate={new Date(2021, 12, 31)}
                  locale={'en'}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={'fade'}
                  androidMode={'default'}
                  placeHolderText="Select Date"
                  placeHolderTextStyle={{ color: 'grey', fontSize: 10, top: -10 }}
                  textStyle={{ color: 'grey', fontSize: 10, top: -10 }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
                <Text style={{ fontSize: 12, fontWeight: 'bold', top: -15 }}>
                  {this.state.checkout.toString().substr(4, 12)}
                </Text>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'grey',
                }}>
                <Text style={{ color: 'grey', top: 5 }}>Room(s)</Text>
                <Item picker style={{ elevation: 0, width: 70 }}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" style={{}} />}
                    style={{ left: 5 }}
                    placeholder="1"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.room}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                  </Picker>
                </Item>
              </View>
            </View>
            <Lines />
            <View>
              <Text
                style={{
                  marginTop: 20,
                  marginBottom: -10,
                  left: 3,
                  fontSize: 16,
                }}>
                RedRoomz Service Guarantee
              </Text>
            </View>
            <Servicebar />
            <Lines />
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 10,
                    marginVertical: 5,
                    left: 3,
                    fontSize: 16,
                  }}>
                  Recomended Properties
                </Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <NearbyProperties />
                <NearbyProperties />
                <NearbyProperties />
                <NearbyProperties />
                <NearbyProperties />
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <Footer style={{ backgroundColor: '#fff' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ right: 60, justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}> {this.currencyFormat(data.price)}  </Text>
              <Text style={{ color: 'grey', fontSize: 10 }}>
                for {moment(this.state.checkout).startOf('day').diff(moment(this.state.checkin).startOf('day'),'days')} Night (tax included)
              </Text>
            </View>
            <View style={{ left: 60, justifyContent: 'center' }}>
              <TouchableOpacity 
              onPress={() => this.gotoBooking(data)}>
                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: 'red',
                    borderRadius: 8,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                    Book Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Footer>
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
