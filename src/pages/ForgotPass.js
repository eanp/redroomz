/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row, Spinner } from 'native-base';
import RNRecaptcha from 'rn-recaptcha';

import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';
import ReactNativeModal from 'react-native-modal';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function ForgotPass(props) {
  const [input, setInput] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const postLogin = async () => {
    //  await props.dispatch(getAuth(input))
    setModalVisible(true)
    console.log(props.auth)
    if (props.auth.status.success) props.navigation.navigate('Home')
    else if (props.auth.isError) {
      Toast.show({
        text: "Terdapat Error di database",
        buttonText: "Okay",
        duration: 2000
      })
    } else if (!(props.auth.status.success)) Toast.show({
      text: props.auth.status.msg,
      buttonText: "Okay",
      duration: 2000
    })
  }

  return (
    <Container >
      <Header transparent >
        <Left style={{ justifyContent: 'center', flex: 1 }}>
          <Icon name="arrow-back" type='MaterialIcons' />

        </Left>
        <Body style={{ justifyContent: 'center', flex: 6, marginTop: 30 }}>
          <Title style={{ marginLeft: 30, alignSelf: 'center' }} >
            <Thumbnail source={logo} small />
            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 24 }}>Red</Text>
            <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 24 }}>Doorz</Text>
          </Title>
        </Body>
        <Right style={{ justifyContent: 'center', flex: 2 }} >
        </Right>
      </Header>
      <Content padder>

        <Text style={{ textAlign: 'center', marginTop: 48, color: '#666', fontSize: 18 }}>
          Forgot Your Password ?
          </Text>
        <Text style={{ textAlign: 'center', marginVertical: 4, color: '#666', fontSize: 18 }}>
          Enter Your Email below to reset your password
          </Text>



        <Form style={{ marginBottom: 'auto', marginTop: 48, paddingRight: 16 }} >
          <Item stackedLabel style={{ marginBottom: 16, borderRadius: 4 }} >
            <Label style={{ color: 'red' }} >Email Address</Label>
            <Input
              style={{ paddingLeft: 8, borderBottomColor: 'red', borderBottomWidth: 0.5 }}
              value={input.email}
              selectionColor={'#c00'}
              keyboardType='email-address'
              onChangeText={(e) => setInput({ ...input, email: e })}
            />
          </Item>

          <Button block rounded danger
            onPress={postLogin}
            style={{ paddingBottom: 4, marginHorizontal: 8, backgroundColor:'red' }}>
            <Text style={{ color: '#fff' }}> Send </Text>
          </Button>
        </Form>
      </Content>
      <ReactNativeModal isVisible={modalVisible}>
          <View style={{ flex: 1 }}>
            <Spinner />
            <Text>Change password instruction has been send to your email</Text>
            <Button onPress={()=>props.navigation.goBack()}>
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
export default ForgotPass