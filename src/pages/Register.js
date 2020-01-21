/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast } from 'native-base';
import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function Register (props) {
  const [input, setInput] = useState({})

//   useEffect(() => {
//     if (props.auth.token) {
//       props.navigation.navigate('Home')
//     } 
//   }, [props.auth.token])

  const postLogin = async ()=>{
   //  await props.dispatch(getAuth(input))
    console.log(props.auth)
    if(props.auth.status.success) props.navigation.navigate('Home')
    else if(props.auth.isError) {Toast.show({
      text: "Terdapat Error di database",
      buttonText: "Okay",
      duration: 2000
    })} else if (!(props.auth.status.success)) Toast.show({
      text: props.auth.status.msg,
      buttonText: "Okay",
      duration: 2000
    })
  }
  return (
    <Container >
      {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
      <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
             <Image source={logo} />
            <Title style={{fontWeight:'bold'}}>Red</Title>
            <Title style={{fontWeight:'bold', color:'red'}}>Doorz</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Skip</Text>
            </Button>
          </Right>
        </Header>

        <Content>
           <Form style={{ marginBottom: 'auto', marginTop:16 }} >
             <Row>
                <Item block regular style={{ marginBottom: 16,backgroundColor:'#eee' }} >
                  <Input placeholder="First Name"
                    value={input.email}
                    selectionColor={'red'}
                    keyboardType='email-address'
                    onChangeText={(e)=>setInput({...input,username:e})}
                    />
                </Item>
                <Item block style={{ marginBottom: 16,backgroundColor:'#eee' }} >
                  <Input placeholder="LastName"
                    value={input.email}
                    selectionColor={'red'}
                    keyboardType='email-address'
                    onChangeText={(e)=>setInput({...input,username:e})}
                    />
             </Item>
             </Row>
             <Item style={{ marginBottom: 16, backgroundColor:'#eee' }}>
               <Input secureTextEntry={true} placeholder="Enter Password"
                 value={input.password}
                 onChangeText={(e)=>setInput({...input,password:e})}
                 />
             </Item>
             <Item style={{ marginBottom: 16, backgroundColor:'#eee' }}>
               <Input secureTextEntry={true} placeholder="Password"
                 style={{ textAlign: 'center' }} 
                 value={input.password}
                 onChangeText={(e)=>setInput({...input,password:e})}
                 />
             </Item>

             <Button block danger
             onPress={() =>postLogin() }
             style={{ paddingBottom: 4, marginHorizontal: 50 }}>
               <Text style={{color:'#fff'}}> SignUp </Text>
             </Button>
           </Form>
           <Text >
           Already have an Account? 
           <Button block primary transparent
             onPress={() => props.navigation.navigate('Login')}> 
             <Text>
                SignIn 
             </Text>
           </Button>
           </Text>
        </Content>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Register)