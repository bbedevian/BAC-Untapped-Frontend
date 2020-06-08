import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Visualizer from './Visualizer';


class Home extends Component {
    render() {
        const {userBeers, dbBeers, currentUser} = this.props
        return (
            <View>
                <Visualizer userBeers={userBeers} dbBeers={dbBeers} currentUser={currentUser}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} >
                    <Text>View Your Log History</Text>
                 </TouchableOpacity>
                <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Search')}/>
            </View> 
        );
    }
}

export default Home;
