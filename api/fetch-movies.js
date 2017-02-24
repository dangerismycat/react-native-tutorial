export function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
}

export async function getMoviesFromApi() {
  try {
    const response = await fetch('https://facebook.github.io/react-native/movies.json');
    const responseJson = await response.json();
    console.log(responseJson.movies);
    return responseJson.movies;
  } catch(error) {
    console.error(error);
    throw new Error(error);
  }
}

