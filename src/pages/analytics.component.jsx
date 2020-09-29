import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux'


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

    <View style={styles.container}>
    <Text style={styles.text}>Beers logged since joining</Text>
    <Text style={styles.text}>on {firstBeerMo}/{firstBeerDay}/{firstBeerYr}</Text>
    <Text style={styles.bigFont}>{total}</Text>
    <Text style={styles.text}>You average drinks per day:</Text>
    <Text style={styles.bigFont}>{bpd} </Text>
    <Text style={styles.text}>Average ABV</Text>
    <Text style={styles.bigFont}>{averageABV}%</Text>
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

const msp = ({dbBeers, userBeers}) => ({
    dbBeers: dbBeers.dbBeers,
    userBeers: userBeers.userBeers
  })


export default connect(msp)(Analytics);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255,205,0)',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    bigFont: {
        fontSize: 45,
        textAlign: 'center'
    }
})