import React, {Component} from 'react';
import {
    View, StyleSheet, Image, Text
} from 'react-native';
import {Favourite} from "../../model/Fauvorite";
import {Time} from "./Time";

export default class ItemFavourite extends Component {

    render() {
        const favourite: Favourite = this.props.itemData;
        console.log(favourite.time);
        return (
            <View style={styles.Container}>
                <View style={styles.ViewLeft}>
                    <Image style={{width: '100%', height: '100%'}}
                           source={require('../../../res/img/img_favourite.png')}/>
                </View>
                <View style={styles.ViewRight}>
                    <Text style={{color: 'black', fontSize: 14, marginTop: 15, marginBottom: 10}}>adasdsadsds</Text>
                    <View style={styles.ViewMoney}>
                        <Text style={{color: '#a0a0a0', fontSize: 13}}>総必要：</Text>
                        <Text style={{color: '#a0a0a0', fontSize: 13}}>50[]</Text>
                    </View>
                    <View style={styles.ViewTime}>
                        <Image style={styles.IconAlarm} source={require('../../../res/img/ic_clock.png')}/>
                        <Time time={favourite.time}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 107,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderBottomColor: '#cccccc'
    },
    ViewLeft: {
        height: 105,
        width: '27%',
    },
    ViewRight: {
        width: '73%',
        height: '100%',
        paddingLeft: 7,
    },
    ViewTime: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ViewMoney: {
        flexDirection: 'row',
        marginBottom: 7
    },
    IconAlarm: {
        height: 20,
        width: 20,
        marginRight: 10,
    }
});

