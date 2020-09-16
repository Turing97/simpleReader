import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Item from '../listItem/index'


type propType= {
  data:Array<viewData>,
  className: string,
  touchBottom: Function
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
    console.log(this.getScrollTop())
    if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
      this.props.touchBottom();
    }
  };
  componentWillMount () { }

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
    return (
      <View id="ScrollView">
        {viewData.map((viewData1) => {
          return(
            <Item viewData = { viewData1 }></Item>
          )
        })}
      </View>
    )
  }
}