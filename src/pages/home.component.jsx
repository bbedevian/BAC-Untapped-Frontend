import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Text, View, Button, StyleSheet} from 'react-native';
import Visualizer from '../components/visualizer.component';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {getDbBeers} from '../redux/db-beers/db-beers.actions'
import {getUserBeers} from '../redux/user-beers/user-beers.actions'


class Home extends Component {

    componentDidMount() { 
        this.getDBbeers() 
        this.getUserBeers()
    }

    getDBbeers = () => {
        fetch(`${this.props.ngrokURL}/beers`)
            .then(response => response.json())
            .then(beers => this.props.getbeers(beers))
      }

    getUserBeers = () => {
        fetch(`${this.props.ngrokURL}/user_beers`)
            .then(response => response.json())
            .then(beers => 
                {let filtered = beers.filter(beer => beer.user_id === this.props.currentUser.id)
                this.props.getUBeers(filtered)}
                )
    }  
    
 

    render() {
        const {currentUser, navigation, addNewBeer} = this.props
        return (
            <>
            <View style={styles.container}>
                <Visualizer  currentUser={currentUser} addNewBeer={addNewBeer}/>
                 <View style={styles.actionViews}>
                    <TouchableOpacity style={styles.actionBox} onPress={() => navigation.navigate('Analytics')} >
                        <Text style={styles.actionText}>📊Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBox} onPress={() => navigation.navigate('History')} >
                        <Text style={styles.actionText}>🗒Log History</Text>
                    </TouchableOpacity>
                 </View>
                    <Button title="Log a new beer" onPress={() => this.props.navigation.navigate('Log a new Beer')}/>
                    <TouchableOpacity onPress={() => navigation.navigate('About BAC')} >
                        <Text style={{textAlign: 'center'}}>What do the graph colors mean?</Text>
                    </TouchableOpacity>
                 <Text></Text>
                 <Text style={styles.disclaim}>Disclaimer: This app cannot be used as legal evidence of your BAC. {'\n'}
                 It is intended for entertainment purposes only.</Text>
            </View> 
            </>
        );
    }
}

const msp = ({user, ngrokURL, dbBeers, userBeers}) => ({
    currentUser: user.currentUser,
    ngrokURL: ngrokURL,
    dbBeers: dbBeers.dbBeers,
    userBeers: userBeers.userBeers
  })

  const mdp = (dispatch) => {
    return {
        getbeers: (beers) => dispatch(getDbBeers(beers)),
        getUBeers: (beers) => dispatch(getUserBeers(beers)),
    }
  }

export default connect(msp, mdp)(Home);


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
          textAlign: 'center'
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