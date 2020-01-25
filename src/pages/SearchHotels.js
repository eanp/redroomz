
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, Modal, Slider } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Button, Header, Left, Body, List, Form, Label
} from 'native-base'

import HotelCard from '../component/HotelCard';
import { connect } from 'react-redux';
// import ReactNativeModal from 'react-native-modal';


function SearchHotels(props) {

   const [query, setQuery] = useState({})
   const [modalVisible, setModalVisible] = useState(false)
   // useEffect(() => {
   //    props.dispatch(getItems(query))

   //  }, [query])
   let inputquery = {};
   return (
      <Container>
         <Header searchBar transparent style={{ backgroundColor: '#fff' }} >
            <Left style={{ justifyContent: 'center', flex: 1 }}>
               <Icon onPress={() => props.navigation.goBack()}
                  name="arrow-back" type='MaterialIcons' />
            </Left>
            <Body style={{ flex: 8 }}>
               <Item regular style={{ backgroundColor: '#eee', height: '70%', borderRadius: 4 }}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search For City, Landmark or property" onChangeText={((v) => inputquery = { name: v })} />
                  <Button danger transparent
                     onPress={() => setQuery(inputquery)} ><Text>
                        Searh
            </Text></Button>
               </Item>
            </Body>
         </Header>
         <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Text note style={{ fontSize: 12 }}>---------------------------</Text>
            <Text style={{
               borderRadius: 10, borderWidth: 0.5, borderColor: '#ddd',
               width: 'auto', paddingHorizontal: 12, paddingVertical: 2, fontSize: 10
            }} >
               Price(Tax Included): 1Room(s) for 1 Night(s)</Text>
            <Text note style={{ fontSize: 12 }}>---------------------------</Text>
         </View>
         <Content>
            <List>
               <HotelCard onPress={()=>props.navigation.navigate('DetailHotel')} />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
               <HotelCard />
            </List>
         </Content>
         <Button dark rounded onPress={() => setModalVisible(true)} style={{ marginHorizontal: 48, marginTop: -48, marginBottom: 16, }}>
            {/* <Row style={{position:'absolute' ,zIndex:999}} > */}

            <Text style={{ fontSize: 12, alignSelf: 'center', }}>
               <Icon name='filter' type='MaterialCommunityIcons' style={{ fontSize: 12, color: '#fff' }} />
               Sort & Filter | {'  '}
               <Icon name='location' type='Entypo' style={{ fontSize: 12, color: '#fff' }} />
               Location | {'  '}
               <Icon name='map' type='Entypo' style={{ fontSize: 12, color: '#fff' }} />
               Map</Text>
            {/* </Row> */}
         </Button>
         <Modal
            visible={modalVisible}
            style={{ backgroundColor: '#fff', padding: 32 }}
            onRequestClose={() => setModalVisible(false)}>
               <FormModal setModalVisible={setModalVisible} />
         </Modal>

      </Container>
   );
};

function FormModal({setModalVisible, ...props }) {
   return (
      <Form style={{ padding: 16, flex: 1, marginTop: 60 }}>

         <Label>Price</Label>
         <Slider
            style={{ height: 30 }}
            minimumValue={100000}
            maximumValue={400000}
            step={50000}
            thumbTintColor='#f00'
            minimumTrackTintColor="#F00"
            maximumTrackTintColor="#000000"
         />
         <Text>Harga IDR </Text>

         <Label style={{ marginTop: 16 }}>Sort By</Label>
         <Picker
            style={{ borderWidth: 1, borderColor: '#111' }}
            // selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
               console.log({ sort: itemValue })
            }>
            <Picker.Item label="All" value={null} />
            <Picker.Item label="Name" value="name" />
            <Picker.Item label="Lokasi" value="location" />
            <Picker.Item label="Lokasi" value="location" />
         </Picker>

         <Text style={{ marginTop: 16 }}>Property Type</Text>
         <Row style={{ height: 'auto', marginVertical: 12 }}>
            <View style={{ borderWidth: 1, borderColor: '#f11', flex: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
               <Button danger transparent active><Text>All</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#f11', flex: 1 }}>
               <Button danger transparent active><Text>All</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#f11', flex: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
               <Button danger transparent active><Text>All</Text></Button>
            </View>
         </Row>


         <Text style={{ marginTop: 16 }}>Payment Method</Text>
         <Row style={{ height: 'auto', marginVertical: 12 }}>
            <View style={{ borderWidth: 1, borderColor: '#f11', flex: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
               <Button danger transparent active><Text>Pay At Hotel</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#f11', flex: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
               <Button danger transparent active><Text>Red Cash</Text></Button>
            </View>
         </Row>

         <Row style={{}}>
            <Button bordered danger onPress={() => setModalVisible(false)}
               style={{ flex: 1, marginHorizontal: 8 }}>
               <Text>Cancel</Text>
            </Button>
            <Button danger onPress={() => setModalVisible(false)}
               style={{ flex: 1, marginHorizontal: 8 }}>
               <Text>Save</Text>
            </Button>
         </Row>
      </Form>

   )
}

// const mapStateToProps = state => {
//    return {
//       auth: state.auth,
//    }
// }

//  export default connect(mapStateToProps)(SearchHotels)
export default SearchHotels;