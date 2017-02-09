import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

import Blink from './components/blink.js';
import Buster from './components/buster.js';
import Greeting from './components/greeting.js';

import styles from './styles.js';


class FirstTutorial extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Buster />
        <Blink align={'center'}>
          <Greeting target={'brother'} />
          <Greeting target={'hermano'} />
          <Greeting target={'possible nephew'} />
          <Greeting target={'fake uncle Jack'} />
          <Greeting target={'father / uncle dad'} />
        </Blink>
      </View>
    );
  }
}

AppRegistry.registerComponent('FirstTutorial', () => FirstTutorial);
