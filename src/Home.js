import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class Home extends Component {
    render() {
        const {changeLog} = this.props
        return (
            <View>
                <Text>On the home screen</Text>
                <Text>Graph will go here</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} >
                    <Text>View Your Log History</Text>
                 </TouchableOpacity>
                <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Search')}/>
            </View> 
        );
    }
}

export default Home;
