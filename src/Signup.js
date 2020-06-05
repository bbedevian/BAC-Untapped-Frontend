import React from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


const initialState = {name: null, weight: null, male: null, password: null}
class Signup extends React.Component {
    state = initialState


    //this should be refactored
    changeName = (text) => this.setState({name: text })
    changeWeight = (text) => this.setState({weight: text })
    changePassword = (text) => this.setState({password: text })

   createNewUser = async () => {
       try {
        let  newUser = {name: this.state.name, weight: this.state.weight, 
            password: this.state.password, male: this.state.male}
         await fetch(`https://93fc9e8d6226.ngrok.io/users`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
            })
            .then(response => response.json())
            .then(newUser => this.props.setUser(newUser))
            .then(this.setState(initialState))
       } catch(e) {console.log(e)}
    }

    render() {
        const {name, weight, password} = this.state
        const {changeName, changePassword, changeWeight, createNewUser} = this

        const radio_props = [
            {label: 'Male', value: true },
            {label: 'Female', value: false }
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

            <Text>Gender</Text>
            <RadioForm radio_props={radio_props} initial={null} onPress={(value) => {this.setState({male:value})}} />

            <Button title="submit" onPress={() => createNewUser()}/>

        </View>
        );
    }
}

export default Signup;

const styles = StyleSheet.create({
    inputField: {
        height: 40, 
        width: 200, 
        backgroundColor: 'white',
        borderColor: 'gray', 
        borderWidth: 1 
    },
   
})