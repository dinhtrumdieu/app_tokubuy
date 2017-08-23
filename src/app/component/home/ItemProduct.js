import React, {Component} from 'react';
import {
    Image, Text,
    View
} from 'react-native'

export default class ItemProduct extends Component {

    render() {
        return (
            <View style={{padding: 10, flex: 1, margin: 1, backgroundColor: '#fff'}}>
                <View style={{height: 120, justifyContent: 'center', alignItems: 'center',marginBottom:15}}>
                    <Image style={{height: 120, width: 120}} source={require('../../../res/img/sony_playtation.png')}/>
                </View>

                <Text numberOfLines={2} style={{fontSize:13,color:'#0d0d0d'}}>Panasonic カテゴリー 締切間近as レビュー
                    最新の発表</Text>
                <View style={{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'space-between',marginTop:3,}}>
                    <View style={{width: '74%', height: 40}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize:13}}>最新の:</Text>
                            <Text style={{fontSize:13}}>1402</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{
                                height: 5,
                                width: '12%',
                                backgroundColor: '#F59228',
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }}/>
                            <View style={{height: 5, width: '88%', backgroundColor: '#FBDEC8',borderTopRightRadius:3,borderBottomRightRadius:3}}/>
                        </View>
                    </View>
                    <Image style={{height: 35, width: 35}} source={require('../../../res/img/shopping-cart.png')}/>
                </View>
            </View>
        );
    }
}

