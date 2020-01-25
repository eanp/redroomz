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

import o2 from '../assets/o2.png'


function Offersdetail(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.Traveltag}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.Imagetravel} source={o2} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 15, fontWeight: 'bold' }}>New User Offers - Flat 20% OFF on your First RedRoomz Booking!
</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginVertical: 20 }}>            New User Offers - Flat 20% OFF on your First RedRoomz Booking!
                        New User Offers - Flat 20% OFF on your First RedRoomz Booking!
                        New User Offers - Flat 20% OFF on your First RedRoomz Booking!
                        New User Offers - Flat 20% OFF on your First RedRoomz Booking!</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    Traveltag: {
        marginBottom: 20,
        marginTop: 10,
        flex: 1
    },
    Imagetravel: {
        height: 220,
        width: 360,
        borderRadius: 2,
        marginHorizontal: 5
    }
})


export default Offersdetail