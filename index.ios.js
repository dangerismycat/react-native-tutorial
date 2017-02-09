import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';


class Blink extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { visible: true };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const content = this.state.visible ? this.props.children : null;

    return (
      <View style={ { alignItems: this.props.align } }>
        {content}
      </View>
    );
  }
}

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
