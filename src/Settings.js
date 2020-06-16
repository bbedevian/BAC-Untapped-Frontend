import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const Settings = (props) => {
    return (
        <View>
            <Text style={styles.username}>{props.currentUser.name}</Text>
            <Button title="Sign Out" onPress={() => props.navigation.navigate('LoginSignup')}/>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    username: {
        fontSize: 50,
        textAlign: 'center'
    }
})