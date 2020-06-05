import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HistoryCard = (props) => {
    const {dbBeers, beer} = props

    return (
            <View>
                <Text>Name {dbBeers.find(dbBeer => dbBeer.id === beer.beer_id).name}</Text>
                <Text>Logged on: {beer.created_at}</Text>
                <Text>Size {beer.size} ozs</Text>
                <Text>ABV {dbBeers.find(dbBeer => dbBeer.id === beer.beer_id).abv} %</Text>
                <Text></Text>
            {/* <Text>{beer.name}</Text>
            <Text>ABV: {beer.abv} %</Text> */}
            </View>
    );
}

const styles = StyleSheet.create({
    beerLogo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        
    },
    beerBox: {
        marginTop: 8,
        height: "auto",
        width: 350,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    textRight: {
        fontSize: 20,
        alignSelf: "center",
    },
    background: {
        width: 350,
        height: "auto" 
    },

})

export default HistoryCard;