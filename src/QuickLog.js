import React from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const QuickLog = (props) => {
    const {beer, addNewBeer} = props
    return (
        <View style={styles.beerBox}>
            <TouchableOpacity onPress={() => addNewBeer(beer, beer.size)} >
            <Text>Quick Log</Text>
            <Image style={styles.beerLogo} source={{uri: `${beer.img}`}} />
            <Text> {beer.size} oz/ {beer.abv} %</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QuickLog;

const styles = StyleSheet.create({
    beerLogo: {
        width: 50,
        height: 50,
        alignSelf: "center",
    },
    beerBox: {
        height: "auto",
        width: 100,
        // padding: 12,
        // paddingVertical: 4,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
       
    },
    textRight: {
        fontSize: 15,
        alignSelf: "center",
    },
})