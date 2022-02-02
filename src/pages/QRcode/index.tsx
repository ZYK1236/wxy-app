import { View, Image, Text } from '@tarojs/components';
import React from 'react';
import { AtDivider, AtAvatar } from "taro-ui"
import "./index.less"

export default () => {
  return (
    <View>
      <View style={{ width: 200, margin: "20px auto" }}>
        <Image src='https://s4.ax1x.com/2022/02/02/HAX73F.png' style={{ width: "200px", height: "200px" }}></Image>
      </View>
      <AtDivider></AtDivider>
      <View className='QRcode-desc'>
        <Text>应签到：50人</Text>
        <Text>实签到：38人</Text>
      </View>
      <AtDivider></AtDivider>
      <View className='QRcode-sign-person'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(_ => (
          <View style={{ padding: "0 10px" }}>
            <AtAvatar image='https://jdc.jd.com/img/200' circle></AtAvatar>
            <View style={{ fontSize: 10, color: "#666666", textAlign: "center" }}>张宇恺</View>
          </View>
        ))}
      </View>
    </View>
  )
}