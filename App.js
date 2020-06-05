import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import LoginSignup from './src/LoginSignup';
import Home from './src/Home'
import Search from './src/Search'
import History from './src/History'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {

  state = {
    currentUser: null,
    userBeers:[],
    dbBeers: []
  }

  componentDidMount() {
    this.getDBbeers()
  }

  setUser = (user) => 
  {fetch(`https://93fc9e8d6226.ngrok.io/user_beers`)
    .then(response => response.json())
    .then(allUserBeers => 
      this.setState({ currentUser: user, userBeers: allUserBeers.filter(ub => ub.user_id === user.id)})
      )
  } 

  addToDB = (beer) => {
    this.setState({dbBeers: [...this.state.dbBeers, beer]})
  }

  getDBbeers = () => {
    fetch(`https://93fc9e8d6226.ngrok.io/beers`)
        .then(response => response.json())
        .then(beers => this.setState({ dbBeers: beers}))
  }

  addNewBeer = (selectedBeer, size) => {
    let uBeer = {user_id: this.state.currentUser.id, beer_id: selectedBeer.id, size: size}
    fetch(`https://93fc9e8d6226.ngrok.io/user_beers`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(uBeer)
      })
      .then(response => response.json())
      .then(json => this.setState({userBeers: [...this.state.userBeers, json]}))
  }

  render () {
    const {dbBeers, userBeers} = this.state
    const {setUser, addNewBeer, addToDB, getDBbeers} = this
    return (
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="LoginSignup">

          <Stack.Screen name="LoginSignup" options={{ title: 'BAC Untappd' }}>
          {props => <LoginSignup {...props} setUser={setUser} />}
          </Stack.Screen> 

          <Stack.Screen name="Search">
          {props => <Search {...props} addNewBeer={addNewBeer} dbBeers={dbBeers} addToDB={addToDB} getDBbeers={getDBbeers}/>}
          </Stack.Screen> 

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="History">
          {props => <History {...props} userBeers={userBeers} dbBeers={dbBeers}/>}
          </Stack.Screen> 

        </Stack.Navigator>
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

