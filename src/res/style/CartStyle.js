import {StyleSheet} from'react-native'
export const CartStyle = StyleSheet.create({
    Container:{
        flex:1,
    },
    ViewContent:{
        flex:1,
    },
    ViewHeader:{
        flex:3,
        backgroundColor:'#e8e8e8',
        justifyContent:'center',
        alignItems:'center',
    },
    ViewBody:{
        flex:2,
        backgroundColor:'#fff'
    },
    Button:{
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: '#1D92FF',
        borderRadius: 5
    },
    ImageHeader:{
        height: 110,
        width: 110,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 55
    }
});