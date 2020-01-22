import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Body
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import { withNavigation } from 'react-navigation'

import {
    getItems
} from '../redux/actions/Items';
import { connect } from 'react-redux'


class Items extends Component {
    render() {
        return (
            <Card style={{ marginBottom: 10, height: 150, width: 350, borderRadius: 10, elevation: 5 }
            }>
                <TouchableOpacity>

                    <CardItem cardBody style={{ flexDirection: 'row', borderTopWidth: 3, borderColor: '#43AB4A', borderRadius: 5 }}>
                        <Image source={{ uri: '' }} style={{ left: 5, height: 120, width: 120 }} />
                        <View style={{ flex: 1, flexDirection: 'row', left: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 22 }} >Lawless Burger</Text>
                                <Text style={{ fontSize: 16 }} >Category</Text>
                                <Text style={{ fontSize: 16 }} >Lawless </Text>
                                <Text style={{ fontSize: 16 }} >Desc </Text>
                                <Text style={{ fontSize: 16 }} >Rp.20.000,- </Text>
                            </View>

                        </View>
                    </CardItem>
                </TouchableOpacity>
            </Card >
        )
    }
}

class Menus extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", marginTop: 10 }}>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Items />
                        <Items />
                        <Items />
                        <Items />
                        <Items />
                    </ScrollView>
                </View>
            </View>
        )
    }
}


class Itemslist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            fileImage: '',
            count: '',
            id: '',
            itemname: '',
            price: '',
            description: '',
            id_cat: '',
            category: '',
            id_resto: '',
            restaurant: '',
            isLoading: false
        }
    }
    async componentDidMount() {
        await this.props.dispatch(getItems())
        this.setState({
            count: this.props.items.info.count,
            isLoading: this.props.items.isLoading
        })
    }
    render() {
        return (
            <View>

                {!this.state.isLoading &&
                    this.props.items.data.map(v => (
                        <Card style={{ marginBottom: 10, height: 150, width: 350, borderRadius: 10, elevation: 5 }
                        } key={v.id}>
                            <TouchableOpacity>

                                <CardItem cardBody style={{ flexDirection: 'row', borderTopWidth: 3, borderColor: '#43AB4A', borderRadius: 5 }}>
                                    <Image source={{ uri: `${v.image}` }} style={{ left: 5, height: 120, width: 120 }} />
                                    <View style={{ flex: 1, flexDirection: 'row', left: 20 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 22 }} >{v.itemname}</Text>
                                            <Text style={{ fontSize: 16 }} >{v.category}</Text>
                                            <Text style={{ fontSize: 16 }} >{v.restaurant} </Text>
                                            <Text style={{ fontSize: 16 }} >{v.description} </Text>
                                            <Text style={{ fontSize: 16 }} >Rp.{v.price},- </Text>
                                        </View>

                                    </View>
                                </CardItem>
                            </TouchableOpacity>
                        </Card >))}
            </View>



        )
    }
}


const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Itemslist)
