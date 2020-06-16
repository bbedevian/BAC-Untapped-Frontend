import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image} from 'react-native';
import Visualizer from './Visualizer';
import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';


class Home extends Component {
    render() {
        const {userBeers, dbBeers, currentUser, navigation, addNewBeer} = this.props
        return (
            <>
            <View style={styles.container}>
                <Visualizer userBeers={userBeers} dbBeers={dbBeers} currentUser={currentUser} addNewBeer={addNewBeer}/>
                 <View style={styles.actionViews}>
                    <TouchableHighlight style={styles.actionBox} onPress={() => navigation.navigate('Analytics')} >
                        <Text style={styles.actionText}>📊Analytics</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback style={styles.actionBox} onPress={() => navigation.navigate('History')} >
                        <Text style={styles.actionText}>🗒Log History</Text>
                    </TouchableNativeFeedback>
                 </View>
                    <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Search')}/>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('About BAC')} >
                        <Text>What do the graph colors mean?</Text>
                    </TouchableNativeFeedback>
                 <Text></Text>
                 <Text style={styles.disclaim}>Disclaimer: This app cannot be used as legal evidence of your BAC. {'\n'}
                 It is intended for entertainment purposes only.</Text>
            </View> 
            </>
        );
    }
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255,205,0)',
        
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }, 
      disclaim: {
          fontSize: 12,
          justifyContent: 'center',
      },
      actionViews: {
        flex: 1,
        top: 35,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    actionBox: {
        height: 45,
        padding: 5,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    actionImage: {
        width: 20,
        height: 20
    },
    actionText: {
        fontSize: 20
    }
     
})