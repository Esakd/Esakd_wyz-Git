import common from '@ohos.app.ability.common';
import { MediaBean } from '../common/bean/MediaBean';
import { MediaHelper } from '../helper/MediaHelper';

@Entry
@Component
struct Index {
  @State mediaBean: MediaBean = new MediaBean();
  private mediaHelper: MediaHelper = new MediaHelper(getContext());

  build() {
    Row() {
      Column() {
        Text('选择图片')
          .textAlign(TextAlign.Center)
          .width(200)
          .fontSize(16)
          .padding(10)
          .margin(20)
          .border({ width: 0.5, color: '#ff38f84b', radius: 15 })
          .onClick(() => {
            this.handleClick(MediaOption.Picture)
          })

        Text('选择文件')
          .textAlign(TextAlign.Center)
          .width(200)
          .fontSize(16)
          .padding(10)
          .margin(20)
          .border({ width: 0.5, color: '#ff38f84b', radius: 15 })
          .onClick(() => {
            this.handleClick(MediaOption.File)
          })

        Text('拍照')
          .textAlign(TextAlign.Center)
          .width(200)
          .fontSize(16)
          .padding(10)
          .margin(20)
          .border({ width: 0.5, color: '#ff38f84b', radius: 15 })
          .onClick(() => {
            this.handleClick(MediaOption.TakePhoto)
          })

        Divider()
          .width('100%')
          .height(0.5)
          .color('#ff99f6a2')
          .margin({ top: 20 })
          .padding({ left: 20, right: 20 })

        Text(`文件名称: ${this.mediaBean.fileName ? this.mediaBean.fileName : ''}`)
          .textAlign(TextAlign.Center)
          .width('100%')
          .fontSize(16)
          .margin(10)

        Text(`文件大小: ${this.mediaBean.fileSize ? this.mediaBean.fileSize : ''}`)
          .textAlign(TextAlign.Center)
          .width('100%')
          .fontSize(16)
          .margin(10)

        Text(`文件类型: ${this.mediaBean.fileType ? this.mediaBean.fileType : ''}`)
          .textAlign(TextAlign.Center)
          .width('100%')
          .fontSize(16)
          .margin(10)

        Text(`文件Uri: ${this.mediaBean.localUrl ? this.mediaBean.localUrl : ''}`)
          .textAlign(TextAlign.Center)
          .width('100%')
          .fontSize(16)
          .margin(10)

        Image(this.mediaBean.localUrl)
          .width(300)
          .height(300)
          .backgroundColor(Color.Grey)

      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
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
