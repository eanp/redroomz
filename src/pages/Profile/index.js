import React, { Component, useEffect } from 'react';
import { Container, Header, Content, List, ListItem, Text, Badge, Thumbnail, Left, Right, Icon, Row, Button, Body, } from 'native-base';
import { ImageBackground, Image, View , StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { postLogout } from '../../redux/actions/postData';
import { getProfile } from '../../redux/actions/getData';


const style = StyleSheet.create({
  profile:{ fontWeight: 'bold', fontSize: 24, color: '#fff', marginTop: 'auto', marginBottom: 40, alignSelf: 'center' },
   cover: { height: 600, width: 600, borderRadius: 100, marginTop: -400, alignSelf: 'center' },
   picture:{ width: 80, height: 80, alignSelf: 'center', marginTop: -30 },
   edit:{ position: 'absolute', top: 150, right: 50 , zIndex:999 }
})

function Profile(props) {

   useEffect(() => {
      props.dispatch(getProfile(props.auth.token))
   }, [])

   const logOut = async() => {
      console.log('h')
      await props.dispatch(postLogout(props.auth.token))
      console.log(props.auth)
      // props.navigation.navigate('Login')
      if (props.auth.status.success) {
         props.navigation.navigate('Login')
      } 
   }

   return (
      <Container>
         <Content>
            <Button light rounded icon style={style.edit}
            onPress={()=> props.navigation.navigate('EditProfile')} >
               <Icon name='edit' type='MaterialIcons' />
            </Button>
            <ImageBackground
               imageStyle={{ borderRadius: 300 }}
               source={require('../../assets/banner.jpg')}
               style={style.cover}>
               <Text style={style.profile}>
                  Profile</Text>
            </ImageBackground>
            <Image
               source={{uri:props.profile.data.image}}
               // source={require('../../assets/banner.jpg')}
               borderRadius={40}
               style={style.picture}
            />

            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
               <Text>{props.profile.data.name}</Text>
               <Text note>{props.profile.data.email}</Text>
               <Text note>{props.profile.data.no_hp}</Text>
            </View>

            <List>
               <ListItemSetting title={'My RedCash '+ props.profile.data.saldo} itemHeader onPress={()=>props.navigation.navigate('RedCash')} />
               <ListItemSetting title='Loyalty Program' 
                  left={<Badge danger ><Text>New</Text></Badge>} />
               <ListItemSetting title='Choose Default Payment Method' />
               <ListItemSetting title='Become a RedClub Member' />
               <ListItemSetting title='Country & Language'
                  right={ <>
                     <Thumbnail source={require('../../assets/indoflag.png')} style={{ height: '100%' }} />
                     <Text>English</Text>
                     </>
               } />
               <ListItemSetting title='Currency'
                  right={<Text style={{ fontWeight: 'bold' }}>Indonesian Rupiah</Text>} />
               <ListItemSetting title='Refer And Earn' />
               <ListItemSetting title='Change Password' onPress={()=>props.navigation.navigate('ChangePassword')} />
               <ListItemSetting title='Contact Us' />
               {/* <ListItemSetting title='Logout' onPress={()=>props.navigation.navigate('Login')} />                */}
               <ListItemSetting title='Logout' onPress={()=>logOut()} />               
            </List>
         </Content>
      </Container>
   );
}
const mapStateToProps = state => {

   return {
     auth: state.auth,
     profile: state.profile
   }
 }
 
 export default connect(mapStateToProps)(Profile)

function ListItemSetting({ title,left, right, ...props }) {
   return (
      <ListItem button {...props} >
         <Left style={right && { flexGrow: 10 }}>
            <Text>{title}</Text>
            {left}
         </Left>
         <Right style={right && { flexGrow: 10 }} >
            <Row>
               {right}
               <Icon name="chevron-right" type='MaterialIcons' style={{ color: '#f00' }} />
            </Row>
         </Right>
      </ListItem>
   )
}