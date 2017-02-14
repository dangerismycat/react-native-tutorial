import React, { PropTypes } from 'react';
import { TextInput, ScrollView, View } from 'react-native';

import MonkeyEmoji from './monkey-emoji.js';

import styles from '../styles.js';


function censorifyText(text) {
  if (typeof text !== 'string') {
    throw new Error('text must be a string');
  }
  return text.split(' ').map((word) => word ? <MonkeyEmoji /> : null);
}

class Censorify extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.state = { text: '' };
  }

  handleChangeText(text) {
    if (typeof text !== 'string') {
      throw new Error('text must be a string');
    }
    this.setState({ text });
  }

  render() {

    return (
      <View style={styles.censorifyContainer}>
        <TextInput
          style={styles.censorifyInput}
          placeholder="type what ye dare..."
          onChangeText={this.handleChangeText}
        />
        <ScrollView style={styles.censorifyDisplay}>
          {censorifyText(this.state.text)}
        </ScrollView>
      </View>
    );
  }
}

Censorify.propTypes = {};

export default Censorify;
