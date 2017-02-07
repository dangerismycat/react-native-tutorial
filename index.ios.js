import React, { Component } from 'react';
import { AppRegistry, Image, Text } from 'react-native';

class FirstTutorial extends Component {
  render() {
    const tinaBelcher = { uri: 'https://s-media-cache-ak0.pinimg.com/736x/f7/86/ed/f786ed81b3e25f10b0bb024712f7d544.jpg' };

    return (
//      <Text style={ { margin: 50 } }>
//        Sup world!
//      </Text>
      <Image source={tinaBelcher} style={ { flex: 1 } } />
    );
  }
}

AppRegistry.registerComponent('FirstTutorial', () => FirstTutorial);
