
import ForumInfo from './ForumInfo'

@Component
export default struct ForumItem {
  forum : ForumInfo

  build(){
    Column({space: 5}){
      Row(){
        Text(this.forum.name)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
          .ellipsisTextOverFlow()
      }
      .width('100%')

      Row(){
        Text(this.forum.address)
          .fontColor('#a3a3a3')
          .ellipsisTextOverFlow()
      }.width('100%')

      Row({space: 5}){
        Rating({rating: this.forum.score/10 , indicator: true}).stars(5).stepSize(0.1)
        Text(`${this.forum.score / 10}`).fontColor('#ffb04d')
        Text(`${this.forum.comments}条`).fontColor('#222')
        Blank()
      }.width('100%')

      List({space: 10}){
        ForEach(this.forum.images, (image) => {
          ListItem(){
            Column(){
              Image(image)
                .width(150).aspectRatio(1.1).borderRadius(5)
            }
          }
        })
      }
      .listDirection(Axis.Horizontal)
      .width('100%')
    }
    .width('100%')
    .height(240)
    .padding(12)
    .backgroundColor(Color.White)
    .borderRadius(15)
    .shadow({radius: 6, color: '#1F000000', offsetX: 2, offsetY: 4})
  }
}

// 文本超出时的统一样式处理
@Extend(Text)
function ellipsisTextOverFlow(line: number = 1){
  .textOverflow({overflow: TextOverflow.Ellipsis})
  .maxLines(line)
}
