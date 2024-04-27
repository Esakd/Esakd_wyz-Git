import { CommonConstants_health } from '../../common/constants/CommonConstants'
@Component
export default struct CalorieStats {
  @Prop intake: number
  @Prop expend: number
  recommend: number = CommonConstants_health.RECOMMEND_CALORIE

  remainCalorie(){
    return this.recommend - this.intake + this.expend
  }

  build() {
    Row({space: CommonConstants_health.SPACE_6}){
      // 1.饮食摄入
      this.StatsBuilder({label: '饮食摄入', value: this.intake})
      // 2.还可以吃
      Stack(){
        // 2.1.进度条
        Progress({
          value: this.intake,
          total: this.recommend,
          type: ProgressType.Ring
        })
          .width(120)
          .style({strokeWidth: CommonConstants_health.DEFAULT_10})
          .color($r('app.color.primary_color'))
        // 2.2.统计数据
        this.StatsBuilder({label: '还可以吃', value: this.remainCalorie(),tips: `推荐${this.recommend}`})
      }
      // 3.运动消耗
      this.StatsBuilder({label: '运动消耗', value: this.expend})
    }
    .width('100%')
    .justifyContent(FlexAlign.SpaceEvenly)
    .padding({top: 30, bottom: 35})
  }

  @Builder StatsBuilder($$:{label: string, value: number, tips?: string}){
    Column({space: CommonConstants_health.SPACE_6}){
      Text('还需运动')
        .fontColor($r('app.color.gray'))
        .fontWeight(CommonConstants_health.FONT_WEIGHT_600)
      Text('5000'+' 步')
        .fontSize(20)
        .fontWeight(CommonConstants_health.FONT_WEIGHT_700)
      if($$.tips){
        Text('推荐5000 步')
          .fontSize(12)
          .fontColor($r('app.color.light_gray'))
      }
    }
  }
}