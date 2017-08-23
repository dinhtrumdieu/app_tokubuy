import {StackNavigator, TabNavigator} from "react-navigation";
import HomeComponent from "./component/home/HomeComponent";
import FavouriteComponent from "./component/favourite/FavouriteComponent";
import ReviewComponent from "./component/review/ReviewComponent";
import CartComponent from "./component/cart/CartComponent";
import SettingComponent from "./component/setting/SettingComponent";
import MenuComponent from "./component/menu/MenuComponent";

const TabMenu = TabNavigator({
    Home: {
        screen: HomeComponent,
    },
    Favourite: {
        screen: FavouriteComponent,
    },
    Review: {
        screen: ReviewComponent,
    },
    Cart: {
        screen: CartComponent,
    },
    Setting: {
        screen: SettingComponent,
    }
}, {

    tabBarPosition: 'bottom',
    swipeEnabled:false,
    tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#DE2F50',
        showIcon: true,
        tabBarPosition: 'bottom',
        labelStyle: {
            fontSize: 10,
            marginTop: 4,
        },
        style: {
            backgroundColor: '#f3f3f3',
            height: 50,
            borderTopWidth: 0.7,
            borderTopColor: '#c7c7c7'
        },
    },

},);

export const App = StackNavigator({
    TabMenu: {
        screen: TabMenu,
    },
    Menu: {
        screen: MenuComponent,
    },
});

