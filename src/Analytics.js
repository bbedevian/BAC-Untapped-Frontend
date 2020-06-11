import React from 'react';
import { View, StyleSheet, Text} from 'react-native';


const avgABV = (uBeers, dbBeers) => {
    let t = 0
    uBeers.forEach(beer => t+= dbBeers.find(dbBeer => dbBeer.id === beer.beer_id).abv)
    return t/uBeers.length
}

const Analytics = (props) => {
    if (props.userBeers.length > 0) {
   let today = new Date().getTime()
   let total = props.userBeers.length 
   let firstBeer = new Date(props.userBeers[0].created_at).getTime()
   let firstBeerMo = new Date(props.userBeers[0].created_at).getMonth()
   let firstBeerYr = new Date(props.userBeers[0].created_at).getFullYear() 
   let firstBeerDay =  new Date(props.userBeers[0].created_at).getDate()
   let daysinApp = (today - firstBeer)/86400000
   let bpd = Math.round(((total/daysinApp) + Number.EPSILON) * 10) / 10
   let averageABV = Math.round((avgABV(props.userBeers, props.dbBeers) + Number.EPSILON) * 100) / 100
    
    return (

    <View>
        <Text>Analytics Page</Text>
    <Text> Youve logged {total} beers since {firstBeerMo}/{firstBeerDay}/{firstBeerYr}</Text>
    <Text>You average {bpd} drinks per day</Text>
    <Text>These beers have an average ABV of {averageABV}% </Text>
    </View>    
    );
    } else {
        return (
            <View>
                <Text>Log some beers to get started</Text>
            </View>
        )
    }
}

export default Analytics;