import React, {Component} from 'react';
import {
    Image, Text,
    View
} from 'react-native'

export default class ItemProduct extends Component {

    render() {
        return (
            <View style={{padding:10,flex:1,margin:1}}>
                <View style={{height:90,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{height:90,width:90}} source={require('../../../res/img/item_camera.jpg')}/>
                </View>

                <Text numberOfLines={2} style={{fontSize:13}} >If true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.</Text>
                    <View style={{backgroundColor:'#FBDEC9',width:'100%',height:6,borderRadius:6,marginTop:6}}>
                    </View>

            </View>
        );
    }
}

