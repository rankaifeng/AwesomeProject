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
    FlatList, TouchableHighlight,
} from 'react-native';
import HttpUtil from "../app/HttpUtil";
// noinspection JSAnnotator
export default class LoginSuccess extends Component<{}> {
    constructor() {
        super();
        let userDates = [];
        HttpUtil.get('cook/query?key=1d2e476415bafcd9bf227323b5be850e&menu=西红柿&rn=10&pn=3')
            .then((responseJson) => {
                for (var i = 0; i < responseJson.result.data.length; i++) {
                    userDates.push(responseJson.result.data[i]);
                }
            }, (json) => {
                alert(json);
            })
        this.state = {data: userDates};
    }

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.top1}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //列表的每一行
    renderItem({item, index}) {
        return (
            <TouchableHighlight onPress={this.onItemClick.bind(this, item)}>
                <View style={styles.top}>
                    <View style={styles.left}>
                        <Image source={{uri: item.albums[0]}}
                               style={styles.imgStyle}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.textStyle}>
                            {item.title}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    onItemClick(item) {
        const {navigate} = this.props.navigation;
        navigate('Two', {title: item.title})
        // alert(item.title);
    }
}

const styles = StyleSheet.create({
    top1: {
        flex: 1
    },
    top: {
        marginTop: 5,
        height: 200,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#585858'
    },
    imgStyle: {
        width: 200,
        height: 199,
    },
    textStyle: {
        fontSize: 30,
        color: 'red',
    },
    left: {
        width: 200,
        height: 200,
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
});
