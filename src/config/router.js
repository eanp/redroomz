import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text } from 'native-base'

import {
    Login, Register, ForgotPass, Splash, Profile,
    ChangePassword, EditProfile,SearchHotels, RedCash, Payment
} from '../pages/'

import MeIcon from 'react-native-vector-icons/Entypo'
import MmIcon from 'react-native-vector-icons/AntDesign'
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MfIcon from 'react-native-vector-icons/Feather'

import Search from '../pages/Search';
import CoLiving from '../pages/CoLiving';
import Offers from '../pages/Offers';
import Offersdetail from '../pages/Offersdetail';
import Bookings from '../pages/Bookings';
import Detail from '../pages/Detail';


const AuthStack = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        ForgotPass: { screen: ForgotPass },
        ChangePassword: { screen: ChangePassword },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    },
);

const BookingsNav = createStackNavigator({
    Bookings: {
        screen: Bookings,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Bookings',
})
BookingsNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const OffersNav = createStackNavigator({
    Offers: {
        screen: Offers,
        navigationOptions: {
            headerShown: false,
        },
    },
    Offersdetail: {
        screen: Offersdetail,
        navigationOptions: {
            headerShown: true,
            headerTitle: 'Terms & conditions',
            headerTitleAlign: 'center'
        }
    }
}, {
    initialRouteName: 'Offers',
})

OffersNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}
const CoLivingNav = createStackNavigator({
    CoLiving: {
        screen: CoLiving,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'CoLiving',
})
CoLivingNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}
const SearchNav = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Search',
})

SearchNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}


const BottomNav = createBottomTabNavigator({
    Search: {
        screen: SearchNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MmIcon name='search1' size={25} color={tintColor} />;
            },
        },
    },
    CoLiving: {
        screen: CoLivingNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <McIcon name='home-group' size={25} color={tintColor} />;
            },
        },
    },
    Offers: {
        screen: OffersNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <McIcon name='percent' size={25} color={tintColor} />;
            },
        },
    },
    Bookings: {
        screen: BookingsNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MeIcon name='archive' size={25} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MfIcon name='user' size={25} color={tintColor} />;
            },
        },
    },

}, {
    initialRouteName: 'Search',
    tabBarOptions: {
        labelStyle: {
            marginBottom: 5
        },
        activeTintColor: '#C81E1F',
        inactiveTintColor: '#ACACAC',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
            marginVertical: 3
        }
    }
})

const AppStack = createStackNavigator(
    {
        BottomNav,
        ChangePassword: { screen: ChangePassword },
        SearchHotels: { screen: SearchHotels },
        EditProfile: { screen: EditProfile },
        RedCash: { screen: RedCash },
        DetailHotel:{screen:Detail},
        Payment:{screen:Payment}
    }, {
    headerMode: 'none'
    , initialRouteName: 'BottomNav'
}
)

const SwitchNav = createSwitchNavigator({
    AppStack,
    AuthStack,
    Splash: { screen: Splash },
}, {
    initialRouteName: 'AppStack',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

export default Router;