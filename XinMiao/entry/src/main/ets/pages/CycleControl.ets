import MeasureText from '@ohos.measure'
class student{
  logo:string
  name:string
  image:ResourceStr
  age:number
  score:number
  medal:ResourceStr

  constructor(logo:string,name:string, image:ResourceStr, age:number, score:number,medal?:ResourceStr) {
    this.logo = logo
    this.name = name
    this.image = image
    this.age = age
    this.score = score
    this.medal = medal
  }
}
class medal{
  image:ResourceStr

  constructor(image:ResourceStr) {
    this.image = image
  }
}

import {Header} from '../components/CommonComponent'

//全局自定义构建函数
@Builder function StudentCard(student:student){
  Row({space:10}){
    Image(student.image)
      .width(100)
      .interpolation(ImageInterpolation.High)
      .borderRadius(15)
    Column({space:5}) {
      Image(student.medal)
        .width(62)
        .height(80)
    }
    Column({space:4}){
      Text(student.logo +'Top'+ String(this.medalx++))
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
      Text(student.name)
        .nameText()
      Text('积分:' + String(student.age))
        .ageText()
      Text('任务完成度:' + String(student.score))
        .fontSize(18)
        .fontColor('#36D')
        .height(20)
    }
    .height('100%')
    .margin({left:10})
    .alignItems(HorizontalAlign.Start)
    .justifyContent(FlexAlign.Center)
  }
  .width('100%')
  .backgroundColor('#FFF')
  .borderRadius(20)
  .height(120)
  .padding(10)
}

//全局自定义公共样式
@Styles function fillScreen(){
  .width('100%')
  .height('100%')
  .backgroundColor('#EFEFEF')
  .padding(15)
}

//继承模式,只能写在全局
@Extend(Text) function ageText(){
  .fontColor('#36D')
  .fontSize(18)
}

@Extend(Text) function nameText(){
  .fontColor('#36D')
  .fontSize(18)
  .margin(1)
}

@Entry
@Component
struct CycleControl {

  private students:Array<student> = [
    new student('新苗同学','田同学', $r("app.media.stu_1"),72,36,$r('app.media.win1')),
    new student('新苗同学','常同学', $r("app.media.stu_2"),66,33,$r('app.media.win2')),
    new student('新苗同学','李同学', $r("app.media.stu_3"),50,25,$r('app.media.win3')),
    new student('新苗同学','黄同学', $r("app.media.stu_4"),45,21,),
    new student('新苗同学','张同学', $r("app.media.stu_5"),30,15),
    new student('新苗同学','秋同学', $r("app.media.stu_1"),26,13),
    new student('新苗同学','高同学', $r("app.media.stu_2"),24,24),
    new student('新苗同学','杜同学', $r("app.media.stu_3"),12,6),
    new student('新苗同学','秋同学', $r("app.media.stu_4"),10,12),
    new student('新苗同学','黄同学', $r("app.media.stu_5"),4,2),
  ]
  private medal:Array<medal> = [
    new medal($r('app.media.win1')),
    new medal($r('app.media.win2')),
    new medal($r('app.media.win3')),
  ]
  private medalx:number = 1;


  // @State message: string = 'Hello XinMiao' @State状态变量(签到)
  build() {
      Column({space:8}) {

        Header({title:'新苗同学Top10'}) //自定义组件
          .width('100%')
          .margin({bottom:20,top:50})
          .height(30)

        List({space:8}){
          ForEach(
            this.students,
            (student:student) =>{
              ListItem(){ //list里面需要跟listitem再去套容器
                StudentCard(student)
              }
            }
          )
        }
        .width('100%')
        .layoutWeight(1) //高度按权重进行分配

      }
    .fillScreen()
  }
}