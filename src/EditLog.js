import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import BeerCard from './BeerCard';

class EditLog extends Component {
    
    render() {
        const {beer} = this.props
        console.log('beer :>> ', beer);
        const radio_props = [
            {label: '16 oz / 500 ml', value: 16 },
            {label: '12 oz / 350ml', value: 12 },
            {label: 'taster (4oz)', value: 4 },
            {label: '25 oz / 750 ml', value: 25 },
          ];
        return (
            <View style={styles.servingBox}>
                <BeerCard beer={beer}/> 
                <Text>Select your serving size</Text>
                <RadioForm radio_props={radio_props} initial={beer.size} onPress={(value) => selectServing(value)} />
                <Button title="save changes"/>
            </View>
        );
    }
}

export default EditLog;

const styles = StyleSheet.create({
    servingBox: {
        marginTop: 8,
        height: "auto",
        width: 350,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
    },
})
