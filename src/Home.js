import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Visualizer from './Visualizer';


class Home extends Component {
    render() {
        const {userBeers, dbBeers, currentUser, navigation} = this.props
        return (
            <>
            <View style={styles.container}>
                {/* <ImageBackground style={styles.image} source={{uri: "https://i.pinimg.com/originals/db/7f/c2/db7fc263c7ff27035979a51498577d8a.jpg"}}> */}
                <Visualizer userBeers={userBeers} dbBeers={dbBeers} currentUser={currentUser}/>
                <TouchableOpacity onPress={() => navigation.navigate('History')} >
                    <Text>View Your Log History</Text>
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Analytics')} >
                    <Text>View Analytics</Text>
                 </TouchableOpacity>
                <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Search')}/>
                {/* </ImageBackground> */}
            </View> 
            </>
        );
    }
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255,205,0)',
        
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }, 
     
})