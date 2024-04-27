import router from '@ohos.router'
import curves from '@ohos.curves'

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
    if(!point.appearance) {
      Image($r('app.media.point'))
        .position({ x: point.pointX, y: point.pointY })
        .width(28.8)
        .height(20)
        .onAreaChange(()=>{
          point.appearance = true;
        })
    }
  }
}

@Entry
@Component
struct AnimationPage {

  @State ballX: number = 200
  @State ballY: number = 400

  @State angle: number = 0
  @State src: Resource = $r('app.media.ball')

  @State isBegin: boolean = false

  @State points:point[] = [{pointX:200,pointY:180,appearance:false},
  {pointX:60,pointY:330,appearance:false},
  {pointX:300,pointY:400,appearance:false}]

  @State isEntry:boolean = true

  private centerX: number = 120
  private centerY: number = 500

  private maxRadius: number = 100
  private radius: number = 20

  private netX: number = 100
  private netY: number = 20

  // 摇杆小圆球初始位置
  @State positionX: number = 120;
  @State positionY: number = 500;

  // 角度正弦和余弦
  sin: number = 0
  cos: number = 0

  // 小球移动速度
  speed: number = 0
  // 任务id
  taskId: number = -1


  build() {
    Row() {
      Stack(){
        Button('返回')
          .position({x:0, y: 0})
          .backgroundColor('#20101010')
          .onClick(() => {
            // 返回上一页
            router.back()
          })
        if(!this.isEntry){
          Text('恭喜你, 球进了！')
            .fontColor('#00FF80 ')
            .fontSize(40)
            .position({x:82,y:200})
        }
        if(!this.isBegin){
          // 开始按钮
          Button('开始游戏')
            .onClick(() => {
              animateTo(
                {duration: 1000},
                () => {
                  this.isBegin = true
                }
              )
            })
        }else{
          Image(this.src)
            .position({x: this.ballX - 20, y: this.ballY - 20})
            .rotate({angle:this.angle, centerX: '50%', centerY: '50%'})
            .width(40)
            .height(40)
            .transition({
              type: TransitionType.Insert,
              opacity: 0,
              translate: {x: -250}
            })
          Image($r('app.media.ballnet'))
            .position({x: this.netX,y:this.netY})
            .width(200)
            .height(150)
        }

        // 摇杆
        Row(){
          Circle({width: this.maxRadius * 2, height: this.maxRadius * 2})
            .fill('#20101010')
            .position({ x: this.centerX-this.maxRadius, y: this.centerY-this.maxRadius })
          Circle({ width: this.radius * 2, height: this.radius * 2 })
            .fill('#403A3A3A')
            .position({ x: this.positionX - this.radius, y: this.positionY - this.radius})
        }
        .height(600)
        .width(150)
        .justifyContent(FlexAlign.End)
        .position({x:0,y:120})
        .onTouch(this.handleTouchEvent.bind(this))
        Row(){
          ForEach(
            this.points,(point:point,index:number) => {
            PointAppearance(point)
          }
          )
        }
      }
      .height('100%').width('100%')
    }
    .height('100%')
    .width('100%')
    .backgroundImage($r('app.media.grass'))
    .backgroundImageSize({height: '105%', width: '100%'})
  }

  // 手指移动事件
  handleTouchEvent(event: TouchEvent){
    switch (event.type){
      case TouchType.Up:
      // 还原速度
        this.speed = 0
      // 取消定时任务
        clearInterval(this.taskId)
      // 还原摇杆小球的坐标
        animateTo(
          {curve: curves.springMotion()},
          () => {
            this.positionX = this.centerX
            this.positionY = this.centerY
            this.angle = 0
            if(this.ballY<=100){
              this.isEntry = false
            }
          }
        )
        break
      case TouchType.Down:
      // 开始定时任务
        this.taskId = setInterval(() => {
          this.ballX += this.speed * this.cos
          this.ballY += this.speed * this.sin
          if(this.ballY<=100){
            this.isEntry = false
          }
        }, 40)
        break

      case TouchType.Move:
      // 1.获取手指位置坐标
        let x = event.touches[0].x
        let y = event.touches[0].y
      // 2.计算手指与中心点的坐标差值
        let vx = x - this.centerX
        let vy = y - this.centerY
      // 3.计算手指与中心点连线和x轴正半轴的夹角，单位是弧度
        let angle = Math.atan2(vy, vx)
      // 4.计算手指与中心点的距离
        let distance = this.getDistance(vx, vy)

        this.sin = Math.sin(angle)
        this.cos = Math.cos(angle)
        animateTo(
          {curve: curves.responsiveSpringMotion()},
          () => {
            // 5.计算摇杆小球的坐标
            this.positionX = this.centerX + distance * this.cos
            this.positionY = this.centerY + distance * this.sin
            // 6.修改小球的角度
            if(Math.abs(angle * 2) < Math.PI){
              this.src = $r('app.media.ball')
            }else{
              this.src = $r('app.media.ball')
              angle = angle < 0 ? angle + Math.PI : angle - Math.PI
            }
            this.angle = angle * 180 / Math.PI

            this.speed = 5
          }
        )
        break
    }
  }

  getDistance(x: number, y: number){
    let d = Math.sqrt(x * x + y * y)
    return Math.min(d, this.maxRadius)
  }
}
