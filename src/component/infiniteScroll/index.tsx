import React, { Component } from 'react'
import { Icon, ScrollView, View, Text } from '@tarojs/components'
import Item from '../listItem/index'


type propType= {
  children:React.ReactNode,
  data:Array<viewData>,
  className: string
}
export type viewData = {
  icon: string,
  title: string
}
export default class Index extends Component {
  props:propType
  constructor(props:propType) {
    super(props);
  }
  componentWillMount () { }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return (
      <View>
        
        <Item>1</Item>
        <Item></Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
        <Item>11</Item>
        <Item>12</Item>
        <Item>13</Item>
        <Item>14</Item>
        <Item>15</Item>
      </View>
    )
  }
}