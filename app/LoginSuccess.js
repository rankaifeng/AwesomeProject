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
    TextInput,
    FlatList, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import {NativeModules} from 'react-native';
import HttpUtil from "../app/HttpUtil";
// noinspection JSAnnotator
export default class LoginSuccess extends Component<{}> {
    constructor() {
        super();
        this.state = {data: [], searchFood: ''};
        this.httpRequest("西红柿", 1);
    }

    httpRequest(menu, pn) {
        NativeModules.ToastExample.showProgress("正在加载中......");
        HttpUtil.get('cook/query?key=1d2e476415bafcd9bf227323b5be850e&menu=' + menu + '&rn=10&pn=' + pn)
            .then((responseJson) => {
                NativeModules.ToastExample.hideProgress();
                this.setState({data: responseJson.result.data});
            }, (json) => {
                alert(json);
            })
    }

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.top1}>
                <View style={styles.search}>
                    <View style={{
                        justifyContent: 'center', flex: 1
                    }}>
                        <TextInput placeholder={'请输入你要搜索的菜名如：(萝卜)'}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(text) => this.setState({searchFood: text})}
                                   style={{
                                       fontSize: 20, color: 'white', borderWidth: 1,
                                       borderColor: 'white', borderRadius: 20, marginLeft: 20,
                                       height: 55
                                   }}
                                   placeholderTextColor={'white'}
                        />
                    </View>
                    <TouchableOpacity onPress={this.searchFoods.bind(this)}
                                      style={{
                                          justifyContent: 'center', width: 80
                                      }}>
                        <View>
                            <Image source={require('../image/search.png')}
                                   style={{width: 40, height: 40, marginLeft: 10}}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
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

    searchFoods() {
        let searchFood = this.state.searchFood;
        if (searchFood == "") {
            this.httpRequest("西红柿", 1);
            return;
        }
        this.httpRequest(searchFood, 1);
    }

    onItemClick(item) {
        const {navigate} = this.props.navigation;
        navigate('Two', {title: item.title})
    }
}

const
    styles = StyleSheet.create({
        search: {
            height: 100,
            flexWrap: 'nowrap',
            flexDirection: 'row',
        },
        top1: {
            flex: 1,
            backgroundColor: '#bfbfbf'
        },
        top: {
            marginTop: 5,
            height: 200,
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#585858'
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
