import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Item from '../listItem/index'

export enum addOrder{
  order, // 顺序添加
  inversion // 倒序添加
}
type propType= {
  data:Array<viewData>,
  className: string,
  touchBottom: Function
}
export type viewData = {
  created: string,
  description: string,
  link: string,
  pubDate: string,
  title:string,
  url:string
}
export default class Index extends Component {
  props:propType
  // state:propType
  state:any
  constructor(props:propType) {
    super(props);
    this.state = {
      data:[]
    }
  }
  // 获取到页面的滚动距离
  getScrollTop():number {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }
  getScrollBottom():number {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop < 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }
  getScrollHeight(): number {
    var scrollHeight:number = 0, bSH = 0, dSH = 0;
    if (document.body) {
      bSH = document.body.scrollHeight;
    }
    if (document.documentElement) {
      dSH = document.documentElement.scrollHeight;
    }
    scrollHeight = (bSH - dSH > 0) ? bSH : dSH;
    return scrollHeight;
  }
  getWindowHeight():number {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }
  bindScroll() {
    if (this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight()) {
      this.props.touchBottom(addOrder.order);

    } else if (this.getScrollTop() <= 10){
      if(this.getScrollTop() == 0) {
        if (document.body) {
          document.body.scrollTop = 5;
        }
        if (document.documentElement) {
          document.documentElement.scrollTop = 5;
        }
      }
      this.props.touchBottom(addOrder.inversion);
      

    }

  };

  componentDidMount () {
    window.addEventListener('scroll', ()=>{
      this.bindScroll()
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', ()=>{
      this.bindScroll()
    });
  }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    let viewData: Array<viewData> = this.props.data
    if (viewData) {
      return (
        <View >
          {viewData.map((data) => {
            return(
              <Item viewData = { data } key= {data.created}></Item>
            )
          })}
        </View>
      )
    } else {
      return null
    }
    
  }
}