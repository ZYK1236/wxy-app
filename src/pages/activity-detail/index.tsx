import { View } from '@tarojs/components';
import React from 'react';
import { AtDivider } from 'taro-ui'
import AtTable from "../../components/AtTable"
import AtSignForm from '../../components/AtSignForm';
import "./index.less"

const demoKeys = ["1", "2", "3"]
const demoValues = ["a", "b", "c"]

//需要传进来的数据示例
const exampledataSource = [
  {
    username: '1',
    count: '张宇恺',
    gb: '党员',
    dbd: '已签到'
  },
  {
    username: '1',
    count: '张宇恺',
    gb: '党员',
    dbd: '已签到'
  },
  {
    username: '1',
    count: '张宇恺',
    gb: '党员',
    dbd: '已签到'
  },
  {
    username: '1',
    count: '张宇恺',
    gb: '党员',
    dbd: '已签到'
  }
]
//需要传进来的表头数据示例
const examplecolumns = [
  {
    title: '序号',
    dataIndex: 'username',
    width: '20%',
  },
  {
    title: '姓名',
    dataIndex: 'count',
    width: '20%',
  },
  {
    title: '政治面貌',
    dataIndex: 'gb',
    width: '40%',
  },
  {
    title: '签到状态',
    dataIndex: 'dbd',
    width: '20%',
  },
]
export default () => {
  return (
    <View>
      <View className='detail-title'>第一次党会</View>
      <AtDivider></AtDivider>
      <View className='detail-sign-form'>
        <AtSignForm keys={demoKeys} values={demoValues}></AtSignForm>
      </View>
      <AtDivider></AtDivider>
      <View className='detail-sign-situation'>
        <AtTable columns={examplecolumns} dataSource={exampledataSource}></AtTable>
      </View>
    </View>
  )
}