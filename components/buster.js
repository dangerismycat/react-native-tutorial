import React from 'react';
import { Image } from 'react-native';


class Buster extends React.Component {
  render() {
    const busterBluth = require('../assets/buster-bluth.png');

    return (
      <Image source={busterBluth} style={ { borderRadius: 5, flexGrow: 1, marginTop: 30 } } />
    );
  }
}

export default Buster;
