import React from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import RadioForm from 'react-native-simple-radio-button';

const initialState = {name: null, weight: null, male: null, password: null}

class Signup extends React.Component {
    state = initialState

    //this should be refactored
    changeName = (text) => this.setState({name: text })
    changeWeight = (text) => this.setState({weight: text })
    changePassword = (text) => this.setState({password: text })

   createNewUser = () => {
        let url = this.props.ngrokURL   
        let  newUser = {name: this.state.name, weight: this.state.weight, 
            password: this.state.password, male: this.state.male}
        fetch(`${url}/users`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
            })
            .then(resp => {
              if (resp.errors){alert(resp.errors)}
              else {  this.props.setCurrentUser(resp)
                      this.setState(initialState)
                      this.props.changeSignup()
                      this.props.navigation.navigate('Home')
              }
            })
    }

    render() {
        const {name, weight, password} = this.state
        const {changeName, changePassword, changeWeight, createNewUser} = this
        const {changeSignup} = this.props

        const radio_props = [
            {label: 'Male', value: true },
            {label: 'Female', value: false },
            // {label: 'Other', value: false } // would like to make this a hybrid but need to change backend too
          ];
        return (
            <View>
            <Text>Enter your information to get started</Text>

            <Text>Desired Username</Text>
            <TextInput style={styles.inputField} onChangeText={(text) =>  changeName(text)} value={name}/>

            <Text>Password</Text>
            <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(text)=>changePassword(text)} value={password}/>

            <Text>Weight</Text>
            <TextInput keyboardType={'numeric'} style={styles.inputField} onChangeText={(text) =>  changeWeight(text)} value={weight}/>

            <Text>Biological sex</Text>
            <RadioForm radio_props={radio_props} initial={null} onPress={(value) => {this.setState({male:value})}} />

            <Button title="submit" onPress={() => createNewUser()}/>

            <TouchableOpacity onPress={() => changeSignup()}>
                    <Text>Log In Instead</Text>
            </TouchableOpacity>

        </View>
        );
    }
}

const mdp = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(null, mdp)(Signup);

const styles = StyleSheet.create({
    inputField: {
        height: 40, 
        width: 200, 
        backgroundColor: 'white',
        borderColor: 'gray', 
        borderWidth: 1 
    },
   
})