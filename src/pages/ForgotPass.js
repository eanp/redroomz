/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row, Spinner } from 'native-base';

import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import Axios from 'axios';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  inputText: {
    marginBottom: 16, paddingBottom: 8, borderColor: 'red'
  }
});

function ForgotPass(props) {
  const [input, setInput] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const postForgot = async () => {
    const res = await Axios({
      method: 'post',
      url: `http://3.90.3.168:3000/forgot_password`,
      data: input,
    })
    setModalVisible(true)
    console.log(res.data)
    if (res.data.success) props.navigation.goBack()
  }

  return (
    <Container >
      <Header transparent >
        <Left style={{ justifyContent: 'center', flex: 1 }}>
          <Icon onPress={() => props.navigation.goBack()}
            name="arrow-back" type='MaterialIcons' />

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

        <Form style={{ marginBottom: 'auto', marginTop: 48, }} >
          <Item floatingLabel style={style.inputText} >
            <Label style={{ color: 'red' }} >Email Address</Label>
            <Input
              value={input.email}
              selectionColor={'#c00'}
              keyboardType='email-address'
              onChangeText={(e) => setInput({ ...input, email: e })}
            />
          </Item>

          <Button block rounded danger
            onPress={postForgot}
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
            onPress={() => { setModalVisible(false); props.navigation.goBack() }}>
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

export default connect(mapStateToProps)(ForgotPass)
// export default ForgotPass