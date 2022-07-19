import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native'

// FC stands for the functional component. 
const App : FC = () => {
    return (
        <View>
            <Text>Home screen!</Text>
        </View>
    )
}

export default App;

// Styles configuration.
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})
