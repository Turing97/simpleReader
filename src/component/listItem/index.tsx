import React, { Component } from 'react'
import { View } from '@tarojs/components'
import {viewData} from '../infiniteScroll/index'
import './index.less'


export default class Index extends Component {
  props: {viewData:viewData};
  constructor(props:viewData) {
    super(props)
  }
  render() {
    return (
      <View className='content'>
        <img
        className="icon"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="图标" />
        {this.props.viewData.title}
      </View>
    )
  }
}