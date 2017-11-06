import React, {Component} from 'react';
import login from './app/Login';
import {StackNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';
import LoginSuccess from "./app/LoginSuccess";
import Two from "./app/Two";
// noinspection JSAnnotator
export default class App extends Component<{}> {
    render() {
        return (
            <Navigator/>
        );

    }
}
const Navigator = StackNavigator({
    Home: {screen: login},
    LoginSuccess: {screen: LoginSuccess},
    Two: {screen: Two}
});
AppRegistry.registerComponent('App', () => App);