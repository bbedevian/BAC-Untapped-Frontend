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
                {/* <ImageBackground style={styles.image} source={{uri: "https://i.pinimg.com/originals/db/7f/c2/db7fc263c7ff27035979a51498577d8a.jpg"}}> */}
                <Visualizer userBeers={userBeers} dbBeers={dbBeers} currentUser={currentUser} addNewBeer={addNewBeer}/>
                
                 <View style={styles.actionViews}>
                    <TouchableHighlight style={styles.actionBox} onPress={() => navigation.navigate('Analytics')} >
                        <Text> <Image style={styles.actionImage}
                        source={{uri: 'https://www.freeiconspng.com/uploads/analytic-icon-10.png'}}/>
                        {"\n"} Analytics</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback style={styles.actionBox} onPress={() => navigation.navigate('History')} >
                        <Text> <Image style={styles.actionImage}
                        source={{uri: "https://i.ya-webdesign.com/images/png-file-in-notepad-4.png"}}/>
                               Log History</Text>
                    </TouchableNativeFeedback>
                 </View>
                    <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Search')}/>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('About BAC')} >
                        <Text>What do the graph colors mean?</Text>
                    </TouchableNativeFeedback>
                 <Text></Text>
                 <Text style={styles.disclaim}>Disclaimer: This app cannot be used as legal evidence of your BAC. {'\n'}
                 It is intended for entertainment purposes only.</Text>
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
        flex: 1,
        flexDirection: 'column',
        // padding: 12,
        // paddingVertical: 4,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: '#fff',
        // justifyContent: 'center'
    },
    actionImage: {
        width: 20,
        height: 20
    }
     
})