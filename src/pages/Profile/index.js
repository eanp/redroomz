import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Badge, Thumbnail, Left, Right, Icon, Row, Button, Body, } from 'native-base';
import { ImageBackground, Image, View , StyleSheet} from 'react-native';


const style = StyleSheet.create({
  profile:{ fontWeight: 'bold', fontSize: 24, color: '#fff', marginTop: 'auto', marginBottom: 40, alignSelf: 'center' },
   cover: { height: 600, width: 600, borderRadius: 100, marginTop: -400, alignSelf: 'center' },
   picture:{ width: 80, height: 80, alignSelf: 'center', marginTop: -30 },
   edit:{ position: 'absolute', top: 150, right: 50  }
})

export default function Profile(props) {
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
               source={require('../../assets/banner.jpg')}
               borderRadius={40}
               style={style.picture}
            />

            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
               <Text>Nama pelanggan</Text>
               <Text note>email@gmail.com</Text>
               <Text note>+620888888888</Text>
            </View>

            <List>
               <ListItemSetting title='My RedCash' itemHeader onPress={()=>props.navigation.navigate('RedCash')} />
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
               <ListItemSetting title='Change Password' />
               <ListItemSetting title='Contact Us' />
               <ListItemSetting title='Logout' />               
            </List>
         </Content>
      </Container>
   );
}

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