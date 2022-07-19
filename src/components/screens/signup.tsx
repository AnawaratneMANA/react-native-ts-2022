import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native'

// FC stands for the functional component. 
const App : FC = () => {
    return (
        <View>
            <Text>Sign up screen!</Text>
        </View>
    )
}

// Styles configuration.
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})
