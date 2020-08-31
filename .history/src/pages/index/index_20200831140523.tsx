import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView from '../../component/infiniteScroll/index'

type viewData = {
  icon:string,
  title:string
}
export default class Index extends Component {
  data: viewData = {
    icon:'1',
    title:'2'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <ScrollView data={ this.data } className="scrollContent">
        </ScrollView>
      </View>
    )
  }
}
