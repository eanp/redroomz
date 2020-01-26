/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Body, Item, Form, Label, Input, Text, DatePicker, Content, Icon, H1, Toast, Row, Right, Thumbnail, Left, Button } from 'native-base';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { postProfile } from '../../redux/actions/postData';
import Axios from 'axios';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  picture: { width: 80, height: 80, alignSelf: 'center' },
});

function EditProfile(props) {

  const [input, setInput] = useState(props.profile.data)
  const [avatar, setAvatar] = useState({})
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

  function selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
        alert('User cancelled photo picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
        alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
        alert('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setAvatar(response)
        setInput({
          ...input,
          image: source,
        });
      }
    });
  }

  const postdata = async() => {
    console.log(createFormData(avatar,input))
    // props.dispatch(postProfile(props.auth.token, createFormData(avatar,input)))
    props.dispatch(postProfile(props.auth.token, {...input, image: avatar.uri}))
    // const res = await Axios({
    //   method: 'put',
    //   url: `http://192.168.0.115:3000/profile`,
    //   data : createFormData(avatar, input),
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "cache-control": "no-cache",
    //     "Postman-Token": "8bdabec9-2814-4e70-85e9-a43a9f30b174",
    //     "processData": false,
    //     "contentType": false,
    //     "mimeType": "multipart/form-data",
    //     'Authorization': 'Bearer ' + props.auth.token  
    //   }
  //  }
      // headers: { }
  //  })

    // fetch("http://localhost:3000/", {
    //   method: "POST",
    //   body: createFormData(avatar,input)
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log("upload succes", response);
    //     alert("Upload success!");
    //     this.setState({ photo: null });
    //   })
    //   .catch(error => {
    //     console.log("upload error", error);
    //     alert("Upload failed!");
    //   });
  };

  const createFormData = (photo, body) => {
    const data = new FormData();
    
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    // data.append("image", {
    //   name: photo.fileName,
    //   type: photo.type,
    //   uri:photo.uri
    // });
    return data;
  };

  console.log(input)

  return (
    <Container >
      {/* <Content padder contentContainerStyle={{ flexGrow: 1, backgroundColor:'fff', opacity:1 }}> */}
      <Header style={{ backgroundColor: '#fff' }} >
        <Left style={{ justifyContent: 'center', flex: 1 }}>
          <Icon onPress={() => props.navigation.goBack()}
            name="arrow-back" type='MaterialIcons' />
        </Left>
        <Body style={{ flex: 2 }}>
          <Title style={{ color: '#000', alignSelf: 'center' }} >Edit Profile</Title>
        </Body>
        <Right style={{ justifyContent: 'center', flex: 1 }} >
          <Button transparent
          onPress={postdata}>
            <Text style={{ color: 'red' }}>Save</Text>
          </Button>
        </Right>
      </Header>

      <Content padder>
        <TouchableOpacity onPress={selectPhotoTapped.bind(this)}>
          <Image
            source={input.image}
            borderRadius={40}
            style={style.picture}
          />
        </TouchableOpacity>

        <Form style={{ marginBottom: 'auto', marginTop: 16, paddingRight: 16, justifyContent: 'flex-start' }} >
          <Text style={{ marginLeft: 12 }}>Full Name</Text>
          <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9', borderRadius: 4, flex: 1 }} >
            <Input placeholder="Name"
              style={{ paddingLeft: 8, flex: 1 }}
              value={input.name}
              selectionColor={'#c00'}
              onChangeText={(e) => setInput({ ...input, name: e })}  />
          </Item>


          <Text style={{ marginLeft: 12 }}>Phone</Text>
          <Item inlineLabel style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }} >
            <Label
              style={{ paddingLeft: 8 }}>+62</Label>
            <Input placeholder="Enter Phone Number"
              value={input.no_hp}
              selectionColor={'#c00'}
              keyboardType='phone-pad'
              onChangeText={(e) => setInput({ ...input, no_hp: e })} />
          </Item>

          <Text style={{ marginLeft: 12 }}>Birthday</Text>
          <Item style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }} >
            <DatePicker
              maximumDate={new Date(2000, 12, 31)}
              locale={"en"}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Not Set Yet"
              value={new Date(input.birthday)}
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(e)=> setInput({ ...input, birthday: e }) }
            />
            <Icon name='chevron-down' style={{ marginLeft: 'auto' }} type='MaterialCommunityIcons' />
          </Item>

          <Text style={{ marginLeft: 12 }}>Password</Text>
          <Item inlineLabel style={{ marginBottom: 16, backgroundColor: '#f9f9f9' }}
            onPress={() => props.navigation.navigate('ChangePassword')} >
            <Input secureTextEntry={true} placeholder="Password"
              style={{ paddingLeft: 8 }} disabled
              value={input.password}
              onChangeText={(e) => setInput({ ...input, password: e })}
            />
            <Label style={{ color: 'red' }}>Edit</Label>
          </Item>
        </Form>
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

// export default EditProfile;
export default connect(mapStateToProps)(EditProfile)