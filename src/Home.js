import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Visualizer from './Visualizer';


class Home extends Component {
    render() {
        const {userBeers, dbBeers} = this.props
        console.log('Home props :>> ', this.props);
        return (
            <View>
                <Visualizer/>
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
