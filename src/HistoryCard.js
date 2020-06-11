import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HistoryCard = (props) => {
    const {dbBeers, beer} = props
    let logMo = new Date(beer.created_at).getMonth()
    let logDate = new Date(beer.created_at).getDate()
    let logYr = new Date(beer.created_at).getYear()
    let dbBrew = dbBeers.find(dbBeer => dbBeer.id === beer.beer_id)
    return (
            <View>
                <Text>Name {dbBrew.name}</Text>
                <Text>Logged on: {logDate}/{logMo}/{logYr}</Text>
                <Text>Size {beer.size} ozs</Text>
                <Text>ABV {dbBrew.abv} %</Text>
                <Text></Text>
            </View>
    );
}

const styles = StyleSheet.create({
   card: {
       borderBottomColor: 'black',
       borderBottomWidth: 350

   }

})

export default HistoryCard;