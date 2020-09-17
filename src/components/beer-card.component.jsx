import React from 'react';
import { Image, StyleSheet, View, Text, TouchableNativeFeedback, } from 'react-native';

const BeerCard = (props) => {
    const {beer, selectBeer} = props
    return (
     beer.beer_label ? 
        <View style={styles.beerBox}>
            <TouchableNativeFeedback onPress={() => selectBeer(beer)}>
            <Image style={styles.beerLogo} source={{uri: `${beer.beer_label}`}} />
            </TouchableNativeFeedback>
            <Text style={styles.textRight}>{beer.beer_name}</Text>
            <Text style={styles.textRight}>ABV: {beer.beer_abv} %</Text>
            </View>
            : //if this BeerCard is coming from our Serving instead of from Card Container
            <View style={styles.beerBox}>
            <Image style={styles.beerLogo} source={{uri: `${beer.img_url}`}} />
            <Text style={styles.textRight}>{beer.name}</Text>
            <Text style={styles.textRight}>ABV: {beer.abv} %</Text>
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

export default BeerCard;