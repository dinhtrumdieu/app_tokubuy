import {
    StyleSheet,

} from 'react-native';

export const MenuStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#EFEFF4'
    },
    ToolBar: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DE2F50',
    },
    ViewContent: {
        flex: 14
    },
    ViewSearch: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        padding:7,
    },
    ViewContextSearch: {
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'

    },
    ViewFlatList: {
        flex: 13,
    }
});