import React, { Component, useEffect } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, ImageBackground
} from 'react-native'
import { withNavigation } from 'react-navigation'

import MoIcon from 'react-native-vector-icons/Octicons'

import o1 from '../assets/o1.png'
import o2 from '../assets/o2.png'
import Imageroom from '../assets/hotel1.jpg';
import { connect } from 'react-redux'
import moment from 'moment'
import { getBooking } from '../redux/actions/getData'


function ListBooking({data}) {

  const nights = () => moment(data.checkout).startOf('day').diff(moment(data.checkin).startOf('day'),'days')

  return (
    <View style={{marginTop: 20, elevation: 5}}>
      <View
        style={{
          flexWrap: 'wrap',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 5,
        }}>
        <Image
          style={{
            height: 200,
            width: '100%',
          }}
          source={Imageroom}
        />
        <View style={{marginLeft: 5, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {data.name_hotel}
            {/* RedRoomz Sukasari near Mall Ekalosari */}
          </Text>
          <Text style={{fontSize: 14, color: 'grey'}}>
            {data.city} | {data.checkin.split('T')[0]} to {data.checkout.split('T')[0]}
            {/* Bogor | 30 Januari 2020 - 31 Januari 2020 */}
          </Text>
          <Text style={{fontSize: 14, color: 'grey'}}>{data.room} Room {nights()} Night(s)</Text>
          <Text style={{color: 'green', marginTop: 5}}>
            <MoIcon name="primitive-dot" style={{fontSize: 20}} /> Confirmed
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 40,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 40,
                width: 130,
                right: 20,
                backgroundColor: '#ddd',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontSize: 16}}>
                Online Check-in
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 130,
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 5,
                left: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 16}}>Pay Now</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}


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
            <TouchableOpacity
            onPress={()=> props.navigation.navigate('SearchHotels')}>

            <View style={{ backgroundColor: '#c00', height: 40, width: 120, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Start Exploring</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}


function Bookings(props) {
    useEffect(() => {
      props.dispatch(getBooking(props.auth.token))
    }, [props.booking.status, props.navigation])
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, height: 50, backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 21 }}>My Bookings</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <ScrollView>
                  {props.booking.data && props.booking.data.length===0 &&
                    <CenterBooking navigation={props.navigation} />
                  }
                  {props.booking.data && props.booking.data.map((v,i)=>
                    <ListBooking key={i} data={v} />
                  )}
                    {/* <ListBooking />
                    <ListBooking /> */}
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    booking: state.booking
  }
}

export default connect(mapStateToProps)(Bookings)

// export default Bookings