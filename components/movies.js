import React from 'react';
import { ListView, Text, View } from 'react-native';

import styles from '../styles.js';
import { getMoviesFromApiAsync, getMoviesFromApi } from '../api/fetch-movies.js';


function renderMovie(movie) {
  if (!movie || typeof movie === 'function') {
    return null;
  }

  return <Text>{`${movie.title} — ${movie.releaseYear}`}</Text>;
}


class Movies extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: [],
      loading: true,
    };
  }

  componentDidMount() {
    getMoviesFromApiAsync().then((movies) => this.setState({
      dataSource: movies,
      loading: false,
    }));
  }

  render() {
    const rows = this.dataSource.cloneWithRows(this.state.dataSource || []);

    if (this.loading) {
      return null;
    }

    return (
      <View style={styles.simpsonsCharactersContainer}>
        <ListView
          dataSource={rows}
          renderRow={(movie) => renderMovie(movie)}
        />
      </View>
    );
  }
}

export default Movies;



