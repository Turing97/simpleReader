import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView, { addOrder, viewData } from '../../component/infiniteScroll/index'
import Menu , { tab }from '../../component/menu/index'


export default class Index extends Component {
  state:{
    data: Array<viewData>
    // menu: Array<tab>
  }
  constructor(props:any) {
    super(props);
    this.state={
      data :[
        {
          icon: '1',
          title: '2',
          key:'111112'
        },
        {
          icon: '1',
          title: '2',
          key:'111111'
        },
        {
          icon: '1',
          title: '2',
          key:'1111331'
        },
        {
          icon: '1',
          title: '2',
          key:'1111132'
        },
        {
          icon: '1',
          title: '2',
          key:'1113211'
        },
        {
          icon: '1',
          title: '2',
          key:'11221'
        },
        {
          icon: '1',
          title: '2',
          key:'1223'
        },
        {
          icon: '1',
          title: '2',
          key:'111231211'
        },
        {
          icon: '1',
          title: '2',
          key:'11551'
        },
        {
          icon: '1',
          title: '2',
          key:'111323211'
        },
        {
          icon: '1',
          title: '2',
          key:'111325451'
        },
        {
          icon: '1',
          title: '2',
          key:'11132132'
        },
        {
          icon: '1',
          title: '2',
          key:'1211'
        },
        {
          icon: '1',
          title: '2',
          key:'1325451'
        },
        {
          icon: '1',
          title: '2',
          key:'1132'
        },
        {
          icon: '1',
          title: '2',
          key:'111321'
        },
        {
          icon: '1',
          title: '2',
          key:'123311'
        },
        {
          icon: '1',
          title: '2',
          key:'1325411151'
        },
        {
          icon: '1',
          title: '2',
          key:'213'
        },
        {
          icon: '1',
          title: '2',
          key:'1134322333'
        },
        {
          icon: '1',
          title: '2',
          key:'1132343f33'
        },
        {
          icon: '1',
          title: '2',
          key:'113sd2333'
        },
        {
          icon: '1',
          title: '2',
          key:'113dsa2333'
        },
        {
          icon: '1',
          title: '2',
          key:'113fds2333'
        },
        {
          icon: '1',
          title: '2',
          key:'113233dsafdsa3'
        },
      ],

    }
    
  }
  
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    var menu= [{icon:'list',text:'列表'}, {icon:'person',text:'个人'}]

    return (
      <View className='index'>
        <View className="scrollContent">
          <ScrollView data = { this.state.data } touchBottom = { this.getData.bind(this)} className="scrollContent"></ScrollView>
        </View>
        <View className="menu">
          <Menu tabs= {menu}></Menu>
        </View>
      </View>

    )
  }
  getData(order: addOrder) {
    console.log(order)
    let tempState:viewData[] = []
    for(let i = 0; i< Array(10).length; i++){
      tempState.push(
        {
          title: i.toString(),
          icon: i.toString(),
          key:`123${Math.random()}`
        }
      )
    }
    if(order == addOrder.order){
      this.setState({
        data:this.state.data.concat(tempState).splice(tempState.length,this.state.data.length + tempState.length)
      })
      // this.setState({
      //   data:this.state.data.splice(0,tempState.length)
      // })
    } else if (order == addOrder.inversion) {
      this.setState({
        data: tempState.reverse().concat(this.state.data).splice(0, this.state.data.length)
      })
    }
  }
}
