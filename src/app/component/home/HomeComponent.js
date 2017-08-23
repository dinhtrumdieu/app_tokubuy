import React, {Component} from 'react';
import {Image, ScrollView, Text, View, Dimensions, TouchableOpacity} from "react-native";
import {HomeStyle} from "../../../res/style/HomeStyle";
import Swiper from 'react-native-swiper';
import {styles} from "../../../res/style/StyleIconTabBar";
import {TabNavigator} from "react-navigation";
import HomeTabItem from "./HomeTabItem";
import HomeTabItem1 from "./HomeTabItem1";
import HomeTabItem2 from "./HomeTabItem2";
import HomeTabItem3 from "./HomeTabItem3";
import HomeTabItem4 from "./HomeTabItem4";
import {AppStyle} from "../../../res/style/AppStyle";

const {height} = Dimensions.get('window');

export default class HomeComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'ホーム',
        header:null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/img/Layer13.png')}
                style={[styles.icon, tintColor = {tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
            visibleSwiper: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true,
            });
        }, 100);
    }

    renderSwiper() {
        if (this.state.visibleSwiper) {
            return (
                <Swiper autoplay={true}
                        loop={true}
                        index={0}
                        horizontal={true}
                        autoplayTimeout={2}
                >
                    <View style={HomeStyle.slide1}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/ads1.jpg')}/>
                    </View>
                    <View style={HomeStyle.slide2}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/ads2.jpg')}/>
                    </View>
                    <View style={HomeStyle.slide3}>
                        <Image style={{width: '100%', height: '100%'}}
                               source={require('../../../res/img/ads3.jpg')}/>
                    </View>
                </Swiper>
            )
        }
    }

    render() {
        return (
            <View style={HomeStyle.Container}>
                <View style={AppStyle.ToolBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                        <Image style={AppStyle.IconToolBar} source={require('../../../res/img/menu.png')}/>
                    </TouchableOpacity>
                    <Text style={AppStyle.TextToolBar}>値BUY!</Text>
                    <Image style={AppStyle.IconToolBar} source={require('../../../res/img/chat1.png')}/>
                </View>
                <View style={HomeStyle.ViewContent}>
                    <View style={HomeStyle.ViewSlideShowAds}>
                        {this.renderSwiper()}
                    </View>
                    <View style={HomeStyle.ViewIcon}>
                        <View style={HomeStyle.ViewIconItem}>
                            <Image style={{width: 35, height: 35}} source={require('../../../res/img/ic_message.png')}/>
                            <Text style={HomeStyle.text}>カテゴリー</Text>
                        </View>
                        <View style={HomeStyle.ViewIconItem}>
                            <Image style={{width: 35, height: 35}} source={require('../../../res/img/ic_Layer4.png')}/>
                            <Text style={HomeStyle.text}>1000円BUY</Text>
                        </View>
                        <View style={HomeStyle.ViewIconItem}>
                            <Image style={{width: 35, height: 35}} source={require('../../../res/img/ic_layer5.png')}/>
                            <Text style={HomeStyle.text}>レビュー</Text>
                        </View>
                        <View style={HomeStyle.ViewIconItem}>
                            <Image style={{width: 35, height: 35}} source={require('../../../res/img/ic_layer6.png')}/>
                            <Text style={HomeStyle.text}>ヘルプ</Text>
                        </View>
                    </View>
                    <View style={HomeStyle.ViewTextDisPlay}>
                    </View>
                    <View style={HomeStyle.ViewTab}>
                        <TabHome/>
                    </View>
                </View>
            </View>
        );
    }
}

export const TabHome = TabNavigator({
    HomeTabItem: {
        screen: HomeTabItem,
    },
    HomeTabItem1: {
        screen: HomeTabItem1,
    },
    HomeTabItem2: {
        screen: HomeTabItem2,
    },
    HomeTabItem3: {
        screen: HomeTabItem3,
    },
    HomeTabItem4: {
        screen: HomeTabItem4,
    }
}, {

    tabBarPosition: 'top',
    tabBarOptions: {
        labelStyle: {
            fontSize: 10,
            color: '#060004',
            fontWeight: 'bold'
        },
        style: {
            backgroundColor: '#ffffff',
            height: 40,
        },
    },

},);


