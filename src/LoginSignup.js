import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import Login from './Login';
import Signup from './Signup';



class LoginSignup extends Component {

    state = {
        login: false,
        signup: false
    }

    changeLogin = () =>{this.setState({login: !this.state.login})}
    changeSignup = () =>{this.setState({signup: !this.state.signup})}


    render() {
    const {login, signup} = this.state
    const {changeLogin, changeSignup} = this
    const {setUser, navigation, ngrokURL} = this.props
        return (
                <View style={styles.background}>
                {!login && !signup ? 
                <View style={styles.background}>
                    <ImageBackground style={styles.image} source={{uri: "https://i.pinimg.com/originals/db/7f/c2/db7fc263c7ff27035979a51498577d8a.jpg"}}>
                    <TouchableOpacity style={styles.loginButton} onPress={changeLogin}>
                        <Text>Click Here To Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton}onPress={changeSignup}>
                        <Text>Click Here To Sign Up</Text>
                    </TouchableOpacity>   
                    </ImageBackground> 
                </View>
                : // either log in or sign up based on above click
                <View>
                    {login ?  <Login setUser={setUser} navigation={navigation} ngrokURL={ngrokURL} changeLogin={changeLogin}/> : null}
                    {signup ?  < Signup setUser={setUser} navigation={navigation} ngrokURL={ngrokURL} changeSignup={changeSignup}/> : null}
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
        backgroundColor: 'rgb(255,205,0)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    signupButton: {
        width: screenWidth,
        height: 70,
        backgroundColor: "#4ecdc4",
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})