
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, Modal, Slider } from 'react-native';
import {
   Icon, Container, Content, Text, Row, Item, Input, Button, Header, Left, Body, List, Form, Label, Spinner
} from 'native-base'

import HotelCard from '../component/HotelCards';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { getHotels } from '../redux/actions/getData';
import { set } from 'react-native-reanimated';
// import ReactNativeModal from 'react-native-modal';


function SearchHotels(props) {

   const [query, setQuery] = useState({})
   const [modalVisible, setModalVisible] = useState(false)
   useEffect(() => {
      props.dispatch(getHotels(query))
    }, [query])
   let inputquery = {};
   console.log(query)

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
                  <Input placeholder="Search For City, Landmark or property" 
                  onChangeText={((v) => inputquery= {...query, search:v} )} />
                  <Button danger transparent
                     onPress={() => setQuery(inputquery)} ><Text>
                        Search
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
               {props.hotelList.isLoading && 
               <><Spinner /></>}

               {!(props.hotelList.isLoading) && props.hotelList.data.data && props.hotelList.data.data.map((v,i)=>

               <HotelCard key={i} onPress={()=>props.navigation.navigate('DetailHotel', {data:v})} data={v} />
               ) }
            </List>
         </Content>
         <Button dark rounded onPress={() => setModalVisible(true)} style={{ marginHorizontal: 48, marginTop: -48, marginBottom: 16, }}>
            <Text style={{ fontSize: 12, alignSelf: 'center', }}>
               <Icon name='filter' type='MaterialCommunityIcons' style={{ fontSize: 12, color: '#fff' }} />
               Sort & Filter | {'  '}
               <Icon name='location' type='Entypo' style={{ fontSize: 12, color: '#fff' }} />
               Location | {'  '}
               <Icon name='map' type='Entypo' style={{ fontSize: 12, color: '#fff' }} />
               Map</Text>
         </Button>
         <Modal
            visible={modalVisible}
            style={{ backgroundColor: '#fff', padding: 32 }}
            onRequestClose={() => setModalVisible(false)}>
               <FormModal setModalVisible={setModalVisible} setQuery={setQuery} />
         </Modal>

      </Container>
   );
};

function FormModal({setModalVisible,setQuery, ...props }) {
   const [inputquery, setInputquery] = useState({})
   return (
      <Form style={{ padding: 16, flex: 1, marginTop: 20 }}>

         <Label>Price</Label>
         <Slider
            style={{ height: 30 }}
            minimumValue={100000}
            maximumValue={400000}
            step={50000}
            thumbTintColor='#f00'
            minimumTrackTintColor="#F00"
            maximumTrackTintColor="#000000"
            onValueChange={(v)=> setInputquery({...inputquery, price:v}) }
         />
         <Text>Harga IDR {inputquery.price} </Text>

         <Label style={{ marginTop: 16 }}>Sort By</Label>
         <Picker
            style={{ borderWidth: 1, borderColor: '#111' }}
            selectedValue={inputquery.by}
            onValueChange={(itemValue, itemIndex) =>
               setInputquery({...inputquery,by:itemValue})
            }>
            <Picker.Item label="All" value={null} />
            <Picker.Item label="name" value="name" />
            <Picker.Item label="city" value="city" />
            <Picker.Item label="price" value="price" />
         </Picker>

         <Text style={{ marginTop: 16 }}>Sort</Text>
         <Row style={{ height: 'auto', marginVertical: 12 }}>
            <View style={{ borderWidth: 1, borderColor: inputquery.sort==='asc'? '#f11':'#000',
             flex: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
               <Button danger={inputquery.sort==='asc'} dark={inputquery.sort!=='asc'} transparent active
               onPress={()=>setInputquery({...inputquery, sort:'asc'})}
               ><Text>Asc</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: inputquery.sort==='desc'? '#f11':'#000',
            flex: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
               <Button danger={inputquery.sort==='desc'} dark={inputquery.sort!=='desc'} transparent active
               onPress={()=>setInputquery({...inputquery,sort:'desc'})}
               ><Text>Desc</Text></Button>
            </View>
         </Row>

         <Text style={{ marginTop: 16 }}>Property Type</Text>
         <Row style={{ height: 'auto', marginVertical: 12 }}>
            <View style={{ borderWidth: 1, borderColor: '#000', flex: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
               <Button  dark transparent active><Text>All</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#000', flex: 1 }}>
               <Button  dark transparent active><Text>Hotel</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#000', flex: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
               <Button  dark transparent active><Text>Co living</Text></Button>
            </View>
         </Row>


         <Text style={{ marginTop: 16 }}>Payment Method</Text>
         <Row style={{ height: 'auto', marginVertical: 12 }}>
            <View style={{ borderWidth: 1, borderColor: '#000', flex: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
               <Button dark transparent active><Text>Pay At Hotel</Text></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#000', flex: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
               <Button dark transparent active><Text>Red Cash</Text></Button>
            </View>
         </Row>

         <Row style={{marginTop:16}}>
            <Button bordered danger onPress={() => setModalVisible(false)}
               style={{ flex: 1, marginHorizontal: 8 }}>
               <Text>Cancel</Text>
            </Button>
            <Button danger onPress={() => {setModalVisible(false); setQuery(inputquery)}}
               style={{ flex: 1, marginHorizontal: 8 }}>
               <Text>Save</Text>
            </Button>
         </Row>
      </Form>

   )
}

const mapStateToProps = state => {
   return {
      hotelList: state.hotelList,
   }
}

 export default connect(mapStateToProps)(SearchHotels)
// export default SearchHotels;