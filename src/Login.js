import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends React.Component {
    state = {
        name: null,
        password: null,
        users: []
    }

    componentDidMount() {
        fetch(`https://853067e7bc1c.ngrok.io/users`)
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    changeName = (text) => this.setState({name: text })
    changePassword = (text) => this.setState({password: text })

    handleSubmit = () => {
       let user = this.state.users.find(user => user.name.toLowerCase() === this.state.name.toLowerCase())
       if (user) {
        this.props.setUser(user)
       } else {
            alert("Seems like we cant find you, try creating an account")
           }   
    }

    render() {
        const {name, password} = this.state
        const {changeName, changePassword, handleSubmit} = this
        // console.log('login state :>> ', this.state);
        return (
            <View>
                <Text>Username</Text>
                <TextInput style={styles.inputField} onChangeText={(text) =>  changeName(text)} value={name}/>

                <Text>Password</Text>
                <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(text)=>changePassword(text)} value={password}/>
               
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            );

    }
}

export default Login;

const styles = StyleSheet.create({
    inputField: {
        height: 40, 
        width: 200, 
        backgroundColor: 'white',
        borderColor: 'gray', 
        borderWidth: 1 
    },
   
})