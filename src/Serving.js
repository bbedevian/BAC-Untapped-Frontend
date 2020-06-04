import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class Serving extends Component {
    
    render() {
        const {selectServing} = this.props
        const radio_props = [
            {label: '16 oz Can/Draft', value: 16 },
            {label: '12 oz Can/Draft', value: 12 },
            {label: 'taster (4oz)', value: 4 },
            {label: '750 ml', value: 25 },
          ];
        return (
            <>
            <View style={styles.servingBox}>
                <Text>Select your serving size</Text>
                <RadioForm radio_props={radio_props} initial={null} onPress={(value) => selectServing(value)} />
            </View>
                <Button title="Log It!"/>
            </>
        );
    }
}

export default Serving;

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
