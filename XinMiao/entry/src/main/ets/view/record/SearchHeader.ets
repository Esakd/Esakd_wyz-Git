import { CommonConstants_health } from '../../common/constants/CommonConstants'
import { Header } from '../../components/CommonComponent'
@Component
export default struct SearchHeader {
  build() {
    Header({title:'新苗健康'})
        .width('90%')
        .margin({top:60,bottom:50})
  }
}