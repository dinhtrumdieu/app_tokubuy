import React, {Component} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {ReviewStyle} from "../../../res/style/ReviewStyle";
import {AppStyle} from "../../../res/style/AppStyle";
import ItemReview from "./ItemReview";
import {styles} from "../../../res/style/StyleIconTabBar";
import {connect} from "react-redux";

class ReviewComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'レビュー',
        header: null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/img/Layer10.png')}
                style={[styles.icon, tintColor = {tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    _renderItem = ({item}) => {
        return (
            <ItemReview
            itemData = {item}/>
        )
    };

    _keyExtractor = (item) => item.id;


    render() {
        console.log("as"+this.props.data.listReview)
        return (
            <View style={ReviewStyle.Container}>
                <View style={AppStyle.ToolBar}>
                    <View style={{width: 20}}/>
                    <Text style={AppStyle.TextToolBar}>レビュー</Text>
                    <Image style={AppStyle.IconToolBar} source={require('../../../res/img/add.png')}/>
                </View>

                <FlatList
                    style={{paddingBottom: 50}}
                    data={this.props.data.listReview}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

function mapState(state) {
    return {data: state};
}

export default connect(mapState)(ReviewComponent);


