import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView, { viewData } from '../../component/infiniteScroll/index'
import Menu from '../../component/menu/index'


export default class Index extends Component {
  state:{
    data: Array<viewData>
  }
  constructor(props:any) {
    super(props);
    this.state={
      data :[
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
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        }, {
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        },{
          icon:'1',
          title:'4'
        }
      ]
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index' id="testid">
        <ScrollView data = { this.state.data } touchBottom = { this.getData.bind(this)} className="scrollContent"></ScrollView>
      </View>

    )
  }
  getData() {
    let tempState:viewData[] = []
    for(let i = 0; i< Array(10).length; i++){
      tempState.push(
        {
          title: i.toString(),
          icon: i.toString()
        }
      )
    }
    this.setState({
      data:this.state.data.concat(tempState)
    })
  }
}
