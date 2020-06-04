import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import LoginSignup from './src/LoginSignup';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home'
import Search from './src/Search'

class App extends Component {

  state = {
    currentUser: null,
    logBeer: false,
    userBeers:[]
  }

  setUser = (user) => {this.setState({ currentUser: user})} //this should also get said users beers

  changeLog = () => {this.setState({logBeer: !this.state.addBeer})}

  addNewBeer = (newBeer) => {
    //POST to user_beers
    this.setState({userBeers: this.state.userBeers, newBeer})}

  render () {
    const {currentUser, logBeer} = this.state
    const {setUser, changeLog, addNewBeer} = this
    return (
      <NavigationContainer>
      <View style={styles.container}>
        {!currentUser ? 
        <LoginSignup setUser={setUser}/>
        :
        logBeer ? <Search changeLog={changeLog} addNewBeer={addNewBeer}/> : <Home changeLog={changeLog}/>
        }
      </View>
      </NavigationContainer>
    );}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,205,0)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});


export default App;

