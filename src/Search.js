import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CardContainer from './CardContainer'
import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv'
import BeerCard from './BeerCard';
import Serving from './Serving';

class Search extends React.Component {
    
    state = {
        search: '',
        beersArray: [],
        selectedBeer: {},
        servingSize: null
    }

    changeSearch = (text) => {this.setState({search: text})}
    
    findBeers = (beers) => {this.setState({beersArray: beers})}

    selectBeer = (beer) => {this.setState({ selectedBeer: beer})}

    selectServing = (size) => {this.setState({servingSize: size})}
  
    getBeers = () => {
        const {search} = this.state
      fetch(`https://api.untappd.com/v4/search/beer?q=${search}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
        .then(response => response.json())
        .then(beers => this.findBeers(beers.response.beers.items))
        .then(this.changeSearch(''))
    }

    render () {
        // console.log('Selected beer', this.state.selectedBeer)
        console.log('Selected serving', this.state.servingSize)
        const {changeSearch, getBeers, selectBeer, selectServing} = this
        const {beersArray, search, selectedBeer} = this.state
        return (
          <View style={styles.container}>
            {beersArray.length > 0 ? 
                selectedBeer.beer_name ? 
                <View>
                    <BeerCard beer={selectedBeer}/>
                    <Serving selectServing={selectServing}/>
                </View>
                :
                <CardContainer beers={beersArray} selectBeer={selectBeer}/>
            : 
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

    }
    
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,205,0)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  inputField: {
    height: 40, 
    width: 200, 
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 1 
},
});