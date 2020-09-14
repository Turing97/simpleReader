import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView, { viewData } from '../../component/infiniteScroll/index'

import Menu from '../../component/menu/index'


export default class Index extends Component {
  data: viewData[] = [
    {
      icon: '1',
      title: '2'
    },
    {
      icon: '1',
      title: '2'
    },
    {

      icon:'1',
      title:'3'
    },{
      icon:'1',
      title:'4'
    }, {
      icon: '1',
      title: '2'

    }
  ]
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (

      <View className='index' id="testid">

        <Text>Hello world!</Text>

        <ScrollView data = { this.data } className="scrollContent"></ScrollView>
        <Menu tabs = {[{ icon: '1', text: '1' }, { icon: '1', text: '2' }]}></Menu>

      </View>

    )
  }
}
