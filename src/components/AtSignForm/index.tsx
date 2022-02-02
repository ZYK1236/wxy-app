import { View } from '@tarojs/components';
import React, { Component } from 'react';
import "./index.less"

interface PropsType {
  [key: string]: string[]
}

const render = (dataSource: string[]) => {
  return dataSource.map(item => <View style={{ borderBottom: "1px solid black" }}>{item}</View>)
}

export default (props: PropsType) => {
  return (
    <View className='sign-form-wrap'>
      <View className='sign-form-wrap-title'>
        活动情况签到表
      </View>
      <View className='sign-form-wrap-content'>
        <View className='sign-form-wrap-content-key'>
          {render(props.keys)}
        </View>
        <View className='sign-form-wrap-content-value'>
          {render(props.values)}
        </View>
      </View>
    </View>
  )
};
