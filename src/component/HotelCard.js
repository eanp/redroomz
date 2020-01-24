import React, { Fragment } from 'react'
import { Container, ListItem, Left, Body, Text, Thumbnail, Right } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default function HotelCard() {
   return (
      <Fragment>
         <ListItem button thumbnail style={{marginTop:16}}>
               <Left style={{ flex: 2, marginRight:10 }}>
                  <Thumbnail square source={require('../assets/hotel1.jpg')} style={{height:128, width:128}} />
         </Left>
               <Body style={{ flex: 3 }}>
                  <Text numberOfLines={2} >Sankhadeep</Text>
                  <Text note style={{ fontSize: 8 }}>
                     <Icon name='location-pin' /> Jakarta</Text>
                  <Text style={{ fontSize: 8, color: '#0f0' }}>
                     <Icon name='location' /> 3.0 km away</Text>
                  <View style={{marginLeft:'auto'}}>
                     <Text style={{ fontSize: 8, color: '#e00' }}>18% Off</Text>
                     <Text note style={{ fontSize: 8, textDecorationLine: 'line-through' }}>
                        Rp 229.000</Text>
                     <Text>Rp 184.000</Text>
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
