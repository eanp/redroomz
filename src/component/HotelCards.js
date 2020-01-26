import React, { Fragment } from 'react'
import { Container, ListItem, Left, Body, Text, Thumbnail, Right } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Intl from 'intl'

function currencyFormat(num) {
   return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
 }

export default function HotelCard({data,...props}) {
   return (
      <Fragment>
         <ListItem button thumbnail style={{marginTop:16}} onPress={props.onPress} >
               <Left style={{ flex: 2, marginRight:10 }}>
                  {/* <Thumbnail square source={require('../assets/hotel1.jpg')} style={{height:128, width:128}} /> */}
                  <Thumbnail square source={{uri: data.image }} style={{height:128, width:128}} />
         </Left>
               <Body style={{ flex: 3 }}>
                  <Text numberOfLines={2} > {data.name} </Text>
                  <Text note style={{ fontSize: 8 }}>
                     <Icon name='location-pin' /> {data.city} </Text>
                  <Text style={{ fontSize: 8, color: '#0f0' }}>
                     <Icon name='location' /> 3.0 km away</Text>
                  <View style={{marginLeft:'auto'}}>
                     <Text style={{ fontSize: 8, color: '#e00' }}>20% Off</Text>
                     <Text note style={{ fontSize: 8, textDecorationLine: 'line-through' }}>
                        {currencyFormat(data.price*1.2)}</Text>
                     <Text>{currencyFormat(data.price)} </Text>
                  </View>
               </Body>
               <Right style={{ flex: 0 }}></Right>
         </ListItem>
         <View style={{ backgroundColor: '#ddd', borderRadius: 2, flex: 1, marginHorizontal:32}}>
            <Text style={{ fontSize: 10, color: '#e00', alignSelf:'center' }}>
               Rp 45.000 RedCash Apllied | Extra discount with RedClub
         </Text>
         </View>
      </Fragment>
   )
}
