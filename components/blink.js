import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from '../styles.js';


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
    const visibilityStyle = this.state.visible ? null : { opacity: 0 };

    return (
      <View style={[styles.blink, visibilityStyle]}>
        {this.props.children}
      </View>
    );
  }
}

Blink.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
};

export default Blink;
