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

import promo1 from '../assets/promo1.jpg'
import promo2 from '../assets/promo2.jpg'


export default class PromosOffers extends Component {
    render() {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card style={{ height: 100, width: 300, backgroundColor: 'white', marginRight: 7, color: 'white' }}>
                    <TouchableOpacity>
                        <CardItem cardBody style={{ borderRadius: 5, marginHorizontal: 10 }}>
                            <View style={{ height: 100, width: 300 }}>
                                <Image source={promo2} style={{ left: -10, height: 100, width: 300 }} />
                            </View>
                        </CardItem>
                    </TouchableOpacity>
                </Card >
                <Card style={{ height: 100, width: 370, backgroundColor: 'white', marginRight: 7, color: 'white' }}>
                    <TouchableOpacity>
                        <CardItem cardBody style={{ borderRadius: 5, marginHorizontal: 10 }}>
                            <View style={{ height: 100, width: 370 }}>
                                <Image source={promo1} style={{ left: -10, height: 100, width: 370 }} />
                            </View>
                        </CardItem>
                    </TouchableOpacity>
                </Card >
            </ScrollView>
        )
    }
}
