/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row, Spinner } from 'native-base';
import RNRecaptcha from 'rn-recaptcha';

import { connect } from 'react-redux';
import ReactNativeModal from 'react-native-modal';

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

   const postLogin = async () => {
      //  await props.dispatch(getAuth(input))
      setModalVisible(true)
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
                     onChangeText={(e) => setInput({ ...input, newPassword: e })}
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
                  onPress={postLogin}
                  style={{ paddingBottom: 4, marginHorizontal: 8, backgroundColor: 'red' }}>
                  <Text style={{ color: '#fff' }}> Send </Text>
               </Button>
            </Form>
         </Content>
         <ReactNativeModal isVisible={modalVisible}  >
            <View style={{}}>
               <Spinner />
            </View>

            <View style={{ backgroundColor: '#eee', padding: 16, }}>
               <Text>Change password instruction has been send to your email</Text>
               <Button style={{ borderRadius: 4, backgroundColor: 'red' }}
                  onPress={() => setModalVisible(false)}>
                  <Text>finish</Text>
               </Button>
            </View>
         </ReactNativeModal>

      </Container>
   );
}

const mapStateToProps = state => {

   return {
      auth: state.auth
   }
}

// export default connect(mapStateToProps)(Register)
export default ChangePassword