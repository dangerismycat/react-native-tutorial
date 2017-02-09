import React, { PropTypes } from 'react';
import { View } from 'react-native';


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

Blink.propTypes = {
  align: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
};

export default Blink;
