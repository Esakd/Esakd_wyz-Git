import axios from '@package:pkg_modules/.ohpm/@ohos+axios@2.2.0/pkg_modules/@ohos/axios/index';
//axios
class ForumModel {
    constructor() {
        this.baseURL = 'http://10.159.165.121:3000'; //服务器ip端口
        this.pageNo = 1;
        //http
        /*getForumList(): Promise<ForumInfo[]>{
          return new Promise((resolve, reject) => { //直接返回promise处理异步对象
            // 1.创建http的请求对象
            let httpRequest = http.createHttp()
            // 2.发送请求 异步任务
            httpRequest.request(
              `${this.baseURL}/shops?pageNo=${this.pageNo}&pageSize=4`,
              {
                method: http.RequestMethod.GET
              }
            )
              .then(resp => {
                if(resp.responseCode === 200){
                  // 查询成功
                  console.log('查询论坛成功！', resp.result)
                  resolve(JSON.parse(resp.result.toString()))
                }else{
                  console.log('查询论坛信息失败！error:', JSON.stringify(resp))
                  reject('查询论坛失败')
                }
              })
              .catch(error => {
                console.log('查询论坛信息失败！error:', JSON.stringify(error))
                reject('查询论坛失败')
              })
          })
        }*/
    }
    getForumList() {
        return new Promise((resolve, reject) => {
            axios.get(//get请求
            `${this.baseURL}/shops`, {
                params: { pageNo: this.pageNo, pageSize: 4 }
            })
                .then(resp => {
                if (resp.status === 200) {
                    // 查询成功
                    console.log('查询论坛成功！', JSON.stringify(resp.data));
                    resolve(resp.data);
                }
                else {
                    console.log('查询论坛信息失败！error:', JSON.stringify(resp));
                    reject('查询论坛失败');
                }
            })
                .catch(error => {
                console.log('查询论坛信息失败！error:', JSON.stringify(error));
                reject('查询论坛失败');
            });
        });
    }
}
const forumModel = new ForumModel();
export default forumModel;
//# sourceMappingURL=ForumModel.js.map