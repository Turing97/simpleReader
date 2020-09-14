import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView, { viewData } from '../../component/infiniteScroll/index'

export default class Index extends Component {
  data: Array<viewData> = [
    {
      icon:'1',
      title:'1'
    },
    {
      icon:'1',
      title:'2'
    },
    {
      icon:'1',
      title:'3'
    },{
      icon:'1',
      title:'4'
    }
  ]
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <ScrollView data = { this.data } className="scrollContent">
        </ScrollView>
      </View>
    )
  }
}
