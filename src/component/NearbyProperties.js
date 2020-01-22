import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Body
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import { withNavigation } from 'react-navigation'

import Imageroom from '../assets/hotel1.jpg'


export default class NearbyProperties extends Component {
    render() {
        return (
            <Card style={{ height: 240, width: 180, backgroundColor: 'white', marginRight: 7, color: 'white' }}>
                <TouchableOpacity>
                    <CardItem cardBody style={{ borderRadius: 5, marginHorizontal: 10 }}>
                        <View style={{ height: 120, width: 210 }}>
                            <Image source={Imageroom} style={{ left: -10, height: 110, width: 180 }} />
                            <View>
                                <Badge style={{ height: 12, width: 35, marginTop: -100, marginLeft: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: '#43AB4A' }}>
                                    <Text style={{ fontSize: 10, color: 'white' }}>4.1/5</Text>
                                </Badge>
                            </View>

                            <Text style={{ fontSize: 15, marginTop: 10 }} >RedRoomz @ Sukasari</Text>
                            <Text style={{ fontSize: 11, color: '#ddd', marginTop: 15 }} >
                                <MeIcon name='location-pin' /> Jakarta</Text>
                            <Text style={{ marginTop: 10, color: '#ddd', fontWeight: 'bold', textDecorationLine: 'line-through' }}>Rp.20.000</Text>
                            <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>Rp.18.000<Text style={{ color: '#ddd', fontSize: 12, fontWeight: 'normal' }}>/night</Text></Text>

                        </View>

                    </CardItem>
                </TouchableOpacity>
            </Card >
        )
    }
}
