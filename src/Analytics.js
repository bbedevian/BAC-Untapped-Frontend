import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Analytics = (props) => {
   let total = props.userBeers.length 
   let firstBeer = new Date(props.userBeers[0].created_at).getMonth()
// console.log('props.userBeers :>> ', props.userBeers[0].created_at);

    return (
    <View>
        {/* <Text>Analytics Page</Text>
    <Text> Youve logged {total} beers since {firstBeer}</Text> */}
    </View>    
    );
}

export default Analytics;