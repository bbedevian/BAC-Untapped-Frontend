import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import LoginSignup from './src/pages/login-signup.component';
import Home from './src/pages/home.component'
import Search from './src/pages/search.component'
import History from './src/pages/history.component'
import Analytics from './src/pages/analytics.component'
import Settings from './src/pages/settings.component'
import Info from './src/pages/info.component'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';


const Stack = createStackNavigator();

class App extends Component {

  state = {
    userBeers:[]
  }

  ngrokURL = 'https://5b3cb1d4260c.ngrok.io'

  // componentDidMount() { this.getDBbeers() }

  // setUser = (user) => 
  // {fetch(`${this.ngrokURL}/user_beers`)
  //   .then(response => response.json())
  //   .then(allUserBeers => 
  //     this.setState({ currentUser: user, userBeers: allUserBeers.filter(ub => ub.user_id === user.id)})
  //     )  
  // } 

  removeBeer = (beer) => {
    this.setState({userBeers: this.state.userBeers.filter(ub => ub.id !== beer.id)})
  }

  addToDB = (beer) => {
    this.setState({dbBeers: [...this.state.dbBeers, beer]})
  }

  addNewBeer = (selectedBeer, size, currentUser) => {
    let uBeer = {user_id: currentUser.id, beer_id: selectedBeer.id, size: size}
    fetch(`${this.ngrokURL}/user_beers`, {
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
    const { addNewBeer, addToDB, ngrokURL, removeBeer} = this
    return (
      <Provider store={store}>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="LoginSignup" screenOptions={{
        headerTitleAlign: true,
        headerStyle: {
          backgroundColor: '#f0ead6'
        }
        }}>

          <Stack.Screen name="LoginSignup" options={{ title: 'BAC Untappd' }}>
          {props => <LoginSignup {...props} ngrokURL={ngrokURL}/>}
          </Stack.Screen> 

          <Stack.Screen name="Log a new Beer">
          {props => <Search {...props} addNewBeer={addNewBeer} ngrokURL={ngrokURL} addToDB={addToDB}/>}
          </Stack.Screen> 

          <Stack.Screen name="Home" options={({ navigation }) =>
          ({headerLeft: () => {return null},
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image style={styles.gear} source={{uri: "https://www.pngrepo.com/download/266961/settings-gear.png"}}/>
            </TouchableOpacity>
            ),
            })}>
          {props => <Home {...props} ngrokURL={ngrokURL} userBeers={userBeers} addNewBeer={addNewBeer}/>}
          </Stack.Screen> 

          <Stack.Screen name="History">
          {props => <History {...props} userBeers={userBeers} dbBeers={dbBeers} ngrokURL={ngrokURL} removeBeer={removeBeer}/>}
          </Stack.Screen> 

          <Stack.Screen name="Analytics">
          {props => <Analytics {...props} userBeers={userBeers} dbBeers={dbBeers}/>}
          </Stack.Screen> 

          <Stack.Screen name="Settings">
          {props => <Settings {...props} />}
          </Stack.Screen> 

          <Stack.Screen name="About BAC">
          {props => <Info {...props} />}
          </Stack.Screen> 

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,205,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gear: {
    width: 25,
    height: 25,
  },
});



export default App;

