import React, {Component} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {FavouriteStyle} from "../../../res/style/FavouriteStyle";
import {styles} from "../../../res/style/StyleIconTabBar";
import {Favourite} from "../../model/Fauvorite";
import ItemFavourite from "./ItemFavourite";
import {AppStyle} from "../../../res/style/AppStyle";

export default class FavouriteComponent extends Component {

    static navigationOptions = {
        tabBarLabel: '最新の発表',
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/img/Layer9.png')}
                style={[styles.icon, tintColor = {tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Favourite(1, "dih", 40, "36000", '1233'),
                new Favourite(2, "dih", 40, "35000", '1233'),
                new Favourite(3, "dih", 40, "10000", '1233'),
                new Favourite(4, "dih", 40, "3600", '1233'),
                new Favourite(5, "dih", 40, "15000", '1233'),
                new Favourite(6, "dih", 40, "13000", '1233'),
            ]
        }
    }

    _renderItem = ({item}) => {
        return <ItemFavourite
            itemData={item}
        />
    };

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={FavouriteStyle.Container}>
                <View style={AppStyle.ToolBar}>
                    <View/>
                    <Text style={AppStyle.TextToolBar}>最新の発表</Text>
                    <View/>
                </View>

                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>

        );
    }
}

