import { Component } from 'react'
import * as React from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
import person from '../../asset/person-checked.svg'


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
						<img src={ person } className="menu-icon"/>
						<Text
							className="menu-text"
						>
							{item.text}
						</Text>
					</View>
				))}
			</View>
		)
	}
}