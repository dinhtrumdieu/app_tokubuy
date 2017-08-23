import React, {Component} from 'react';
import {
    FlatList, Image, Text, TextInput, TouchableOpacity,
    View
} from 'react-native';
import {MenuStyles} from "../../../res/style/MenuStyle";
import ItemMenu from "./ItemMenu";
import Menu from "../../model/Menu";
import {Appstyle, AppStyle} from "../../../res/style/AppStyle";
import App from "../../App";

export default class MenuComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'Menu',
        header:null,
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [
                new Menu(1, "全ての商品", require('../../../res/img/menu1.png')),
                new Menu(2, "デジタル", require('../../../res/img/menu2.png')),
                new Menu(3, "家電", require('../../../res/img/menu3.png')),
                new Menu(4, "アクセサリー", require('../../../res/img/menu4.png')),
                new Menu(5, "食品＆飲料", require('../../../res/img/menu5.png')),
                new Menu(6, "コスメ・美容", require('../../../res/img/menu6.png')),
                new Menu(7, "スポーツ", require('../../../res/img/menu7.png')),
                new Menu(8, "ゲーム関連", require('../../../res/img/menu8.png')),
                new Menu(9, "仮想通貨", require('../../../res/img/menu9.png')),
                new Menu(10, "その他商品", require('../../../res/img/menu10.png')),
                new Menu(11, "少物", require('../../../res/img/menu11.png')),
                new Menu(12, "ブランド品", require('../../../res/img/menu12.png')),
            ],
        }
    }

    _renderItem = ({item}) => {
        return <ItemMenu
            itemData={item}
        />
    };

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={MenuStyles.Container}>
                <View style={AppStyle.ToolBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                     <Image style={AppStyle.IconToolBar} source={require('../../../res/img/left-arrow.png')}/>
                    </TouchableOpacity>
                    <Text style={AppStyle.TextToolBar}>カテゴリ</Text>
                    <View/>
                </View>
                <View style={MenuStyles.ViewContent}>
                    <View style={MenuStyles.ViewSearch}>
                        <View style={MenuStyles.ViewContextSearch}>
                            <Image style={{width: 22, height: 22}}
                                   source={require('../../../res/img/magnifying-glass.png')}/>
                            <TextInput style={{flex: 1}}
                                       underlineColorAndroid='transparent'
                                       placeholder='商品を検索'
                                       placeholderTextColor='#979C9C'
                            />
                        </View>
                    </View>
                    <View style={MenuStyles.ViewFlatList}>
                        <FlatList
                            numColumns={2}
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




