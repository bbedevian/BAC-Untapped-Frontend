import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginSignup from './src/LoginSignup';
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {

  state = {
    currentUser: null,
  }

  setUser = (user) => {
    this.setState({ currentUser: user})
  }

  render () {
    console.log('App state :>> ', this.state);
    const {currentUser} = this.state
    const {setUser} = this
    return (
      <NavigationContainer>
      <View style={styles.container}>
        {!currentUser ? 
        <LoginSignup setUser={setUser}/>
        :
        null
        }
      </View>
      </NavigationContainer>
    );
  }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


