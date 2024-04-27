import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.example.XinMiao/entry/ets/common/utils/Logger';
import WindowModel from '@bundle:com.example.XinMiao/entry/ets/model/WindowModel';
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777307, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.backgroundColor(({ "id": 16777311, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }));
    TextInput.height({ "id": 16777347, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777319, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.padding({
        left: { "id": 16777338, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
        right: { "id": 16777338, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
    });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777300, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    Text.fontSize({ "id": 16777358, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
    Text.margin({
        left: { "id": 16777320, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
        right: { "id": 16777320, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
    });
}
class LoginPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__isShadow = new ObservedPropertySimplePU(false, this, "isShadow");
        this.windowModel = WindowModel.getInstance();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isShadow !== undefined) {
            this.isShadow = params.isShadow;
        }
        if (params.windowModel !== undefined) {
            this.windowModel = params.windowModel;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__isShadow.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__isShadow.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get account() {
        return this.__account.get();
    }
    set account(newValue) {
        this.__account.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    get isShadow() {
        return this.__isShadow.get();
    }
    set isShadow(newValue) {
        this.__isShadow.set(newValue);
    }
    aboutToAppear() {
        getContext(this).eventHub.on(CommonConstants.HOME_PAGE_ACTION, () => {
            router.replaceUrl({
                url: CommonConstants.HOME_PAGE_URL
            }).catch((err) => {
                Logger.error(`pushUrl failed, message:${err.message}`);
            });
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Top });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777350, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777350, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777351, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.width(180);
            Image.height(180);
            Image.margin({
                top: 60,
                bottom: 20
            });
            Image.interpolation(ImageInterpolation.High);
            Image.borderRadius(40);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777357, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontColor({ "id": 16777304, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.margin({
                bottom: { "id": 16777348, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                top: { "id": 16777349, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.padding({
                top: { "id": 16777318, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777318, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Column.width(CommonConstants.FULL_PARENT);
            Column.backgroundColor({ "id": 16777311, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Column.borderRadius({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.account = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.width(CommonConstants.FULL_PARENT);
            Line.height({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Line.backgroundColor({ "id": 16777299, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Line.margin({
                left: { "id": 16777341, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777341, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            TextInput.maxLength(CommonConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.margin({ top: { "id": 16777321, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            __Text__blueTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            __Text__blueTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777282, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777344, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.enabled(isLoginClickable(this.account, this.password));
            Button.backgroundColor(isLoginClickable(this.account, this.password) ? { "id": 16777301, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } : { "id": 16777302, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontColor(isLoginClickable(this.account, this.password) ? Color.White : { "id": 16777303, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.margin({
                top: { "id": 16777346, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777345, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Button.onClick(() => {
                this.windowModel.createSubWindow();
                this.isShadow = true;
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777266, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontColor({ "id": 16777300, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ bottom: { "id": 16777352, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isShadow) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Rect.create();
                        Rect.width(CommonConstants.FULL_PARENT);
                        Rect.height(CommonConstants.FULL_PARENT);
                        Rect.fillOpacity({ "id": 16777343, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        Rect.fill({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Rect.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function isLoginClickable(account, password) {
    return account !== '' && password !== '';
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LoginPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LoginPage.js.map