class point{
  pointX:number
  pointY:number
  appearance:boolean

  constructor(pointX:number,pointY:number,appearance:boolean) {
    this.pointX = pointX;
    this.pointY = pointY;
    this.appearance = appearance;
  }
}

@Builder function PointAppearance(point:point){
  Row(){
    Image($r('app.media.point'))
      .position({x:point.pointX , y:point.pointY})
      .width(28.8)
      .height(20)
  }
}


@Entry
@Component
struct Index {
  @State message: string = 'Hello World'
  @State points:point[] = [{pointX:50,pointY:90,appearance:false},
    {pointX:30,pointY:70,appearance:false},
    {pointX:52,pointY:53,appearance:false}]

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        ForEach(
          this.points,(point:point) => {
          PointAppearance(point)
        }
        )
      }
      .width('100%')
    }
    .height('100%')
  }
}