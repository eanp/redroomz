/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, Content, Icon, H1, Toast, Row, Right, Thumbnail, Left } from 'native-base';
import logo from '../assets/img/logo.png'
import { connect } from 'react-redux';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function Login(props) {
  const [input, setInput] = useState({})

//   useEffect(() => {
//     if (props.auth.token) {
//       props.navigation.navigate('Home')
//     } 
//   }, [props.auth.token])

  const postLogin = async ()=>{
   //  await props.dispatch(getAuth(input)
    props.navigation.navigate('Search')
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
      <Header transparent style={{alignItems:'baseline'}}>
          <Left>
            {/* <Button transparent>
              <Icon name="arrow-back" />
            </Button> */}
          </Left>
          <Body style={{ justifyContent:'center', flex:6, marginTop:'auto' }}>
             <Title style={{ marginLeft:30,marginTop:-15, alignSelf:'center'}} >
                <Thumbnail source={logo}  small />
               <Text style={{fontWeight:'bold', color:'#000', fontSize:24}}>Red</Text>
               <Text style={{fontWeight:'bold', color:'red',fontSize:24}}>Doorz</Text>
             </Title>
          </Body>
          <Right style={{justifyContent:'center', flex:2}} >
            <Button  transparent style={{marginTop:10}} >
              <Text style={{color:'#666'}}  >Skip</Text>
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Form style={{ marginBottom: 'auto', marginTop:16, paddingRight:16}} >
            <Item style={{ marginBottom: 16,backgroundColor:'#f9f9f9' }} >
              <Input placeholder="Email ID"
                style={{ paddingLeft:8 }} 
                value={input.email}
                selectionColor={'#c00'}
                keyboardType='email-address'
                onChangeText={(e)=>setInput({...input,email:e})}
                />
            </Item>
            <Item  style={{ marginBottom: 16, backgroundColor:'#f9f9f9' }}>
              <Input secureTextEntry={true} placeholder="Password"
                style={{ paddingLeft:8 }} 
                value={input.password}
                onChangeText={(e)=>setInput({...input,password:e})}
                />
            </Item>
  
            <Button dark transparent  
            onPress={() => props.navigation.navigate('ForgotPass')}
              style={{ marginBottom: 8,marginLeft:'auto'}}>
                <Text style={{color: '#777'}}> Forgot Password ? </Text>
            </Button>
            <Button block 
            onPress={() =>postLogin() }
            style={{ marginBottom: 16, marginHorizontal: 10,borderRadius: 4, backgroundColor:'red' }}>
              <Text style={{color:'#fff'}}> SignIn </Text>
            </Button>
          </Form>
  
          
          <Row style={{justifyContent:'center', alignItems:'center'}}>
             <Text style={{color:'#666'}} > - - - - - - - - - - - - - - - - </Text>
             <Text style={{color:'#666'}}>or SignIn with</Text>
             <Text style={{color:'#666'}}> - - - - - - - - - - - - - - - - </Text>
          </Row>
  
  
          <Row style={{justifyContent:'space-around',marginTop:16}}>
          <Button icon danger style={{borderRadius: 4}} >
              <Icon name='google' type='MaterialCommunityIcons' style={{fontSize:16}} />
              <Text>Google</Text>
            </Button>
          <Button iconLeft primary style={{borderRadius: 4}}>
              <Icon name='facebook' type='MaterialCommunityIcons' style={{fontSize:16}} />
              <Text>Facebook</Text>
            </Button>
          </Row>
          <Row style={{justifyContent:'center', marginTop:120}}>
             <Text style={{alignSelf:'baseline', paddingTop:11,color: '#777',}} >
             Dont have Account ? 
             </Text>
             <Button block dark transparent style={{marginLeft:-10}}
               onPress={() => props.navigation.navigate('Register')}> 
               <Text style={{textDecorationLine:'underline'}}>
                  Sign Here 
               </Text>
             </Button>
          </Row>
        </Content>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth
  }
}

export default Login
// export default connect(mapStateToProps)(Login)