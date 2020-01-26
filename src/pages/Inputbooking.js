import React, { Component, useState } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, ImageBackground
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon, Form, Item, Input, Label,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Body, Title, Footer
} from 'native-base';

import Imageroom from '../assets/hotel1.jpg';
import { connect } from 'react-redux';
import { postBooking } from '../redux/actions/postData';

function Inputbooking(props) {

    const [input, setInput] = useState(props.profile.data)
    const data = props.navigation.state.params.data;
    console.log({...data, ...input})
    
    const postBook = async() => {
        await props.dispatch(postBooking(props.auth.token, {...data, ...input},data.id_hotel))     
        console.log(props.booking.status)
        if(props.booking.status.success){
            // props.navigation.popToTop()
            // props.navigation.goBack('SearchHotels')
        } else alert('ada kesalahan di database')
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Container>
                <Header style={{ backgroundColor: '#fff' }} >
                    <Left style={{ justifyContent: 'center', flex: 1 }}>
                        <Icon onPress={() => props.navigation.goBack()}
                            name="arrow-back" type='MaterialIcons' />
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title style={{ color: '#000', alignSelf: 'center' }} >Input Booking</Title>
                    </Body>
                    <Right style={{ justifyContent: 'center', flex: 1 }} >
                    </Right>
                </Header>
                <ScrollView>
                    <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 10 }}>
                        <View
                            style={{
                                flexWrap: 'wrap',
                                borderWidth: 1,
                                borderColor: '#ddd',
                                borderRadius: 5,
                                padding: 10,
                                height: 280,
                                elevation: 2
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.name}</Text>
                                    <Text style={{ color: 'grey' }}>
                                        Siloam Hospital Kebon jerouk, jalan masjid rtrw banyak banget
                        </Text>
                                </View >
                                <View style={{ flex: 1 }} >
                                    <Image source={Imageroom} style={{ width: 100, height: 100 }} />
                                </View >
                            </View>
                            <View style={{ marginVertical: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>RedRoomz {data.city}</Text>
                                <Text style={{ color: 'grey' }}>
                                    Refundable
                        </Text>
                            </View>
                            <View style={{ backgroundColor: '#ddd', height: 2, width: 300, marginVertical: 10 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: 'grey' }}>Check in</Text>
                                    <Text style={{ fontSize: 10, top: 10 }}>{data.checkin.toLocaleDateString()}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: 'grey', top: 5 }}>{data.nights} Night</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: 'grey' }}>Check Out</Text>
                                    <Text style={{ fontSize: 10, top: 10 }}>{data.checkout.toLocaleDateString()}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: 'grey', top: 5 }}>{data.room} Room(s)</Text>
                                </View>

                            </View>
                        </View >

                        <View
                            style={{
                                flexWrap: 'wrap',
                                borderWidth: 1,
                                borderColor: '#ddd',
                                borderRadius: 5,
                                padding: 10,
                                height: 280,
                                marginVertical: 10,
                                flexDirection: 'row',
                                elevation: 1
                            }}>
                            <Form style={{ flex: 1, marginHorizontal: 20, }}>
                                <Item floatingLabel >
                                    <Label style={{ fontSize: 15 }}>Email</Label>
                                    <Input keyboardType="email-address"
                                    value={input.email}
                                    onChangeText={v=> setInput({...input, email:v})} />
                                </Item>
                                <Item floatingLabel>
                                    <Label style={{ fontSize: 15 }}>Name</Label>
                                    <Input
                                    value={input.name}
                                    onChangeText={v=> setInput({...input, name:v})} />
                                </Item>
                                <Item floatingLabel >
                                    <Label style={{ fontSize: 15 }}>Phone </Label>
                                    <Input keyboardType="phone-pad" 
                                    value={input.no_hp}
                                    onChangeText={v=> setInput({...input, no_hp:v})} />
                                </Item>
                            </Form>

                        </View>

                    </View >
                </ScrollView>
                <Footer style={{ height: 100, flexDirection: 'column', borderTopWidth: 1, borderColor: '#ddd' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            Total Payable Amount </Text>
                        <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>Rp. {data.total} </Text>
                    </View>
                    <View style={{ backgroundColor: 'white', flex: 1 }}>
                        <TouchableOpacity onPress={postBook}
                            style={{ backgroundColor: 'red', marginHorizontal: 10, marginVertical: 5, flex: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </Footer>
            </Container>

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

const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth,
        booking:state.booking
    }
}

export default connect(mapStateToProps)(Inputbooking)
