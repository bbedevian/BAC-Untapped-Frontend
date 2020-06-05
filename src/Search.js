import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import CardContainer from './CardContainer'
import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv'
import BeerCard from './BeerCard';
import Serving from './Serving';

class Search extends React.Component {
    
    state = {
        search: '',
        beersArray: [],
        selectedBeer: {},
        servingSize: null,
        dbBeers: []
    }

    componentDidMount() {
      fetch(`https://93fc9e8d6226.ngrok.io/beers`)
        .then(response => response.json())
        .then(beers => this.setState({ dbBeers: beers}))
    }

    changeSearch = (text) => {this.setState({search: text})}
    
    findBeers = (beers) => {this.setState({beersArray: beers})}

    selectBeer = (beer) => {
      let existBeer = this.state.dbBeers.find(dbBeer => dbBeer.name === beer.beer_name)
      if (existBeer){
        this.setState({ selectedBeer: existBeer})
      }  else {
        let myNewBeer = {name: beer.beer_name, img_url: beer.beer_label, abv: beer.beer_abv}
          fetch(`https://93fc9e8d6226.ngrok.io/beers`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json'
            },
            body: JSON.stringify(myNewBeer)
            })
            .then(response => response.json())
            .then(json => this.setState({ selectedBeer: json}))
          }
    } 

    selectServing = (size) => {this.setState({servingSize: size})}
  
    getBeers = () => {
        const {search} = this.state
      fetch(`https://api.untappd.com/v4/search/beer?q=${search}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        .then(response => response.json())
        .then(beers => this.findBeers(beers.response.beers.items))
        .then(this.changeSearch(''))
    }

    render () {
        const {changeSearch, getBeers, selectBeer, selectServing} = this
        const {beersArray, search, selectedBeer, servingSize} = this.state
        const {addNewBeer, navigation} = this.props
        console.log('selectedBeer :>> ', selectedBeer);
        console.log('search props :>> ', this.props);
        return (
          <View style={styles.container}>
            {beersArray.length > 0 ? 
                selectedBeer.name ? 
                <View>
                    <BeerCard beer={selectedBeer}/>
                    <Serving selectServing={selectServing}/>
                    <Button title={'Log It!'} onPress={() => {addNewBeer(selectedBeer, servingSize); navigation.navigate('Home')}}/>
                </View>
                : // if beers searched for but not selected..
                <CardContainer beers={beersArray} selectBeer={selectBeer}/>
            : // if no beers searched for yet.. 
            <View>
            <Text>Search for a Beer!</Text>
            <TextInput style={styles.inputField} onChangeText={text => changeSearch(text)} value={search}/>
            <TouchableOpacity style={styles.button} onPress={() => getBeers()} >
               <Text>Search</Text>
              </TouchableOpacity>
            </View>
            }
          </View>
        );
    }}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,205,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    height: 40, 
    width: 200, 
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 1 
},
});