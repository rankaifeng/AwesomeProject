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
import HttpUtil from "../app/HttpUtil";

// noinspection JSAnnotator
export default class Two extends Component<{}> {

    static navigationOptions = {
        header: null,
    }

    render() {
        let title = this.props.navigation.state.params.title;
        return (
            <View style={styles.top1}>
                <View style={{width: null, height: 200, alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: 'red'}}>这是上一个页面传过来的值</Text>
                </View>
                    <View style={{width: null, height: 200, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 30, color: 'red'}}>
                            {title}
                        </Text>
                        <Text style={{fontSize: 20, color: 'black'}}>
                            点击可以跳转到原生页面
                        </Text>
                    </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    top1: {
        flex: 1
    },
});
