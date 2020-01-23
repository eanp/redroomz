/* eslint-disable prettier/prettier */
import React, { Component, Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Container, Header, Title, Body, Item, Form, Label, Input, Text, DatePicker ,Content, Icon, H1, Toast, Row, Right, Thumbnail, Left } from 'native-base';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function EditProfile(props) {
  const [input, setInput] = useState({})

  const postLogin = async () => {
    //  await props.dispatch(getAuth(input)
    props.navigation.navigate('Search')
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
      <Header style={{backgroundColor:'#fff'}} >
            <Left style={{ justifyContent: 'center',flex:1 }}>
               <Icon onPress={() => props.navigation.goBack()}
                  name="arrow-back" type='MaterialIcons' />
            </Left>
            <Body style={{  flex: 2 }}>
               <Title style={{color:'#000', alignSelf:'center'}} >Edit Profil</Title>
            </Body>
            <Right style={{ justifyContent: 'center', flex: 1 }} >
              <Text style={{color:'red'}}>Save</Text>
            </Right>
         </Header>

      <Content padder>
        <Form style={{ marginBottom: 'auto', marginTop: 16, paddingRight: 16, justifyContent:'flex-start' }} >
          <Text style={{marginLeft:12}}>Full Name</Text>
          <Row >
            <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4, flex: 1 }} >
              <Input placeholder="First Name"
                style={{ paddingLeft: 8, flex: 1 }}
                value={input.first_name}
                selectionColor={'#c00'}
                onChangeText={(e) => setInput({ ...input, first_name: e })}
              />
            </Item>
            <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4, flex: 1 }} >
              <Input placeholder="Last Name"
                value={input.last_name}
                style={{ paddingLeft: 8, flex: 1, paddingLeft: 16 }}
                selectionColor={'#c00'}
                onChangeText={(e) => setInput({ ...input, last_name: e })} />
            </Item>
          </Row>

          <Text style={{marginLeft:12}}>Phone</Text>
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

          <Text style={{marginLeft:12}}>Birthday</Text>
          <Item  style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }} >
          <DatePicker
            maximumDate={new Date(2000, 12, 31)}
            locale={"en"}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Not Set Yet"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            // onDateChange={setDate}
            />
            <Icon name='chevron-down' style={{marginLeft:'auto'}}type='MaterialCommunityIcons'/>
          </Item>

          <Text style={{marginLeft:12}}>Password</Text>
          <Item inlineLabel style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }}
          onPress={()=>props.navigation.navigate('ChangePassword')} >
            <Input secureTextEntry={true} placeholder="Password"
              style={{ paddingLeft: 8 }} disabled
              value={input.password}
              onChangeText={(e) => setInput({ ...input, password: e })}
            />
            <Label style={{color:'red'}}>Edit</Label>
          </Item>
        </Form>
      </Content>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth
  }
}

export default EditProfile;
// export default connect(mapStateToProps)(Login)