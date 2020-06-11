import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const Settings = (props) => {
console.log('props.currentUser :>> ', props.currentUser);
    return (
        <View>

            

            <Button title="Sign Out" onPress={() => props.navigation.navigate('LoginSignup')}/>

        </View>
    );
}

export default Settings;