/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TextInput,
    Text, ToastAndroid, TouchableOpacity
} from 'react-native';
import {NativeModules} from 'react-native';
//noinspection JSAnnotator
export default class Login extends Component<{}> {
    static navigationOptions = {
        header: null,
        title: '登陆',    //设置navigator的title
        headerStyle: {backgroundColor: '#25e0f6'},
        headerTitleStyle: {
            color: 'red'
        },
    }

    //构造函数
    constructor(props) {
        super(props);
        this.state = {userName: '', userPwd: ''};
    }

    componentDidMount() {
        NativeModules.ToastExample.gotoJs((msg) => {
                alert(msg)
            },
            (result) => {
                alert('JS界面:错误信息为:' + result);
            })
    }
    /**
     * 登陆
     */
    onLogin() {
        const {navigate} = this.props.navigation;
        let userName = this.state.userName;
        let userPwd = this.state.userPwd;
        if (!userName) {
            ToastAndroid.show("用户名不为空！", ToastAndroid.SHORT);
            return;
        }
        if (!userPwd) {
            ToastAndroid.show("请输入密码！", ToastAndroid.SHORT);
            return;
        }
        navigate('LoginSuccess')
    }

    render() {
        return (
            <ImageBackground
                style={styles.top}
                source={{uri: 'login'}}>
                <View style={styles.login}>
                    <View style={[styles.publicWidth, styles.publicLogin]}>
                        <Image source={require('../image/name.png')}/>
                        <TextInput placeholder={'请输入用户名'} underlineColorAndroid='transparent'
                                   style={styles.input} placeholderTextColor={'white'}
                                   onChangeText={(userName) => this.setState({userName})}/>
                    </View>
                    <View style={[styles.publicWidth, styles.publicLogin]}>
                        <Image source={require('../image/pwd.png')}/>
                        <TextInput placeholder={'请输入密码'} underlineColorAndroid='transparent'
                                   style={styles.input} secureTextEntry={true} placeholderTextColor={'white'}
                                   onChangeText={(userPwd) => this.setState({userPwd})}/>
                    </View>
                    <View style={styles.btnLogin}>
                        <TouchableOpacity style={styles.loginText} onPress={this.onLogin.bind(this)}>
                            <Text style={styles.login_text}>登陆</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
    },
    login: {
        width: null,
        height: 300,
    },

    publicWidth: {
        width: null,
        height: 75,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        marginTop: 10,
        borderBottomColor: 'white'
    },
    publicLogin: {
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    btnLogin: {
        flex: 1,
        justifyContent: 'center',
    },
    loginText: {
        height: 60,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
    },
    login_text: {
        color: '#4686c7',
        fontSize: 30,
    }
});
