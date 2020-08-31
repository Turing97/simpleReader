import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'


type tab = {
    icon: string;
    text: string;
}
type tabs = {
    icon: string;
    text: string;
}[]


// function items() {
//     for (let i = 0; i < this.props.tabs.length; i++) {
//         console.log('11')
//         // return <Text> {this.props.tabs[i].text}</Text>

//     }
// }
export default class Menu extends Component {
    tabs: tabs

    constructor(props) {
        super(props);
        this.tabs = props.tabs
    }

    componentWillMount() {
        // this.props.tabs = []
        console.log(this.tabs)


    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View>
                {this.tabs.map((item, index) => (
                    <View className="clas" key={index}>{item.text}</View>
                ))}
            </View>
        )
    }
}