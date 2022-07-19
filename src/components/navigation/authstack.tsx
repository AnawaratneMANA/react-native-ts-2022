import React, {FC} from "react"
import { createStackNavigator} from '@react-navigation/stack'
const {Navigator, Screen} = createStackNavigator();
import {SignUp, Login} from "../screens"
const AuthStack : FC = () => {
    return (
        <Navigator>
            <Screen name="signup" component={SignUp}/>
            <Screen name="login" component={Login}/>
        </Navigator>
    )
}

export default AuthStack