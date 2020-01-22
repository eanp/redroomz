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

import imagebanner from '../assets/banner.jpg'
import whitelogo from '../assets/rrwhite.png'

import RecomendedProperties from '../component/RecomendedProperties'
import NearbyProperties from '../component/NearbyProperties'
import PromosOffers from '../component/PromosOffers'

class Headbar extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Image source={whitelogo} style={{ height: 35, width: 120 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 3 }}>
                    </View>
                    <View style={styles.icontag}>
                        <MoIcon style={styles.headicon} name='gift' />
                    </View>
                    <View style={styles.icontag}>
                        <MaIcon style={styles.headicon} name='wallet' />
                        <Badge style={{ height: 12, width: 35, marginTop: -28, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: 'white' }}>150k</Text>
                        </Badge>
                    </View>
                    <View style={styles.icontag, { marginLeft: 10 }}>
                        <MeIcon style={styles.headicon} name='dots-three-vertical' />
                    </View>
                </View>
            </View>
        )
    }
}


class Headsearch extends Component {
    render() {
        return (
            <TouchableOpacity>

                <View style={{
                    backgroundColor: 'white', height: 50, marginTop: 15, borderRadius: 5,
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{ fontSize: 10, marginTop: 3, color: '#ddd' }}>City/Area/Property Name</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MmIcon name='search1' style={{ fontSize: 18 }} />
                        <Text style={{ fontSize: 15 }}>  RedRoomz Near me</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

class Headcalendar extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', height: 60, marginTop: 15, borderRadius: 5, flexDirection: 'row' }}>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    <Text style={{ fontSize: 12, color: '#ddd' }}>Check in</Text>

                    <Text style={{ fontSize: 12, top: 10 }}>21 Jan, 2020</Text>
                    <Text style={{ fontSize: 12, color: '#ddd', top: 8 }}>Today</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', left: -10 }}>
                    <Text style={{ fontSize: 12, backgroundColor: '#ddd', borderRadius: 5 }}> 1 Night </Text>
                </View>
                <View style={{ flex: 1, marginLeft: -5 }}>
                    <Text style={{ fontSize: 12, color: '#ddd' }}>Check Out</Text>

                    <Text style={{ fontSize: 12, top: 10 }}>22 Jan, 2020</Text>
                    <Text style={{ fontSize: 12, color: '#ddd', top: 8 }}>Tomorrow</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: '#ddd' }}>
                    <Text style={{ fontSize: 12, color: '#ddd', top: -10 }}>Room(s)</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', top: -8 }}>01</Text>
                </View>
            </View>
        )
    }
}

class Headbutton extends Component {
    render() {
        return (
            <TouchableOpacity>

                <View style={{ backgroundColor: '#FB4D4E', height: 50, marginTop: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Search RedRoomz</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <ImageBackground source={imagebanner} imageStyle=
                        {{ opacity: 0.8 }} style={{ height: 270 }}>
                        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                            <Headbar />
                            <Headsearch />
                            <Headcalendar />
                            <Headbutton />
                        </View>
                    </ImageBackground>
                    <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, marginHorizontal: 15 }}>
                        <View>
                            <View><Text style={{ marginVertical: 5, left: 3, fontSize: 16 }}>Recomended Properties</Text>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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


                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headicon: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    icontag: {
        flex: 2,
        marginHorizontal: 5
    }
})