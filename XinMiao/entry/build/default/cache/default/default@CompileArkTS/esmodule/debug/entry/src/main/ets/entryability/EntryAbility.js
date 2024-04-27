import UIAbility from '@ohos:app.ability.UIAbility';
import hilog from '@ohos:hilog';
import Logger from '@bundle:com.example.XinMiao/entry/ets/common/utils/Logger';
import WindowModel from '@bundle:com.example.XinMiao/entry/ets/model/WindowModel';
import PreferencesUtils from '@bundle:com.example.XinMiao/entry/ets/common/utils/PreferencesUtil';
import TaskModel from '@bundle:com.example.XinMiao/entry/ets/model/TaskModel';
export default class EntryAbility extends UIAbility {
    async onCreate(want, launchParam) {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate running');
        //加载preference
        await PreferencesUtils.loadPreference(this.context, 'MyPreferences');
        TaskModel.initTaskDB(this.context);
    }
    onDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage) {
        Logger.info('Ability onWindowStageCreate');
        let windowModel = WindowModel.getInstance();
        windowModel.setWindowStage(windowStage);
        windowModel.setMainWindowImmersive();
        windowStage.loadContent('pages/WelcomePage', (err) => {
            if (err.code) {
                Logger.error(`Failed to load the content. Code:${err.code},message:${err.message}`);
                return;
            }
        });
    }
    onWindowStageDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy ');
    }
    onForeground() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
}
//# sourceMappingURL=EntryAbility.js.map