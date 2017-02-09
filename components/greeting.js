import React, { PropTypes } from 'react';
import { Text } from 'react-native';

import styles from '../styles.js';


class Greeting extends React.Component {
  render() {
    return (
     <Text style={styles.greeting}>
       Hey {this.props.target}!
     </Text>
    );
  }
}

Greeting.propTypes = {
  target: PropTypes.string.isRequired,
};

export default Greeting;
