import React from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight, ImageBackground } from 'react-native';

const BeerCard = (props) => {
    const {beer, selectBeer} = props
    return (
        <View style={styles.beerBox}>
            {/* <ImageBackground source={{uri: `${beer.beer_label}`}} style={styles.background}> */}

            <TouchableHighlight onPress={() => selectBeer(beer)}>
            <Image style={styles.beerLogo} source={{uri: `${beer.beer_label}`}} />
            </TouchableHighlight>
            <Text style={styles.textRight}>{beer.beer_name}</Text>
            <Text style={styles.textRight}>ABV: {beer.beer_abv} %</Text>
            {/* </ImageBackground> */}
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