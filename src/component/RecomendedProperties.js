/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  ScrollableTab,
  Right,
  Tab,
  Tabs,
  TabHeading,
  Badge,
  Left,
  Body,
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MeIcon from 'react-native-vector-icons/Entypo';
import {withNavigation} from 'react-navigation';

import Imageroom from '../assets/hotel1.jpg';

export default class RecomendedProperties extends Component {
  render() {
    return (
      <Card
        style={{
          height: 280,
          width: 210,
          backgroundColor: 'white',
          marginRight: 7,
          color: 'white',
        }}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailHotel')}>
          <CardItem cardBody style={{borderRadius: 5, marginHorizontal: 10}}>
            <View style={{height: 120, width: 210}}>
              <Image
                source={Imageroom}
                style={{left: -10, height: 120, width: 210}}
              />
              <View>
                <Badge
                  style={{
                    height: 12,
                    width: 35,
                    marginTop: -110,
                    marginLeft: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#43AB4A',
                  }}>
                  <Text style={{fontSize: 10, color: 'white'}}>4.1/5</Text>
                </Badge>
              </View>

              <Text style={{fontSize: 16, marginTop: 15}}>
                RedRoomz @ Sukasari
              </Text>
              <Text style={{fontSize: 12, color: '#ddd', marginTop: 15}}>
                <MeIcon name="location-pin" /> Jakarta
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  color: '#ddd',
                  fontWeight: 'bold',
                  textDecorationLine: 'line-through',
                }}>
                Rp.20.000
              </Text>
              <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}>
                Rp.18.000
                <Text
                  style={{color: '#ddd', fontSize: 16, fontWeight: 'normal'}}>
                  /night
                </Text>
              </Text>
            </View>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}
