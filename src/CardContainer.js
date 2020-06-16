import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import BeerCard from './BeerCard'


const CardContainer = (props) => {
    const { beers, selectBeer } = props
    return (
       <ScrollView>
           {beers.map(beer => <BeerCard key={beer.beer.bid} beer={beer.beer} selectBeer={selectBeer}/>)}
       </ScrollView>
    )
}

export default CardContainer;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'rgb(255,205,0)',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });