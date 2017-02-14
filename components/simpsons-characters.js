import React from 'react';
import { ListView, Text, View } from 'react-native';

import styles from '../styles.js';
import simpsonsCharactersList from '../assets/simpsons-characters-list.js';

class SimpsonsCharacters extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(simpsonsCharactersList),
    };
  }

  render() {

    return (
      <View style={styles.simpsonsCharactersContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default SimpsonsCharacters;


