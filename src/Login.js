import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

class Login extends React.Component {
    state = {
        name: null,
        password: null,
        users: []
    }

    componentDidMount() {
        let url = this.props.ngrokURL
        fetch(`${url}/users`)
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
        this.setState({name: ''})
        this.props.changeLogin()   
    }

    render() {
        const {name, password} = this.state
        const {changeName, changePassword, handleSubmit} = this
        const {navigation, changeLogin} = this.props
        return (
            <View>

                <Text>Username</Text>
                <TextInput style={styles.inputField} onChangeText={(text) =>  changeName(text)} value={name}/>

                <Text>Password</Text>
                <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={(text)=>changePassword(text)} value={password}/>
               
                <TouchableOpacity onPress={() => {handleSubmit(); navigation.navigate('Home') }}>
                    <Text>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeLogin()}>
                    <Text>Sign Up Instead</Text>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
   
})