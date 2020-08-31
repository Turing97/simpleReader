import React, { Component } from 'react'
import { ScrollView, View } from '@tarojs/components'
import Item from '../listItem/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return (
      <View>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
        <Item>11</Item>
        <Item>12</Item>
        <Item>13</Item>
        <Item>14</Item>
        <Item>15</Item>
      </View>
    )
  }
}