import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({onPress, label}) => (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
);

const styles = {
    button: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#1672fe',
        borderRadius: 4
    },

    text: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14,
        color: '#1672fe',
        alignSelf: 'center'
    }
};

export default Button;