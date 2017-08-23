import { StyleSheet} from 'react-native'
export const HomeStyle = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#d6d6db'
    },
    ViewContent:{
        flex:1,
    },
    ViewSlideShowAds:{
        height:144,
    },
    ViewIcon:{
        backgroundColor:'#fff',
        height:88,
        justifyContent:'space-around',
        flexDirection:'row'

    },
    ViewIconItem:{
        justifyContent:'center',
        alignItems:'center'
    },
    ViewTextDisPlay:{
        height:34,
        backgroundColor:'green'
    },
    ViewTab:{
        marginTop:10,
        flex:7,
        backgroundColor:'#fff'
    },

    //swipe
    slide1: {
        flex: 1,
        backgroundColor:'green'
    },
    slide2: {
        flex: 1,
        backgroundColor:'blue'
    },
    slide3: {
        flex: 1,
    },
    text: {
        marginTop:5,
        color: '#303030',
        fontSize: 13,
        fontWeight: 'bold',
    }
});