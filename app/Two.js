/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import {NativeModules} from 'react-native';

// noinspection JSAnnotator
export default class Two extends Component<{}> {

    static navigationOptions = {
        header: null,
    }

    render() {
        let title = this.props.navigation.state.params.title;
        let name = this.state.name;
        if (name == "") {
            name = "默认原生是没有传过来数据的";
        }
        return (
            <View style={styles.top1}>
                <View style={{width: null, height: 200, alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: 'red'}}>这是上一个页面传过来的值</Text>
                    <Text style={{fontSize: 30, color: 'red'}}>{name}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => NativeModules
                        .ToastExample.intentActivity("com.awesomeproject.NewActivity", title)}>
                    <View style={{width: null, height: 200, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, color: 'red'}}>
                            {title}
                        </Text>
                        <Text style={{fontSize: 20, color: 'black'}}>
                            点击可以跳转到原生页面
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    top1: {
        flex: 1
    },
});
