import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image } from 'react-native';

import image from '../assets/splash.png';
import cover from '../assets/bgCover.png';
import { connect } from 'react-redux';


function SplashScreen(props) {

  useEffect(() => {
    setTimeout(() => {
      if (props.auth.token) {
        props.navigation.navigate('Search')
      }else props.navigation.navigate('Login')
    }, 1000);
  }, [props.navigation])

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={cover}
      resizeMode='contain' >
      <View style={{flex:1}}>
        <Image source={image}
        resizeMode='contain'
          style={{ alignSelf: 'center', width:'100%', height:'100%' }} />
      </View>
    </ImageBackground>
  );
}

const mapStateToProps = state => {
  return {
     auth: state.auth,
  }
}

export default connect(mapStateToProps)(SplashScreen)
// export default SplashScreen;