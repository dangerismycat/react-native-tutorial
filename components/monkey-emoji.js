import React, { PropTypes } from 'react';
import { Text } from 'react-native';

import styles from '../styles.js';


class Monkey extends React.Component {
  render() {
    return (
     <Text style={styles.monkeyEmoji}>
      🙊
     </Text>
    );
  }
}

Monkey.propTypes = {};

export default Monkey;
