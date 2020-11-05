import { Component } from 'react'
import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import ScrollView, { addOrder, viewData } from '../../component/infiniteScroll/index'
import Menu , { tab }from '../../component/menu/index'
import { getRss, getRssTitle, parseData } from './getRss'


export default class Index extends Component {
  state:{
    data: Array<viewData>
    // menu: Array<tab>
  }
  constructor(props:any) {
    super(props);
    this.state={
      data :[{
        created: "",
        description: "",
        link: "",
        pubDate: "",
        title:"",
        url:""
      }],

    }
  }
  componentWillMount() { }

  componentDidMount() {
    parseData().then(res => {
      console.log(res)
      this.setState({
        data:res.items
      })
    })
    getRssTitle(['https://sspai.com/feed','https://sspai.com/feed']).then(res => {
       let titles= res
      console.log(titles)

    })
    // getRss('https://sspai.com/feed',res =>{
    //   this.setState( {
    //     data: res.items
    //   })
    // })
    // this.setState( {
    //   data: parseData().items
    // })
    // console.log(this.state.data)
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() {}
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
    // for(let i = 0; i< Array(10).length; i++){
    //   tempState.push(
    //     {
    //       title: i.toString(),
    //       icon: i.toString(),
    //       key:`123${Math.random()}`
    //     }
    //   )
    // }
    // if(order == addOrder.order){
    //   this.setState({
    //     data:this.state.data.concat(tempState).splice(tempState.length,this.state.data.length + tempState.length)
    //   })
    //   // this.setState({
    //   //   data:this.state.data.splice(0,tempState.length)
    //   // })
    // } else if (order == addOrder.inversion) {
    //   this.setState({
    //     data: tempState.reverse().concat(this.state.data).splice(0, this.state.data.length)
    //   })
    // }
  }
}
