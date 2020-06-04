import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Login from './Login';
import Signup from './Signup';



class LoginSignup extends Component {

    state = {
        login: false,
        signup: false
    }

    changeLogin = () =>{
        this.setState({login: true})
    }
    changeSignup = () =>{
        this.setState({signup: true})
    }


    render() {
    const {login, signup} = this.state
    const {changeLogin, changeSignup} = this
    const {setUser} = this.props
    // console.log('LS props :>> ', this.props);
        return (
            <View >
            {!login && !signup ? 
            <View style={styles.background}>
                <Text style={styles.welcomeText}>Login or Signup Page</Text>
                <TouchableOpacity style={styles.loginButton} onPress={changeLogin}>
                    <Text>Click Here To Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton}onPress={changeSignup}>
                    <Text>Click Here To Sign Up</Text>
                </TouchableOpacity>    
            </View>
            :
            <View>
                {login ?  <Login setUser={setUser}/> : null}
                {signup ?  < Signup setUser={setUser}/> : null}
            </View>
        }  
        </View>
        );
    }
}

export default LoginSignup;

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    welcomeText: {
        position: "absolute",
        top: 50,
        left: 125,
    },
    loginButton: {
        width: screenWidth,
        height: 70,
        backgroundColor: "yellow",
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",

    },
    signupButton: {
        width: screenWidth,
        height: 70,
        backgroundColor: "#4ecdc4",
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
    
    }
})