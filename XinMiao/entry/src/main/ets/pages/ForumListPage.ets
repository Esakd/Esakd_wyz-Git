import common from '@ohos.app.ability.common'
import Want from '@ohos.app.ability.Want'
import { Header } from '../components/CommonComponent'
@Entry
@Component
struct DocumentListPage {
  private index: number = 1
  @State docs: number[] = []

  private context = getContext(this) as common.UIAbilityContext

  build() {
    Row() {
      Column({space: 10}) {
        Header({title:'学习论坛'})
          .width('100%')
          .margin({bottom:20,top:50})
          .height(30)
        Divider()
        Button('新建讨论')
          .onClick(() => {
            // 添加论坛页面
            this.docs.push(this.index)

            // 跳转到论坛编辑的 UIAbility
            // 跳转的目的地want
            let want: Want = {
              deviceId: '',
              bundleName: 'com.example.XinMiao',
              moduleName: 'entry',
              abilityName: 'ForumAbility',
              parameters: {
                instanceKey: 'idx_' + this.index++
              }
            }
            // 跳转
            this.context.startAbility(want)
          })
          .height(50)
          .fontSize(20)
        ForEach(this.docs, id => {
          Row({space:10}){
            Image($r('app.media.ic_files_doc'))
              .width(80)
            Text(`学习交流第${id}篇`)
              .fontSize(25)
              .onClick(() => {
                // 跳转到论坛编辑的 UIAbility

                // 跳转的目的地want
                let want: Want = {
                  deviceId: '',
                  bundleName: 'com.example.XinMiao',
                  moduleName: 'entry',
                  abilityName: 'ForumAbility',
                  parameters: {
                    instanceKey: 'idx_' + id
                  }
                }
                // 跳转
                this.context.startAbility(want)
              })
          }
          .width('100%')
        })
      }
      .width('100%')
      .height('100%')
      .padding(20)
    }
  }
}
