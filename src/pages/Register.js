/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Modal } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Left, Right, Thumbnail, Row } from 'native-base';
import RNRecaptcha from 'rn-recaptcha';

import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function Register(props) {
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
      {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
        <Header transparent >
          <Left style={{ justifyContent: 'center', flex: 1 }}>
              <Icon name="arrow-back" type='MaterialIcons' />
            
          </Left>
          <Body style={{ justifyContent: 'center', flex: 6, }}>
            <Title style={{ marginLeft: 30, alignSelf: 'center' }} >
              <Thumbnail source={logo} small />
              <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 24 }}>Red</Text>
              <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 24 }}>Doorz</Text>
            </Title>
          </Body>
          <Right style={{ justifyContent: 'center', flex: 3 }} >
            <Button transparent style={{ marginTop: 10 }} >
              <Text style={{ color: '#666'}} note>Skip</Text>
            </Button>
          </Right>
        </Header>

        <Content padder>
        <Text style={{textAlign:'center', marginVertical:24}}>
          Sign Up Now And Get <Text style={{color:'red', fontWeight:'700'}}>
            150000 Red Cash
          </Text>
        </Text>
        <Row style={{ justifyContent: 'space-around' }}>
          <Button icon danger  >
            <Icon name='google' type='MaterialCommunityIcons' style={{fontSize:16}} />
            <Text>Google</Text>
          </Button>
          <Button iconLeft primary>
            <Icon name='facebook' type='MaterialCommunityIcons' style={{fontSize:16}} />
            <Text>Facebook</Text>
          </Button>
        </Row>


        <Row style={{marginTop:8, justifyContent:'center', alignItems:'center'}}>
           <Text style={{color:'#666'}} > - - - - - - - - - - - - - - - - </Text>
           <Text style={{color:'#666'}}>or SignUpwith</Text>
           <Text style={{color:'#666'}}> - - - - - - - - - - - - - - - - </Text>
        </Row>

          {/* FORM */}
        <Form style={{ marginBottom: 'auto', marginTop: 16, paddingRight: 16 }} >
          <Row >
            <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4, flex:1 }} >
              <Input placeholder="First Name"
                style={{ paddingLeft: 8, flex: 1 }}
                value={input.first_name}
                selectionColor={'#c00'}
                onChangeText={(e) => setInput({ ...input, first_name: e })}
              />
            </Item>
            <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4, flex:1 }} >
              <Input placeholder="Last Name"
                value={input.last_name}
                style={{ paddingLeft: 8, flex: 1, paddingLeft: 16 }}
                selectionColor={'#c00'}
                onChangeText={(e) => setInput({ ...input, last_name: e })}/>
            </Item>
          </Row>


          <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4 }} >
            <Input placeholder="Email ID"
              style={{ paddingLeft: 8 }}
              value={input.email}
              selectionColor={'#c00'}
              keyboardType='email-address'
              onChangeText={(e) => setInput({ ...input, email: e })}
            />
          </Item>
          <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4 }}>
            <Input secureTextEntry={true} placeholder="Enter Password"
              style={{ paddingLeft: 8 }}
              value={input.password}
              onChangeText={(e) => setInput({ ...input, password: e })}
            />
          </Item>
          <Item inlineLabel style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }} >
            <Label
              style={{ paddingLeft: 8 }}>+62</Label>
            <Input placeholder="Enter Phone Number"
              value={input.phone}
              selectionColor={'#c00'}
              keyboardType='phone-pad'
              onChangeText={(e) => setInput({ ...input, phone: e })}
            />
          </Item>

          {/* BUTTON */}
          <Button block danger
            onPress={() => postLogin()}
            style={{marginLeft:8, marginHorizontal:0 ,backgroundColor:'red' }}>
            <Text style={{ color: '#fff' }}> SignUp </Text>
          </Button>
        </Form>
        <Row style={{ justifyContent: 'center', marginTop: 60 }}>
          <Text style={{ alignSelf: 'baseline', paddingTop: 11,color: '#777' }} >
            Already have an Account ?
           </Text>
          <Button block dark transparent style={{ marginLeft: -10 }}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={{textDecorationLine:'underline'}} >
              Sign Here
             </Text>
          </Button>
        </Row>
      </Content>
      <ReactNativeModal isVisible={modalVisible}>
          <View style={{ flex: 1 }}>
            <Spinner />
            <Text>User has been created</Text>
            <Button onPress={()=>props.navigation.goBack()}>
              <Text>Login</Text>
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
export default Register