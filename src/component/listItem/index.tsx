import React, { Component } from 'react'
import { View } from '@tarojs/components'
import {viewData} from '../infiniteScroll/index'


export default class Index extends Component {
  props: {viewData:viewData};
  constructor(props:viewData) {
    super(props)
  }
  render() {
    return (
      <View>
        {this.props.viewData.title}
      </View>
    )
  }
}