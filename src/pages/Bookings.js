import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, ImageBackground
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Body
} from 'native-base';
import { withNavigation } from 'react-navigation'

import MoIcon from 'react-native-vector-icons/Octicons'
import MaIcon from 'react-native-vector-icons/AntDesign'
import MeIcon from 'react-native-vector-icons/Entypo'
import MmIcon from 'react-native-vector-icons/AntDesign'
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MfIcon from 'react-native-vector-icons/FontAwesome5'
import MzIcon from 'react-native-vector-icons/Ionicons'

import o1 from '../assets/o1.png'
import o2 from '../assets/o2.png'


function Travel(props) {
    return (
        <View style={styles.Traveltag}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Offersdetail')}
                style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={styles.Imagetravel} source={o1} />
                <View style={{}}>
                    <Text style={{ fontSize: 12 }}>Liburan Hoki Pasti Hepi! Get 25% Discount on your Bookings!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


function CenterBooking(props) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: 220 }}>
                <Text style={{ top: -20 }}>You have no new bookings</Text>
            </View>
            <View style={{ backgroundColor: '#c00', height: 40, width: 120, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Start Exploring</Text>
            </View>
        </View>
    )
}


function Bookings(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, height: 50, backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 21 }}>My Bookings</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <ScrollView>
                    <CenterBooking />
                </ScrollView>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    Traveltag: {
        marginBottom: 15,
        flex: 1
    },
    Imagetravel: {
        height: 210,
        width: 345,
        borderRadius: 2,
    }
})


export default Bookings