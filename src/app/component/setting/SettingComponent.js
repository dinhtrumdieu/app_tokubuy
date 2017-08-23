import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "../../../res/style/StyleIconTabBar";
import {SettingStyle} from "../../../res/style/SettingStyle";
import {AppStyle} from "../../../res/style/AppStyle";

export default class SettingComponent extends Component {

    static navigationOptions = {
        tabBarLabel: 'YOU',
        header:null,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../res/img/Layer12.png')}
                style={[styles.icon, tintColor = {tintColor}]}
            />
        ),
    };

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#EFEFF4'}}>
                <View style={SettingStyle.Container}>
                    <View style={SettingStyle.ViewContent}>

                        <Image blurRadius={2} style={{width: '100%', height: 182}}
                               source={require('../../../res/img/img_setting.jpg')}/>

                        <View style={SettingStyle.ToolBar}>
                            <Image style={AppStyle.IconToolBar} source={require('../../../res/img/share.png')}/>
                            <View/>
                            <Image style={AppStyle.IconToolBar} source={require('../../../res/img/settings.png')}/>
                        </View>

                        <View style={SettingStyle.Avatar}>
                            <Image style={{height: 60, width: 60, marginBottom: 15}}
                                   source={require('../../../res/img/menu1.png')}/>
                            <View style={{
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 30,
                                paddingRight: 30,
                                borderColor: '#e3e3e3',
                                borderWidth: 0.3,
                                borderRadius: 5
                            }}>
                                <Text style={{color: '#d7d7d7'}}>ログイン</Text>
                            </View>
                        </View>

                        <View style={SettingStyle.Setting1}>
                            <View style={SettingStyle.ViewItem}>
                                <View style={SettingStyle.Item}>
                                    <Image resizeMode='stretch' style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting1.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>初めての方へ</Text>
                            </View>
                            <View style={SettingStyle.ViewItem}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting2.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>友達招待</Text>
                            </View>
                            <View style={SettingStyle.ViewItem}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting3.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>ポイント</Text>
                            </View>
                            <View style={SettingStyle.ViewItem}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting4.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>アドレス著</Text>
                            </View>
                            <View style={SettingStyle.ViewItem}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting5.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>購入履歴</Text>
                            </View>
                        </View>

                        <View style={SettingStyle.Setting2}>
                            <View style={SettingStyle.ViewItem2}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting6.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>獲得履歴</Text>
                            </View>
                            <View style={SettingStyle.ViewItem2}>
                                <View style={SettingStyle.Item}>
                                    <Image style={SettingStyle.Icon}
                                           source={require('../../../res/img/ic_setting7.png')}/>
                                    <View/>
                                    <Image style={SettingStyle.ImageItem}
                                           source={require('../../../res/img/ic_setting_right-arrow.png')}/>
                                </View>
                                <Text style={SettingStyle.TextItem}>レビュー</Text>
                            </View>
                        </View>

                        <Text style={{fontSize: 13, marginTop: 10}}>全ての計算イベントはapple.Incと無関係です。</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}



