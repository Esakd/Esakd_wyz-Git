import router from '@ohos.router'
@Entry
@Component
struct WelcomePage {
  aboutToAppear(){
    this.jumpToIndex()
  }
  jumpToIndex(){
    setTimeout(() => {
      router.replaceUrl({
        url: 'pages/LoginPage'
      })
    }, 3000)
  }
  build() {
    Column() {
      Image($r('app.media.app_icon'))
        .width(300)
        .height(300)
        .margin({top:80,bottom:200})
        .interpolation(ImageInterpolation.High)
        .borderRadius(30)
      Column(){
        Image($r('app.media.xm_logo'))
          .height(80)
          .width(200)
          .interpolation(ImageInterpolation.High)
          .borderRadius(15)
          .margin({top:120,bottom:30})
        Text("HarmonyOS")
          .fontColor(Color.Black)
          .fontSize(15)
          .border({style:BorderStyle.Solid,width:1,color:Color.Black,radius:15})
          .margin({bottom:30})
          .fontWeight(FontWeight.Bold)
        Text("——By GGBond后援队 Esakd")
          .fontColor(Color.Black)
      }
      .height(100)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#FFFFFF')
  }
}