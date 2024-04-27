import PreferencesUtil from '../common/utils/PreferencesUtil'
import { Header } from '../components/CommonComponent'
class Task{
  static id:number = 1 //static为类内部共享的变量
  name:string = '任务' + String(Task.id++) + ':'
  plan:string
  finished:boolean = false
}

@Styles function missonCard() {
  .width('95%')
  .padding(20)
  .backgroundColor(Color.White)
  .borderRadius(15)
  .shadow({radius:6,color:'#1F000000',offsetX:2,offsetY:4})
}

@Extend(Text) function finishedTask(){
  .decoration({type:TextDecorationType.LineThrough})
  .fontColor('#B1B2B1')
}

//任务统计信息
class StatInfo{
  totalTask:number = 0
  finishTask:number = 0
}


@Entry
@Component
struct PropPage{

  @State stat:StatInfo = new StatInfo() //@provide @co nsume

  build(){
    Column({space:10}){
      Header({title:'新苗大行动'})
        .width('90%')
        .margin({bottom:5,top:70})
        .height(30)
      TaskST({finishTask:this.stat.finishTask,totalTask:this.stat.totalTask}) // 学习任务进度组件
      //link能引用对象，prop不行
      TaskList({stat:$stat}) //任务列表$表引用

    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F2F3')
  }
}


@Component
struct TaskST{

  //prop单向同步 link双向同步
  @Prop finishTask:number
  @Prop totalTask:number
  build(){
    Row() {  // 学习任务进度组件
      Text('任务列表')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Stack() {
        Progress({ // 进度条
          value: this.finishTask,
          total: this.totalTask,
          type: ProgressType.Ring
        })
          .width(80)
        Row() {
          Text(this.finishTask.toString())
            .fontSize(24)
            .fontColor('#36D')
          Text(' / ' + this.totalTask.toString())
            .fontSize(24)
        }
      }
    }
    .missonCard()
    .margin({top:20,bottom:10})
    .justifyContent(FlexAlign.SpaceEvenly)
  }
}


@Component
struct TaskList{

  @Link stat:StatInfo
  @State tasks:Task[] = []

  handleTaskChange(){
    // 更新任务总数量
    this.stat.totalTask = this.tasks.length
    // 更新已完成任务数量
    this.stat.finishTask = this.tasks.filter(mission => mission.finished).length
  }

  build() {
    Column() {
      Button('新增学习任务')
        .width(200)
        .margin({bottom:15})
        .onClick(() => {
          this.tasks.push(new Task())
          this.handleTaskChange()
        })
      List({ space: 10 }) {
        ForEach(
          this.tasks,
          (mission: Task, index) => {
            ListItem() {
              Row() {
                Text(mission.name)
                  .fontSize(18)
                TextInput({
                  placeholder: $r('app.string.mission_label') //text:
                })
                  .type(InputType.Normal)
                  .onChange(value => {
                    mission.plan = value
                  })
                  .width(200)
                Checkbox()
                  .select(mission.finished)
                  .onChange(val => {
                    // 更新当前任务的状态
                    mission.finished = val
                    // 更新已完成任务数量
                    this.handleTaskChange()
                  })
              }
              .missonCard()
              .justifyContent(FlexAlign.SpaceBetween)
            }
            .swipeAction({ end: this.DeleteButton(index) })
          }
        )
      }
      .layoutWeight(1)
      .width('100%')
      .alignListItem(ListItemAlign.Center)
    }
  }
  @Builder DeleteButton(index:number){
    Button(){
      Image($r('app.media.delete_2'))
        .fillColor(Color.White)
        .width(20)
    }
    .width(40)
    .height(40)
    .type(ButtonType.Circle)
    .backgroundColor(Color.Red)
    .margin(7)
    .onClick(()=>{
      this.tasks.splice(index,1)
      this.handleTaskChange()
    })
  }
}