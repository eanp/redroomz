/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Header, Title, Body, Text, Content, Icon, Row, Right, Thumbnail, Left, ListItem, List, Button } from 'native-base';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/actions/getData';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

function RedCash(props) {

  useEffect(() => {
    props.dispatch(getHistory(props.auth.token))
  }, [props.navigation])

  return (
    <Container >
      {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
      <Header style={{ backgroundColor: '#fff' }} >
        <Left style={{ justifyContent: 'center', flex: 1 }}>
          <Icon onPress={() => props.navigation.goBack()}
            name="arrow-back" type='MaterialIcons' />
        </Left>
        <Body style={{ flex: 6 }}>
          <Title style={{ color: '#000', alignSelf: 'center' }} >RedCash Transaction</Title>
        </Body>
        <Right style={{ flex: 1 }} ></Right>
      </Header>
      <Content>
        <ListItem noBorder>
          <Left style={{ flex: 3 }}>
            <Body>
              <Text>My Red Cash</Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }} >{props.profile.data.saldo}</Text>
            </Body>
          </Left>
          <Right style={{ flex: 2 }}  >
            <Button danger transparent onPress={() => props.navigation.navigate('Payment')} >
              <Text style={{ textDecorationLine: 'underline' }}>Top Up</Text>
            </Button>
          </Right>
        </ListItem>
        <View style={{ height: 8, backgroundColor: '#f00', }} />
        <ListItem itemDivider>
          <Left>
            <Text note>All Transaction</Text>
          </Left>
          <Icon name='list' />
        </ListItem>
        {props.history.data && props.history.data.map((v, i) =>
          <ListItem key={i} >
            <Body style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>{v.description}</Text>
              <Text>{(v.name ) || ''}</Text>
              <Text note >Used On : {v.created_on.split('T')[0]}</Text>
            </Body>
            <Right style={{ flex: 1 }}>
              <Text style={{ color: v.saldo?'#0f0' :'#f00', fontSize: 12 }}>{v.saldo? '+': '-'} {v.total || v.saldo}</Text>
              <Text style={{ color: v.saldo?'#0f0' :'#f00', fontSize: 12 }}>{v.saldo? 'Top Up':'Used'}</Text>
            </Right>
          </ListItem>)}
        <ListItem >
          <Body style={{ flex: 3 }}>
            <Text style={{ fontWeight: 'bold' }}>Booking Hotel</Text>
            <Text>At hostel near mall 123</Text>
            <Text note >Used On : 24 Jan 2019</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Text style={{ color: '#f00', fontSize: 12 }}>+150000</Text>
            <Text style={{ color: '#f00', fontSize: 12 }}>Used</Text>
          </Right>
        </ListItem>
        <ListItem >
          <Body style={{ flex: 3 }}>
            <Text style={{ fontWeight: 'bold' }}>Reward</Text>
            <Text note >Used On : 24 Jan 2019</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Text style={{ color: '#0f0', fontSize: 12 }}>+150000</Text>
            <Text style={{ color: '#0f0', fontSize: 12 }}>Reward</Text>
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
}

const mapStateToProps = state => {

  return {
    auth: state.auth,
    profile:state.profile,
    history: state.history
  }
}

// export default RedCash;
export default connect(mapStateToProps)(RedCash)