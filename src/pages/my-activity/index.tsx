import { useState, useEffect } from 'react';
import { View, Text } from "@tarojs/components"
import { AtTabs, AtTabsPane, AtCard, AtButton } from 'taro-ui'
import './index.less'
import Taro from "@tarojs/taro"

export default () => {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '我创建的活动' }, { title: '我参与的活动' }]

  const handleClick = (value) => {
    setCurrent(value)
  }

  const jumpTo = (path: string) => {
    Taro.navigateTo({
      url: `/pages/${path}/index`
    })
  }

  // 渲染逻辑一样，后端数据不同罢了
  const renderContent = () => {
    return (
      <View className='my-activity-content'>
        {[1, 2, 3, 4, 5].map(i => <AtCard
          className='at-card'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          <View className='my-activity-desc'>
            <Text className='my-activity-desc-title'>第一次党会001（已结束）</Text>
            <Text>党日活动：2021-1-1 18:00 签到率：100%</Text>
          </View>
          <View className='my-activity-btn-wrap'>
            <AtButton type='primary' className='my-activity-btn' size='small' onClick={() => jumpTo("activity-detail")}>活动详情</AtButton>
            {current === 0 ? <AtButton type='secondary' className='my-activity-btn' size='small' onClick={() => jumpTo("QRcode")}>签到二维码</AtButton> : null}
          </View>
        </AtCard>)}
      </View>
    )
  }

  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0} >
          {renderContent()}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          {renderContent()}
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}