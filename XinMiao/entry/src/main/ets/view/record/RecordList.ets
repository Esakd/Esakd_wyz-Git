import router from '@ohos.router'
import { CommonConstants_health } from '../../common/constants/CommonConstants'
import RecordService from '../../service/RecordService'
import GroupInfo from '../../viewmodel/GroupInfo'
import RecordType from '../../viewmodel/RecordType'
import RecordVO from '../../viewmodel/RecordVO'

@Extend(Text) function grayText(){
  .fontSize(14)
  .fontColor($r('app.color.light_gray'))
}

@Component
export default struct RecordList {

  @Consume @Watch('handleRecordsChange') records: RecordVO[]
  @State groups: GroupInfo<RecordType, RecordVO>[] = []

  handleRecordsChange(){
    this.groups = RecordService.calculateGroupInfo(this.records)
  }


  build() {
    List({space: CommonConstants_health.SPACE_10}){
      ForEach(this.groups, (group: GroupInfo<RecordType, RecordVO>) => {
        ListItem(){
          Column({space: CommonConstants_health.SPACE_8}){
            // 1.分组的标题
            Row({space: CommonConstants_health.SPACE_4}){
              Image(group.type.icon).width(24)
              Text(group.type.name).fontSize(18).fontWeight(CommonConstants_health.FONT_WEIGHT_700)
              Text(`建议${group.type.min}~${group.type.max}千卡`).grayText()
              Blank()
              Text(group.calorie.toFixed(0)).fontSize(14).fontColor($r('app.color.primary_color'))
              Text('千卡').grayText()
              Image($r('app.media.ic_public_add_norm_filled'))
                .width(20)
                .fillColor($r('app.color.primary_color'))
            }
            .width('100%')
            .onClick(() => {
              router.pushUrl({
                url: 'pages/ItemIndex',
                params: {type: group.type}
              })
            })
            // 2.组内记录列表
            List(){
              ForEach(group.items, (item: RecordVO) => {
                ListItem(){
                  Row({space: CommonConstants_health.SPACE_6}){
                    Image(item.recordItem.image).width(50)
                    Column({space: CommonConstants_health.SPACE_4}){
                      Text(item.recordItem.name).fontWeight(CommonConstants_health.FONT_WEIGHT_500)
                      Text(`${item.amount}${item.recordItem.unit}`).grayText()
                    }
                    Blank()
                    Text(`${item.calorie.toFixed(0)}千卡`).grayText()
                  }
                  .width('100%')
                  .padding(CommonConstants_health.SPACE_6)
                }.swipeAction({end: this.deleteButton.bind(this)})
              })
            }
            .width('100%')
          }
          .width('100%')
          .backgroundColor(Color.White)
          .borderRadius(CommonConstants_health.DEFAULT_18)
          .padding(CommonConstants_health.SPACE_12)
        }
      })
    }
    .width(CommonConstants_health.THOUSANDTH_940)
    .height('100%')
    .margin({top: 10})
  }

  @Builder deleteButton(){
    Image($r('app.media.ic_public_delete_filled'))
      .width(20)
      .fillColor(Color.Red)
      .margin(5)
  }
}