import * as React from 'react';
import { View } from "@tarojs/components"
import { AtButton } from 'taro-ui'
import "./index.less"

export default () => {
  return (
    <View className='create-activity-wrap'>
      <View className='create-activity-desc'>选择活动类型</View>
      <AtButton type="primary" className='create-activity-btn'>党日活动</AtButton>
      <AtButton type="primary" className='create-activity-btn'>党课</AtButton>
      <AtButton type="primary" className='create-activity-btn'>党员接收与转正</AtButton>
      <AtButton type="primary" className='create-activity-btn'>组织生活会</AtButton>
    </View>
  )
}