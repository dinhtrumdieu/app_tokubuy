import React, {Component} from 'react';
import {
    FlatList,
    Image, Text,
    View
} from 'react-native';
import Product from "../../model/Product";
import ItemProduct from "./ItemProduct";

export default class HomeTabItem1 extends Component {

    static navigationOptions = {
        tabBarLabel: '締切間近',

    };
    constructor(props){
        super(props);

        this.state = {
            data :[
              new Product(1,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
              new Product(2,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
              new Product(3,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
              new Product(4,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
              new Product(5,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
              new Product(6,"dinh dep trai",1000,require('../../../res/img/ic_layer6.png')),
            ],
        }
    }

    _renderItem = ({item}) => {
        return <ItemProduct
            itemData={item}
        />
    };
    _keyExtractor = (item) => item.id;

    render() {
        return (
            <FlatList
                numColumns={2}
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />

        );
    }
}

