import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import HistoryCard from './HistoryCard';

const History = (props) => {
    const {userBeers, dbBeers} = props

    

    return (
        <ScrollView>

            {userBeers.map(uBeer => <HistoryCard key={uBeer.id} beer={uBeer} dbBeers={dbBeers}/>)}
            
        </ScrollView>
    );
}

export default History;