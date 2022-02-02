import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import { AtTabBar } from 'taro-ui'
import MyActivity from '../my-activity'
import CreateActivity from '../create-activity'
import User from '../user'

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  renderContent() {
    return this.state.current === 0 ?
      <MyActivity></MyActivity> : this.state.current === 1 ?
        <CreateActivity></CreateActivity> : <User></User>
  }

  render() {
    return (
      <View className='index'>
        {this.renderContent()}
        <AtTabBar
          className='index-at-bar'
          tabList={[
            { title: '我的活动', iconType: 'bullet-list' },
            { title: '创建活动', iconType: 'add' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
