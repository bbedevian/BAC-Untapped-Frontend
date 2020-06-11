import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Info = () => {
    return (
        <View style={styles.constainer}>
            <Text>Green</Text>
            <Text style={{backgroundColor: '#00ff00'}}>You're in the clear. Though it should be noted as you creep towards 0.05% your behavior will become exaggerated. 
                You may speak louder and gesture more. 
                You may also begin to lose control of small muscles, like the ability to focus your eyes, so vision will become blurry. 
                Your judgment is impaired, and coordination is reduced. 
                Tracking objects visually becomes more difficult, and your ability to respond to emergencies, like an object in your path, will be reduced. 
                Your inhibitions will be lowered causing you to potentially engage in risky behaviors like drunk driving.</Text>
            <Text>{'\n'}</Text>
            <Text> Yellow </Text>
            <Text style={{backgroundColor: '#ffff00'}}> 0.08%: This is the current legal limit in the U.S., other than Utah, and at this level it is considered illegal and unsafe to drive. 
                You will lose more coordination, so your balance, speech, reaction times, and even hearing will get worse. 
                Standing still, focusing on objects, and evading obstacles are all much harder. 
                Reasoning, judgment, self-control, concentration, and memory will be impaired. 
                Short-term memory loss may start.</Text>
            <Text>{'\n'}</Text>
            <Text>Red </Text>
            <Text style={{backgroundColor: '#ff3300'}}>0.15%: This BAC is very high. 
                You will have much less control over your balance and voluntary muscles, so walking and talking are difficult. 
                You may fall and hurt yourself. 
                Vomiting may begin.</Text>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text>Information provided by www.alcohol.org</Text>
        </View>
    );
}

export default Info;

const styles = StyleSheet.create({
    constainer: {
        fontSize: 70
    }
    
})