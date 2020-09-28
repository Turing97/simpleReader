import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'


export type tab = {
	icon: string;
	text: string;
}
type propType = {
	tabs: Array<tab>
}
export default class Menu extends Component {
	props: propType

	constructor(props: propType) {
		super(props);
		// this.tabs = props.tabs
	}
	componentWillMount() { }
	componentDidMount() { }
	componentWillUnmount() { }
	componentDidShow() { }
	componentDidHide() { }

	render() {
		return (
			<View className="menu-wrapper">
				{this.props.tabs.map((item, index) => (
					<View key={index} className="menu-item">
						{item.text}
						<img src='../../asset/person-notchecked.svg'></img>
					</View>
				))}
			</View>
		)
	}
}