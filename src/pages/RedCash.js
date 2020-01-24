/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {  StyleSheet, Image } from 'react-native';
import {  Container, Header, Title, Body, Item, Form, Label, Input, Text, DatePicker, Content, Icon, H1, Toast, Row, Right, Thumbnail, Left } from 'native-base';
import { connect } from 'react-redux';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function RedCash(props) {
  return (
    <Container >
      {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
      <Header style={{ backgroundColor: '#fff' }} >
        <Left style={{ justifyContent: 'center', flex: 1 }}>
          <Icon onPress={() => props.navigation.goBack()}
            name="arrow-back" type='MaterialIcons' />
        </Left>
        <Body style={{ flex: 2 }}>
          <Title style={{ color: '#000', alignSelf: 'center' }} >RedCash Transaction</Title>
        </Body>
        <Right style={{ justifyContent: 'center', flex: 1 }} >
        </Right>
      </Header>
      <Content padder>
        
         
      </Content>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth
  }
}

export default RedCash;
// export default connect(mapStateToProps)(Login)