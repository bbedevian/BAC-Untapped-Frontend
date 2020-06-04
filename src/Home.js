import React, { Component } from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

class Home extends Component {
    render() {
        const {changeLog} = this.props
        return (
            <View>
                <Text>On the home screen</Text>
                <Text>Graph will go here</Text>
                <Button title="Log a new beer" onPress={() => changeLog()}/>
            </View>
        );
    }
}

export default Home;
