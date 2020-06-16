import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HistoryCard = (props) => {
    const {beer} = props
    let logMo = beer.time.getMonth()
    let logDate = beer.time.getDate()
    let logYr = beer.time.getYear()
    let calories = (beer.abv*2.5*beer.size)
    return (
            <View style={styles.card}>
                <Text>Name: {beer.name}</Text>
                <Text>Logged on: {logDate}/{logMo}/{logYr}</Text>
                <Text>Size: {beer.size} ozs</Text>
                <Text>ABV: {beer.abv} %</Text>
                <Text>Calories: {calories}</Text>
                <Text></Text>
            </View>
    );
}

const styles = StyleSheet.create({
   card: {
       borderBottomColor: 'black',
       borderBottomWidth: 1
   }

})

export default HistoryCard;