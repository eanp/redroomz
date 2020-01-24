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
import MeIcon from 'react-native-vector-icons/Entypo';
import MmIcon from 'react-native-vector-icons/AntDesign';

import coliving from '../assets/colivingbanner.jpg';
import whitelogo from '../assets/rrwhite.png';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';
import offer4 from '../assets/offer4.png';
import enjoy1 from '../assets/enjoy1.png';
import enjoy2 from '../assets/enjoy2.png';
import enjoy3 from '../assets/enjoy3.png';
import enjoy4 from '../assets/enjoy4.png';
import amnesty from '../assets/amnesty.png';
import bottom from '../assets/bottom.png';
import howtobook1 from '../assets/howtobook1.png';
import howtobook2 from '../assets/howtobook2.png';
import howtobook3 from '../assets/howtobook3.png';
import howtobook4 from '../assets/howtobook4.png';

class Enjoy extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              marginTop: 10,
              marginRight: 10,
            }}>
            <TouchableOpacity style={{}}>
              <Image style={{height: 240, width: 280}} source={enjoy2} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              marginTop: 10,
              top: -8,
              marginRight: 10,
            }}>
            <TouchableOpacity style={{}}>
              <Image style={{height: 220, width: 280}} source={enjoy4} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              marginTop: 10,
              top: -8,
              marginRight: 10,
            }}>
            <TouchableOpacity style={{}}>
              <Image style={{height: 220, width: 280}} source={enjoy3} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              marginTop: 10,
              top: -8,
              marginRight: 10,
            }}>
            <TouchableOpacity style={{}}>
              <Image style={{height: 220, width: 280}} source={enjoy1} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
class Offer extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 100,
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
            }}>
            <Image source={offer1} style={{height: 80, width: 80, top: 5}} />
            <Text style={{marginBottom: 5}}>Co-Living Space</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 100,
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
            }}>
            <Image source={offer2} style={{height: 80, width: 80, top: 5}} />
            <Text style={{marginBottom: 5}}>Serviced Recidences</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 100,
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
            }}>
            <Image source={offer3} style={{height: 80, width: 80, top: 5}} />
            <Text style={{marginBottom: 5}}>No Security Deposit</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 100,
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
            }}>
            <Image source={offer4} style={{height: 80, width: 80, top: 5}} />
            <Text style={{marginBottom: 5}}>Pay Monthly</Text>
          </View>
        </View>
      </View>
    );
  }
}

class Headbar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image source={whitelogo} style={{height: 35, width: 120}} />
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 5}} />
            <View style={(styles.icontag, {marginLeft: 10})}>
              <MeIcon style={styles.headicon} name="dots-three-vertical" />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            marginTop: 15,
            borderRadius: 2,
            alignItems: 'center',
            marginTop: 158,
            borderWidth: 1,
            borderColor: '#ddd9',
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{fontSize: 15, marginTop: 3, color: '#ddd9'}}>
                <MmIcon name="search1" style={{fontSize: 15}} />
                Search RedRoomz Residences
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <ImageBackground
            source={coliving}
            imageStyle={{opacity: 0.8}}
            style={{height: 200}}>
            <View style={{marginHorizontal: 15, marginTop: 15}}>
              <Headbar />
            </View>
          </ImageBackground>
          <View style={{flex: 1, marginTop: 10, marginHorizontal: 15}}>
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    marginBottom: 10,
                    left: 3,
                    fontSize: 16,
                  }}>
                  What do We Offers
                </Text>
              </View>
              <Offer />
            </View>
            <View>
              <View>
                <Text style={{marginTop: 30, left: 3, fontSize: 16}}>
                  Things to Enjoy
                </Text>
                <Enjoy />
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    marginTop: -20,
                    marginBottom: 10,
                    left: 3,
                    fontSize: 16,
                  }}>
                  Amnesties
                </Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={amnesty} style={{height: 220, width: 320}} />
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    left: 3,
                    fontSize: 16,
                  }}>
                  How to Book
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image source={howtobook1} style={{height: 80, width: 320}} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image source={howtobook2} style={{height: 80, width: 320}} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image source={howtobook3} style={{height: 80, width: 320}} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image source={howtobook4} style={{height: 100, width: 320}} />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Image source={bottom} style={{height: 140, width: 320}} />
            </View>
          </View>
        </ScrollView>
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
