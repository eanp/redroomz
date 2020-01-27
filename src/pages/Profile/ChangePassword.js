/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row, Spinner } from 'native-base';
import RNRecaptcha from 'rn-recaptcha';

import { connect } from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import Axios from 'axios';
import { postLogout } from '../../redux/actions/postData';

const style = StyleSheet.create({
   root: {
      flex: 1,
      padding: 16,
      justifyContent: 'center'
   },
   inputText:{
      marginBottom: 16,  paddingBottom:8, borderColor:'red'
   }
});

function ChangePassword(props) {
   const [input, setInput] = useState({})
   const [modalVisible, setModalVisible] = useState(false)

   

   async function postChange() {
      if (input.password !== input.confirmPassword) {
         alert('pasword tidak sesuai')
         return;
      }
      const res = await Axios({
         method:'put',
         url: `http://3.90.3.168:3000/profile/change_password`,
         data: input ,
         headers: { 'Authorization': 'Bearer ' + props.auth.token }
      })
      console.log(res)
      console.log(res.data)
      if (res.data.success) {
         alert('sukses')
         await props.dispatch(postLogout(props.auth.token))
         if (props.auth.status.success) {
            props.navigation.navigate('Login')
         } 
      } else alert(res.data.msg)
   }

   return (
      <Container >
         <Header style={{backgroundColor:'#fff'}} >
            <Left style={{ justifyContent: 'center',flex:1 }}>
               <Icon onPress={() => props.navigation.goBack()}
                  name="arrow-back" type='MaterialIcons' />
            </Left>
            <Body style={{  flex: 2 }}>
               <Title style={{color:'#000', alignSelf:'center'}} >
                  Change Password</Title>
            </Body>
            <Right style={{ justifyContent: 'center', flex: 1 }} >
            </Right>
         </Header>
         <Content padder>
            <Form  >
               <Item floatingLabel style={style.inputText}>
                  <Label>Enter Old Password</Label>
                  <Input
                     value={input.oldPassword}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, oldPassword: e })}
                  />
                  <Icon active name='eye' />
               </Item>
               <Item floatingLabel style={style.inputText}>
                  <Label>Password</Label>
                  <Input
                     value={input.newPassword}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, password: e })}
                  />
                  <Icon active name='eye' />
               </Item>
               <Item floatingLabel style={style.inputText}>
                  <Label>Confirm Password</Label>
                  <Input
                     value={input.confirmPassword}
                     selectionColor={'#c00'}
                     secureTextEntry={true}
                     onChangeText={(e) => setInput({ ...input, confirmPassword: e })}
                  />
                  <Icon active name='eye' />
               </Item>

               <Button block rounded danger
                  onPress={postChange}
                  style={{ paddingBottom: 4, marginHorizontal: 8, backgroundColor: 'red' }}>
                  <Text style={{ color: '#fff' }}> Send </Text>
               </Button>
            </Form>
         </Content>
         <ReactNativeModal isVisible={modalVisible}  >
            {props.auth.isLoading && <View style={{}}>
               <Spinner />
            </View>}

            {!(props.auth.isLoading) && <View style={{ backgroundColor: '#eee', padding: 16, }}>
               <Text>Change password instruction has been send to your email</Text>
               <Button style={{ borderRadius: 4, backgroundColor: 'red' }}
                  onPress={() => {setModalVisible(false); props.navigation.goBack()}}>
                  <Text>finish</Text>
               </Button>
            </View>}
         </ReactNativeModal>

      </Container>
   );
}

const mapStateToProps = state => {

   return {
      auth: state.auth
   }
}

export default connect(mapStateToProps)(ChangePassword)
// export default ChangePassword