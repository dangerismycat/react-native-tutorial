import React from 'react';
import { Image } from 'react-native';

import styles from '../styles.js';


class Buster extends React.Component {
  render() {
    const busterBluth = require('../assets/buster-bluth.png');

    return (
      <Image source={busterBluth} style={styles.buster} />
    );
  }
}

export default Buster;
