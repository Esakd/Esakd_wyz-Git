import router from '@ohos.router'
@Component
export struct Header{
  private title:ResourceStr
  build(){
    Row(){
      Image($r('app.media.public_back'))
        .width(30)
        .onClick(()=>{
          router.back();
          router.RouterMode.Single
        })
      Blank()
      Text(this.title)
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Blank()
      Image($r('app.media.refresh'))
        .width(30)
    }
    .width('100%')
    .height(30)
  }
}