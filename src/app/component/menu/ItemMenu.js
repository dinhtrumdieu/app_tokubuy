import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import Menu from "../../model/Menu";

export default class ItemMenu extends Component {

    render() {
        const menu: Menu = this.props.itemData;
        return (
            <View style={styles.Container}>
                <Image style={{height:50, width:50,marginRight:15}} source={menu.images}/>
                <Text style={{color:'#111111'}}>{menu.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding:10,
        backgroundColor: '#fff',
        marginRight:1,
        marginBottom:1,
        alignItems:'center',
        flexDirection:'row'
    }
});

