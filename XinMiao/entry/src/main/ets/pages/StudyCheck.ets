import router from '@ohos.router'
import { Header } from '../components/CommonComponent'
import common from '@ohos.app.ability.common'
import Request_Permission_From_Users from 'ets/Service/Applicant'
import { Get_Geo_Data } from 'ets/Service/Geo'
import { MediaBean } from '../common/bean/MediaBean';
import { MediaHelper } from '../helper/MediaHelper';


@Entry
@Component
struct StudyCheck {
  /*
   *调用图片、相机
   */
  @State mediaBean: MediaBean = new MediaBean();
  private mediaHelper: MediaHelper = new MediaHelper(getContext());
  /**
   * 位置获取相关方法
   */
  //获取上下文对象, 储存在成员变量context中
  private context = getContext(this) as common.UIAbilityContext
  //编写异步方法,调用之前已写好的模块文件Applicant
  async apply(){
    let res = await Request_Permission_From_Users(this.context)
    this.ifAccessible = res
  }

  //编写异步方法，调用之前已写好的模块文件Geo
  async update_geo_data(){

    //判断是否获取所需权限
    if(!this.ifAccessible){
      return
    }

    let info = await Get_Geo_Data()

    this.Geo_Info = '\n图片信息已上传\n\n---地理信息---\n' + '\n当前所在城市:' + info.cityName + '\n纬度: ' + info.position_x + '\n经度: ' + info.position_y + '\n海拔: ' + info.position_z + '\n速度: ' + info.speed + ' m/s\n'
    if(!info.isFinished) this.Geo_Info += '\n错误信息: ' + info.error

  }

  aboutToAppear(){
    this.apply();
    this.update_geo_data()
  }
  title:string = '地理信息面板'

  @State Geo_Info:string = ''

  //用于存储用户是否授权的状态信息
  @State ifAccessible:boolean = false


  /**
   * 签到
   */

  @State message: string = '欢迎, 新苗同学'
  @State checkMsg: string = '点击签到'
  @State isGame:boolean = false

  build() {
    Column() {
      Header({title:'学习签到'})
        .width('90%')
        .margin({top:60,bottom:50})
      Text(this.message)
        .height(100)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
      Text('快来进行今天的打卡吧!')
        .fontSize(30)  
        .fontWeight(FontWeight.Bold)
      Image($r('app.media.grid_8'))
        .height(200)
        .width(350)
        .margin({top:30,bottom:30})
        .borderRadius(10)
        .interpolation(ImageInterpolation.High)
      Blank(50)
      Button(this.checkMsg)
        .type(ButtonType.Capsule)
        .height(60)
        .width(150)
        .onClick(()=>{
          this.update_geo_data()
          this.checkMsg = '打卡成功!'
          if(!this.isGame){
            this.handleClick(MediaOption.Picture)
            AlertDialog.show({
              title:'学习签到打卡',
              message:'签到成功!   学习积分 + 1'+this.Geo_Info,
              autoCancel:true,
              alignment:DialogAlignment.Center,
              primaryButton:{
                value:'确定',
                action:()=>{}}
            })
          }
          else {
            this.update_geo_data()
            AlertDialog.show({
              title:'学习签到打卡',
              message:'今日已签到打卡,请明天再来吧!'+this.Geo_Info,
              autoCancel:true,
              alignment:DialogAlignment.Center,
              primaryButton:{
                value:'确定',
                action:()=>{}}
            })
          }
          this.isGame = true;
        })
      Button('开始小游戏')
        .type(ButtonType.Capsule)
        .height(60)
        .width(150)
        .onClick(()=>{
          if(this.isGame){
            router.pushUrl(
              {
                url:'pages/GamePage'
              },
              router.RouterMode.Single,
              Error =>{
                if(Error){
                  console.log('路由失败,errCode:'+Error.code+' errMsg:'+Error.message);
                }
              }
            )
          }
          else{
            AlertDialog.show({
              title:'开始小游戏',
              message:'请先完成学习签到打卡任务',
              autoCancel:true,
              alignment:DialogAlignment.Center,
              primaryButton:{
                value:'确定',
                action:()=>{}
              }
            })
          }
        })
        .margin({top:50})
    }
    .width('100%')
    .justifyContent(FlexAlign.SpaceBetween)
  }
  async handleClick(option: MediaOption) {
    let mediaBean: MediaBean;
    switch (option) {
      case MediaOption.Picture:
        mediaBean = await this.mediaHelper.selectPicture();
        break;
      case MediaOption.File:
        mediaBean = await this.mediaHelper.selectFile();
        break;
      case MediaOption.TakePhoto:
        mediaBean = await this.mediaHelper.takePhoto(getContext() as common.UIAbilityContext);
        break;
      default:
        break;
    }

    if (mediaBean) {

      this.mediaBean = mediaBean;

    }

  }
}

enum MediaOption {
  Picture = 0,
  File = 1,
  TakePhoto = 2
}

@CustomDialog
struct dialog{

  controller:CustomDialogController

  @State message:string = ''

  build(){
    Column() {
      Text(this.message)
        .fontSize(20)
        .height(40)
        .fontColor(Color.White)
    }
    .width('100%')
    .backgroundColor(Color.Gray)
  }

}