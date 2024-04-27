import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.example.XinMiao/entry/ets/common/utils/Logger';
import WindowModel from '@bundle:com.example.XinMiao/entry/ets/model/WindowModel';
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.backgroundColor(({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }));
    TextInput.height({ "id": 16777447, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777419, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    TextInput.padding({
        left: { "id": 16777438, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
        right: { "id": 16777438, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
    });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    Text.fontSize({ "id": 16777458, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
    Text.margin({
        left: { "id": 16777420, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
        right: { "id": 16777420, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
            Stack.debugLine("pages/LoginPage.ets(51:5)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LoginPage.ets(52:7)");
            Column.backgroundColor({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777450, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777450, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777451, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777216, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/LoginPage.ets(53:9)");
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
            Text.create({ "id": 16777363, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/LoginPage.ets(62:9)");
            Text.fontSize({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777247, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777362, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/LoginPage.ets(66:9)");
            Text.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.margin({
                bottom: { "id": 16777448, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                top: { "id": 16777449, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
            Column.debugLine("pages/LoginPage.ets(74:9)");
            Column.padding({
                top: { "id": 16777418, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777418, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Column.width(CommonConstants.FULL_PARENT);
            Column.backgroundColor({ "id": 16777244, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Column.borderRadius({ "id": 16777417, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777337, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            TextInput.debugLine("pages/LoginPage.ets(75:11)");
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
            Line.debugLine("pages/LoginPage.ets(81:11)");
            Line.width(CommonConstants.FULL_PARENT);
            Line.height({ "id": 16777440, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Line.backgroundColor({ "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Line.margin({
                left: { "id": 16777441, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777441, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777375, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            TextInput.debugLine("pages/LoginPage.ets(89:11)");
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
            Row.debugLine("pages/LoginPage.ets(105:9)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.margin({ top: { "id": 16777421, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777368, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/LoginPage.ets(106:11)");
            __Text__blueTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777346, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/LoginPage.ets(107:11)");
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
            Blank.debugLine("pages/LoginPage.ets(113:9)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777393, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.debugLine("pages/LoginPage.ets(114:9)");
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777444, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.enabled(isLoginClickable(this.account, this.password));
            Button.backgroundColor(isLoginClickable(this.account, this.password) ? { "id": 16777234, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } : { "id": 16777235, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.fontColor(isLoginClickable(this.account, this.password) ? Color.White : { "id": 16777236, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.margin({
                top: { "id": 16777446, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777445, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
            Text.create({ "id": 16777377, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/LoginPage.ets(130:9)");
            Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ bottom: { "id": 16777452, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
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
                        Rect.debugLine("pages/LoginPage.ets(146:9)");
                        Rect.width(CommonConstants.FULL_PARENT);
                        Rect.height(CommonConstants.FULL_PARENT);
                        Rect.fillOpacity({ "id": 16777443, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        Rect.fill({ "id": 16777247, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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