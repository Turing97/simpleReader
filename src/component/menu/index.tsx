import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'


type tab = {
    icon: string;
    text: string;
}
type propType ={
    tabs: Array<tab>
}
export default class Menu extends Component {
    props: propType

    constructor(props:propType) {
        super(props);
        // this.tabs = props.tabs
    }
    componentWillMount() {
        // this.props.tabs = []
        console.log()
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View>
                {this.props.tabs.map((item, index) => (
                    <View className="class" key={index}>{item.text}</View>
                ))}
            </View>
        )
    }
}