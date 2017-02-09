import React, { PropTypes } from 'react';
import { Text } from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
     <Text style={ { marginTop: 15 } }>
       Hey {this.props.target}!
     </Text>
    );
  }
}

Greeting.propTypes = {
  target: PropTypes.string.isRequired,
};

export default Greeting;
