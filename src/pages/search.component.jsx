import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import CardContainer from '../components/card-container.component'
import BeerCard from '../components/beer-card.component';
import Serving from '../components/serving.component';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {getDbBeers} from '../redux/db-beers/db-beers.actions'

class Search extends React.Component {
    
    state = {
        search: '',
        beersArray: [],
        selectedBeer: {},
        servingSize: null,
    }


    changeSearch = (text) => {this.setState({search: text})}
    
    findBeers = (beers) => {this.setState({beersArray: beers})}

    selectBeer = (beer) => {
      let existBeer = this.props.dbBeers.find(dbBeer => dbBeer.name === beer.beer_name)
      if (existBeer){
        this.setState({ selectedBeer: existBeer})
      }  else {
        let myNewBeer = {name: beer.beer_name, img_url: beer.beer_label, abv: beer.beer_abv}
          fetch(`${this.props.ngrokURL}/beers`, {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'content-type': 'application/json'
            },
            body: JSON.stringify(myNewBeer)
            })
            .then(response => response.json())
            .then(json => this.setState({ selectedBeer: json}))
            .then(this.props.getDBbeers())
          }
    } 

    selectServing = (size) => {this.setState({servingSize: size})}
  
    getBeers = () => {
        const {search} = this.state
        fetch(`${this.props.ngrokURL}/utbeers/${search}`)
        .then(response => response.json())
        .then(beers => this.findBeers(beers.response.beers.items))
        .then(this.changeSearch(''))
    }

    render () {
        const {changeSearch, getBeers, selectBeer, selectServing} = this
        const {beersArray, search, selectedBeer, servingSize} = this.state
        const {addNewBeer, navigation} = this.props

        return (
          <View style={styles.container}>
            {beersArray.length > 0 ? 
                selectedBeer.name ? 
                <View>
                    <BeerCard beer={selectedBeer}/>
                    <Serving selectServing={selectServing}/>
                    <Button title={'Log It!'} onPress={() => {addNewBeer(selectedBeer, servingSize); this.props.getDBbeers(); navigation.navigate('Home')}}/>
                    <TouchableHighlight onPress={() => this.setState({beersArray: [], selectedBeer: {}})}>
                      <Text>Wrong Beer? Go back and select another!</Text>
                    </TouchableHighlight>
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
              <Text></Text>
              <Text></Text>
              <Text style={{textAlign: 'center'}}>Powered by</Text>
              <Image style={styles.logo}source={{uri: 'https://champps.com/wp-content/uploads/2017/10/untappd.png'}}/>
            </View>
            }
          </View>
        );
    }}

    const msp = ({dbBeers, ngrokURL}) => ({
      dbBeers: dbBeers.dbBeers,
      ngrokURL: ngrokURL.ngrokURL
    })

    const mdp = (dispatch) => {
      return {
          getDBbeers: (beers) => dispatch(getDbBeers(beers)),
      }
    }
  

export default connect(msp, mdp)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,205,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    height: 40, 
    width: 200, 
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 1 
},
logo: {
  height: 200,
  resizeMode: 'contain',
  justifyContent: 'center', 
}
});