import React, {Component,} from 'react';
import {
    View, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import {commentActionClick, likeActionClick} from "../../redux/action/LikeAction";
import {Review} from "../../model/Review";

class ItemReview extends Component {
    render() {
        const review: Review = this.props.itemData;
        return (
            <View style={styleReview.Container}>
                <View style={styleReview.ViewContent}>
                    <View style={styleReview.ViewLeft}>
                        <Image style={{width: 54, height: 54, marginTop: 10, borderRadius: 27}}
                               source={require('../../../res/img/songoku.jpg')}/>
                    </View>
                    <View style={styleReview.ViewRight}>
                        <View style={styleReview.ViewHeader}>
                            <Text style={{color: '#6AC0FF', fontSize: 16}}>コメント</Text>
                            <View/>
                            <Text>08-17 05:34</Text>
                        </View>
                        <View style={styleReview.ViewBody}>
                            <Text style={{color: 'black', marginBottom: 3, fontSize: 12}}>いいね メント</Text>
                            <Text numberOfLines={1} style={{marginBottom: 5, fontSize: 12}}>コメント コメント コメント コメント コメント
                                コメント コメント コメント</Text>
                            <Image style={{width: 86, height: 86}}
                                   source={require('../../../res/img/ads1.jpg')}/>
                        </View>
                        <View style={styleReview.ViewLike}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={this.props.likeActionClick(review.id)}>
                                    <Image style={{width: 15, height: 15, marginRight: 10}}
                                           source={require('../../../res/img/heart-shape-outline.png')}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 11}}>いいね({review.like})</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => commentActionClick(review.id)}>
                                    <Image style={{width: 15, height: 15, marginRight: 5}}
                                           source={require('../../../res/img/chat.png')}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 11}}>コメント({review.comment})</Text>
                            </View>
                            <Text style={{color: '#d15d6a'}}>運試し> </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginLeft: 20, borderBottomWidth: 0.7,
                    borderBottomColor: '#d0d0d0'
                }}>
                </View>
            </View>

        );
    }
}

export default connect(null,
    {
        likeActionClick,commentActionClick
    })(ItemReview);

const styleReview = StyleSheet.create({
    ViewContent: {
        height: 220,
        width: '100%',
        flexDirection: 'row',
    },
    ViewLike: {
        height: 25,
        backgroundColor: '#dadada',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 15,
    },
    ViewLeft: {
        width: '19%',
        alignItems: 'center'
    },
    ViewRight: {
        width: '81%',
    },
    ViewHeader: {
        marginTop: 15,
        marginBottom: 6,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 10
    },
    ViewBody: {
        height: 140,
        backgroundColor: '#ededed',
        marginBottom: 5,
        paddingLeft: 5,
        marginRight: 15,
        paddingTop: 7,
        paddingRight: 50,
    },
});

