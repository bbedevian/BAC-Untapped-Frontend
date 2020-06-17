import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HistoryCard = (props) => {
    const {beer, deletePost} = props
    let logMo = beer.time.getMonth()
    let logDate = beer.time.getDate()
    let logYr = beer.time.getYear()
    let calories = (beer.abv*2.5*beer.size)
    return (
            <View style={styles.card}>
                <Text></Text>
                <Text>Name: {beer.name}</Text>
                <Text>Logged on: {logDate}/{logMo}/{logYr}</Text>
                <Text>Size: {beer.size} ozs</Text>
                <Text>ABV: {beer.abv} %</Text>
                <Text>Calories: {calories}</Text>
                <TouchableWithoutFeedback onPress={() => deletePost(beer)}>
                    <Text>❌ Delete Log ❌</Text>
                </TouchableWithoutFeedback>
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