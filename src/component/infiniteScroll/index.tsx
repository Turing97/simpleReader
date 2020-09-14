import React, { Component } from 'react'
import { Icon, ScrollView, View, Text } from '@tarojs/components'
import Item from '../listItem/index'


type propType= {
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
    // this.state = {
    //   data:this.props.data
    // }
  }
  componentWillMount () { }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    let viewData: Array<viewData> = this.props.data
    return (
      
      <View>
        {viewData.map((viewData1) => {
          return(
            <Item viewData = { viewData1 }></Item>
          )
        })}
      </View>
    )
  }
}