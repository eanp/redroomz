/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, } from 'react-native';
import { Container, Header, Title, Body, Text, Content, Icon, Row, Right, Thumbnail, Left, ListItem, List, CheckBox, Button, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import Axios from 'axios';
import { getProfile, getHistory } from '../../redux/actions/getData';

const style = StyleSheet.create({
   root: {
      flex: 1,
      padding: 16,
      justifyContent: 'center'
   },
});

function Payment(props) {
   const [total, setTotal] = useState(0)

   async function topUp() {
      const res = await Axios({
         method:'post',
         url: `http://3.90.3.168:3000/topup`,
         data: {saldo:total} ,
         headers: { 'Authorization': 'Bearer ' + props.auth.token }
      })
      console.log(res)
      console.log(res.data)
      if (res.data.success) {
         props.dispatch(getHistory(props.auth.token))
         props.dispatch(getProfile(props.auth.token))
         props.navigation.goBack()
      } else alert(res.data.data.status.msg)
   }
   console.log(total)
   return (
      <Container >
         {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
         <Header style={{ backgroundColor: '#fff' }} >
            <Left style={{ justifyContent: 'center', flex: 1 }}>
               <Icon onPress={() => props.navigation.goBack()}
                  name="arrow-back" type='MaterialIcons' />
            </Left>
            <Body style={{ flex: 6 }}>
               <Title style={{ color: '#000', alignSelf: 'center' }} >Payment Method</Title>
            </Body>
            <Right style={{ flex: 1 }} ></Right>
         </Header>
         <Content>
            <ListItem noBorder>
            <Text style={{marginVertical: 0}}>
               Choose Paynment options below as top up Payment Redcash
            </Text>
            </ListItem>
            <ListItem>
               <CheckBox checked={true} color="#f00" />
               <Body>
                  <Text>BCA</Text>
               </Body>
            </ListItem>
            <ListItem>
               <CheckBox checked={false} color="#f00" />
               <Body>
                  <Text>Mandiri</Text>
               </Body>
            </ListItem>
            <ListItem>
               <CheckBox  color="#f00" />
               <Body>
                  <Text>Alfamart</Text>
               </Body>
            </ListItem>

            <ListItem>
               <Item floatingLabel style={{ marginVertical: 24 }}>
                  <Label>Total</Label>
                  <Input
                     value={total && `${total}`}
                     onChangeText={(e) => setTotal(e)}
                     selectionColor={'#c00'}
                     keyboardType='number-pad' />
               </Item>
            </ListItem>

            <Button danger style={{ borderRadius: 4, justifyContent: 'center',
             marginHorizontal: 16, }}
             onPress={topUp} >
               <Text style={{ alignSelf: 'center' }}>Send</Text>
            </Button>
         </Content>
      </Container>
   );
}

const mapStateToProps = state => {

   return {
      auth: state.auth
      , profile: state.profile
   }
}

// export default Payment;
export default connect(mapStateToProps)(Payment)