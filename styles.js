import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flex: 1,
  },
  blink: {
    alignItems: 'center',
  },
  buster: {
    borderRadius: 5,
    // flexGrow: 1,
    marginTop: 30,
  },
  censorifyContainer: {
    margin: 20,
  },
  monkeyEmoji: {
    margin: 10,
    fontSize: 40,
  },
  censorifyDisplay: {},
  censorifyInput: {
    backgroundColor: 'lightgray',
    height: 40,
    width: 200,
  },
  'color-brick-red': {
    backgroundColor: '#d63d22'
  },
  'color-mid-blue': {
    backgroundColor: '#26a4f2'
  },
  'color-spring-green': {
    backgroundColor: '#27dd49'
  },
  greeting: {
    marginTop: 15,
  },
  'square-small': {
    height: 10,
    width: 10,
    // flex: 1,
  },
  'square-medium': {
    height: 25,
    width: 25,
    // flex: 2,
  },
  'square-large': {
    height: 50,
    width: 50,
    // flex: 3,
  },
  squaresContainer: {
    flex: 1,
    // column, row
    flexDirection: 'column',
    // flex-start, center, flex-end, space-around, space-between
    justifyContent: 'center',
    // flex-start, center, flex-end, stretch
    alignItems: 'flex-end',
    marginTop: 10,
    // height: 300,
    // width: 300,
  },
});

export default styles;
