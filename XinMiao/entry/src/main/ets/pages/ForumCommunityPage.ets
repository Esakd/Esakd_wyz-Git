import ForumItem from '../viewmodel/ForumItem'
import ForumInfo from '../viewmodel/ForumInfo'
import { Header } from '../components/CommonComponent'
import ForumModel from '../model/ForumModel'

@Entry
@Component
struct ForumPage {
  @State fourms: ForumInfo[] = []
  isLoading: boolean = false
  isMore: boolean = true

  aboutToAppear() {
    // 加载商品数据
    this.loadForumInfo()
  }

  build() {
    Column({ space: 10 }) {
      Header({title:'新苗日常'})
        .width('90%')
        .margin({bottom:5,top:60})
      List({ space: 10 }) {
        ForEach(this.fourms, forum => {
          ListItem() {
            ForumItem({forum:forum })
          }
        })
      }
      .width('100%')
      .layoutWeight(1)
      .onReachEnd(() => {
        if(!this.isLoading && this.isMore){
          this.isLoading = true;
          // 翻页
          ForumModel.pageNo++;
          this.loadForumInfo()
        }
      })
    }
    .width('100%')
    .height('100%')
    .padding(10)
    .backgroundColor('#e1e2e3')
  }

  loadForumInfo(){
    // 加载数据
    ForumModel.getForumList()
      .then(forums => {
        // 给图片加上服务器地址前缀
        forums.forEach(s => {
          s.images.forEach((src, i) => {
            s.images[i] = 'http://10.159.165.121:3000' + src
          })
        })
        this.fourms = this.fourms.concat(forums) //合并数据拼接数组
        this.isLoading = false
        if(!forums || forums.length === 0){
          this.isMore = false
        }
      })
  }
}