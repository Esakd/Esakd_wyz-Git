import router from '@ohos.router';
import CommonConstants from '../common/constants/CommonConstants';
import Logger from '../common/utils/Logger';
import WindowModel from '../model/WindowModel';

@Extend(TextInput)
function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .backgroundColor(($r('app.color.start_window_background')))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.big_text_size'))
  .padding({
    left: $r('app.float.input_padding'),
    right: $r('app.float.input_padding')
  })
}

@Extend(Text)
function blueTextStyle() {
  .fontColor($r('app.color.login_blue_text_color'))
  .fontSize($r('app.float.small_text_size'))
  .fontWeight(FontWeight.Medium)
  .margin({
    left: $r('app.float.forgot_margin'),
    right: $r('app.float.forgot_margin')
  })
}

/**
 * Login page.
 */
@Entry
@Component
struct LoginPage {
  @State account: string = '';
  @State password: string = '';
  @State isShadow: boolean = false;
  private windowModel: WindowModel = WindowModel.getInstance();

  aboutToAppear() {
    getContext(this).eventHub.on(CommonConstants.HOME_PAGE_ACTION, () => {
      router.replaceUrl({
        url: CommonConstants.HOME_PAGE_URL
      }).catch((err: Error) => {
        Logger.error(`pushUrl failed, message:${err.message}`);
      });
    });
  }

  build() {
    Stack({ alignContent: Alignment.Top }) {
      Column() {
        Image($r("app.media.app_icon"))
          .width(180)
          .height(180)
          .margin({
            top:60,
            bottom:20
          })
          .interpolation(ImageInterpolation.High)
          .borderRadius(40)
        Text($r('app.string.login_page'))
          .fontSize($r('app.float.page_title_text_size'))
          .fontWeight(FontWeight.Medium)
          .fontColor($r('app.color.title_text_color'))
        Text($r('app.string.login_more'))
          .fontSize($r('app.float.normal_text_size'))
          .fontColor($r('app.color.login_more_text_color'))
          .margin({
            bottom: $r('app.float.login_more_margin_bottom'),
            top: $r('app.float.login_more_margin_top')
          })

        Column() {
          TextInput({ placeholder: $r('app.string.account') })
            .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
            .inputStyle()
            .onChange((value: string) => {
              this.account = value;
            })
          Line()
            .width(CommonConstants.FULL_PARENT)
            .height($r('app.float.line_height'))
            .backgroundColor($r('app.color.line_color'))
            .margin({
              left: $r('app.float.line_margin'),
              right: $r('app.float.line_margin')
            })
          TextInput({ placeholder: $r('app.string.password') })
            .maxLength(CommonConstants.INPUT_PASSWORD_LENGTH)
            .type(InputType.Password)
            .inputStyle()
            .onChange((value: string) => {
              this.password = value;
            })
        }
        .padding({
          top: $r('app.float.background_text_margin'),
          bottom: $r('app.float.background_text_margin')
        })
        .width(CommonConstants.FULL_PARENT)
        .backgroundColor($r('app.color.start_window_background'))
        .borderRadius($r('app.float.background_border_radius'))

        Row() {
          Text($r('app.string.message_login')).blueTextStyle()
          Text($r('app.string.forgot_password')).blueTextStyle()
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .width(CommonConstants.FULL_PARENT)
        .margin({ top: $r('app.float.forgot_margin_top') })

        Blank()
        Button($r('app.string.verify'), { type: ButtonType.Capsule })
          .width(CommonConstants.BUTTON_WIDTH)
          .height($r('app.float.login_button_height'))
          .fontSize($r('app.float.normal_text_size'))
          .fontWeight(FontWeight.Medium)
          .enabled(isLoginClickable(this.account, this.password))
          .backgroundColor(isLoginClickable(this.account, this.password) ? $r('app.color.login_button_color') : $r('app.color.login_button_disable'))
          .fontColor(isLoginClickable(this.account, this.password) ? Color.White : $r('app.color.login_font_disable'))
          .margin({
            top: $r('app.float.login_button_margin_top'),
            bottom: $r('app.float.login_button_margin_bottom')
          })
          .onClick(() => {
            this.windowModel.createSubWindow();
            this.isShadow = true;
          })
        Text($r('app.string.register_account'))
          .fontColor($r('app.color.login_blue_text_color'))
          .fontSize($r('app.float.normal_text_size'))
          .fontWeight(FontWeight.Medium)
          .margin({ bottom: $r('app.float.login_register_margin_bottom') })
      }
      .backgroundColor($r('app.color.background'))
      .height(CommonConstants.FULL_PARENT)
      .width(CommonConstants.FULL_PARENT)
      .padding({
        left: $r('app.float.login_padding'),
        right: $r('app.float.login_padding'),
        bottom: $r('app.float.login_page_padding_bottom')
      })

      if (this.isShadow) {
        Rect()
          .width(CommonConstants.FULL_PARENT)
          .height(CommonConstants.FULL_PARENT)
          .fillOpacity($r('app.float.login_background_opacity'))
          .fill($r('app.color.title_text_color'))
      }
    }
  }
}

function isLoginClickable(account: string, password: string): boolean {
  return account !== '' && password !== '';
}