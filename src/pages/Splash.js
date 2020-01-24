import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Image } from 'react-native';

import image from '../assets/splash.png';
import cover from '../assets/bgCover.png';


function SplashScreen(props) {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login')
    }, 2000);
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

export default SplashScreen;