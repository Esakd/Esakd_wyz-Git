import { Header } from '../components/CommonComponent'
import TaskStatistics from '../viewmodel/task/TaskStatistics'
import TaskList from '../viewmodel/task/TaskList'

@Entry
@Component
struct TaskManagePage {
  @State totalTask: number = 0
  @State finishTask: number = 0

  build() {
    Column({space: 10}){

      Header({title:"新苗大行动"})
        .width('90%')
        .margin({bottom:5,top:70})
        .height(30)

      // 任务进度卡片
      TaskStatistics({totalTask: this.totalTask, finishTask: this.finishTask})
      // 任务列表
      TaskList({totalTask: $totalTask, finishTask: $finishTask})
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F2F3')
  }
}
