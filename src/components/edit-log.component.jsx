import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {connect} from 'react-redux'

class EditLog extends Component {

deletePost = () => {
       fetch(`${this.props.ngrokURL}/user_beers/${this.props.beer.id}`, {
        method: 'DELETE'
        })
        this.props.removeBeer(this.props.beer)
    }
    
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
                
                <Text>Change serving size</Text>
                <RadioForm radio_props={radio_props} initial={beer.size} />
                <Button title="save changes"/>
                <Button title="Delete this log" onPress={() => this.deletePost()}/>
            </View>
        );
    }
}

const msp = ({ngrokURL}) => ({
    ngrokURL: ngrokURL
  })

export default connect(msp)(EditLog);

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
