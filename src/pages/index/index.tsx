import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import Menu from '../../component/menu/index'



export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    return (
      <View className='index' id="testid">
        <Text>Hello world!</Text>
        <Menu tabs = { [{icon:'1',text:'1'}, {icon:'1',text:'2'}] }></Menu>

      </View>
      
    )
  }
}
