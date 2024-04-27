import TaskInfo from '../../viewmodel/TaskInfo'
import TaskItem from './TaskItem'
import TaskModel from '../../model/TaskModel'

@Component
export default struct TaskList {
  // 总任务数量
  @Link totalTask: number
  @Link finishTask: number
  // 任务数组
  @State tasks: TaskInfo[] = []

  idx: number = 1
  // 任务信息弹窗
  dialogController: CustomDialogController = new CustomDialogController({
    builder: TaskInfoDialog({onTaskConfirm: this.handleAddTask.bind(this)}),
  })

  aboutToAppear(){
    // 查询
    console.log('testTag', '初始化组件，查询任务列表')
    TaskModel.getTaskList()
      .then(tasks => {
        this.tasks = tasks
        this.handleTaskChange()
      })
  }

  handleTaskChange(){
    this.totalTask = this.tasks.length
    this.finishTask = this.tasks.filter(item => item.finished).length
  }

  handleAddTask(name: string){
    // 新增任务
    TaskModel.addTask(name)
      .then(id => {
        console.log('testTag', '处理新增任务: ', name)
        this.tasks.push(new TaskInfo(id, name))
        // 更新
        this.handleTaskChange()
        this.dialogController.close()
      })
      .catch(error => console.log('testTag', '新增任务失败：', name, JSON.stringify(error)))

  }

  build() {
    Column(){
      Button('新增学习任务')
        .width(200)
        .margin({bottom: 10})
        .onClick(() => {
          this.dialogController.open()
        })

      // 任务列表
      List({space: 10}){
        ForEach(
          this.tasks,
          (item: TaskInfo, index) => {
            ListItem(){
              TaskItem({item: item, onTaskChange: this.handleTaskChange.bind(this)})
            }
            .swipeAction({end: this.DeleteButton(index, item.id)})
          }
        )
      }
      .width('100%')
      .layoutWeight(1)
      .alignListItem(ListItemAlign.Center)
    }
  }

  @Builder DeleteButton(index: number, id: number){
    Button(){
      Image($r('app.media.delete_2'))
        .fillColor(Color.White)
        .width(20)
    }
    .width(40)
    .height(40)
    .type(ButtonType.Circle)
    .backgroundColor(Color.Red)
    .margin(5)
    .onClick(() => {
      // 删除任务
      TaskModel.deleteTaskById(id)
        .then(() => {
          this.tasks.splice(index, 1)
          console.log('testTag', `尝试删除任务，index: ${index}`)
        })
        .catch(error => console.log('testTag', '删除任务失败，id = ', id, JSON.stringify(error)))

    })
  }
}

@CustomDialog
struct TaskInfoDialog{

  name: string = ''
  onTaskConfirm : (name: string) => void
  controller: CustomDialogController

  build(){
    Column({space: 20}){
      TextInput({placeholder: '请确定学习任务'})
        .onChange(val => this.name = val)
      .height(60)
      Row(){
        Button('确定')
          .onClick(() => {
            this.onTaskConfirm(this.name)
          })
          .width(80)
        Button('取消')
          .backgroundColor(Color.Grey)
          .onClick(() => {
            this.controller.close()
          })
          .width(80)
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceEvenly)
    }
    .width('100%')
    .padding(20)
  }
}