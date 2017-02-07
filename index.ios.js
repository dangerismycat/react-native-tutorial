import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class FirstTutorial extends Component {
  render() {
    return (
      <Text style={ { margin: 50 } }>
        Sup world!
      </Text>
    );
  }
}

AppRegistry.registerComponent('FirstTutorial', () => FirstTutorial);
