import React, {Component} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {styles} from "../../../res/style/StyleIconTabBar";
import {CartStyle} from "../../../res/style/CartStyle";
import {AppStyle} from "../../../res/style/AppStyle";
import Product from "../../model/Product";
import ItemProductCart from "./ItemProductCart";

export default class CartComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'カート',
        header:null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/img/Layer11.png')}
                style={[styles.icon, tintColor = {tintColor}]}
            />
        ),
    };


    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Product(1, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
                new Product(2, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
                new Product(3, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
                new Product(4, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
                new Product(5, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
                new Product(6, "dinh dep trai", 1000, require('../../../res/img/ic_layer6.png')),
            ],
        }
    }

    _renderItem = ({item}) => {
        return <ItemProductCart
            itemData={item}
        />
    };
    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={CartStyle.Container}>
                <View style={AppStyle.ToolBar}>
                    <View/>
                    <Text style={AppStyle.TextToolBar}>カート</Text>
                    <View/>
                </View>
                <View style={CartStyle.ViewContent}>
                    <View style={CartStyle.ViewHeader}>
                        <Image style={CartStyle.ImageHeader}
                               source={require('../../../res/img/img_cart_avatar.png')}/>
                        <Text style={{marginBottom: 30}}>カートに商品がありません～</Text>
                        <View style={CartStyle.Button}>
                            <Text style={{fontSize: 17, color: '#fff',}}>お買い物</Text>
                        </View>
                    </View>
                    <View style={CartStyle.ViewBody}>
                        <Text style={{margin: 10, color: 'black'}}>おすすめ商品</Text>
                        <FlatList
                            numColumns={3}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

