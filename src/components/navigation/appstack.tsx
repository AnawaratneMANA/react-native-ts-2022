import React, {FC} from "react"
import { createStackNavigator} from '@react-navigation/stack'
const {Navigator, Screen} = createStackNavigator();
import {Home, Dashboard} from "../screens"

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home}/>
            <Screen name="dashboard" component={Dashboard}/>
        </Navigator>
    )
}

export default AppStack;