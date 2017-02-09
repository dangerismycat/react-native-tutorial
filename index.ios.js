import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
     <Text style={ { marginTop: 15 } }>
       Hey {this.props.target}!
     </Text>
    );
  }
}

class Buster extends React.Component {
  render() {
    const busterBluth = require('./assets/buster-bluth.png');

    return (
      <Image source={busterBluth} style={ { borderRadius: 5, flexGrow: 1, marginTop: 30 } } />
    );
  }
}

class FirstTutorial extends React.Component {
  render() {

    return (
      <View style={ { alignItems: 'center' } }>
        <Buster />
        <Greeting target={'brother'} />
        <Greeting target={'hermano'} />
        <Greeting target={'possible nephew'} />
        <Greeting target={'fake uncle Jack'} />
        <Greeting target={'father / uncle dad'} />
      </View>
    );
  }
}

AppRegistry.registerComponent('FirstTutorial', () => FirstTutorial);
