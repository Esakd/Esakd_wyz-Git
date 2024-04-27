import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import Logger from '@bundle:com.example.XinMiao/entry/ets/common/utils/Logger';
import VerifyItem from '@bundle:com.example.XinMiao/entry/ets/viewmodel/VerifyItem';
import WindowViewModel from '@bundle:com.example.XinMiao/entry/ets/viewmodel/WindowViewModel';
function __Text__promptTextStyle() {
    Text.fontSize({ "id": 16777458, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
    Text.width(CommonConstants.FULL_PARENT);
    Text.padding({
        left: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
        right: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
    });
}
class VerifyPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isInputWrong = new ObservedPropertySimplePU(false, this, "isInputWrong");
        this.__verifyItem = new ObservedPropertyObjectPU(new VerifyItem({ "id": 16777299, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'XYZK'), this, "verifyItem");
        this.__inputText = new ObservedPropertySimplePU('', this, "inputText");
        this.imageId = 0;
        this.verifyMap = new Map();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.isInputWrong !== undefined) {
            this.isInputWrong = params.isInputWrong;
        }
        if (params.verifyItem !== undefined) {
            this.verifyItem = params.verifyItem;
        }
        if (params.inputText !== undefined) {
            this.inputText = params.inputText;
        }
        if (params.imageId !== undefined) {
            this.imageId = params.imageId;
        }
        if (params.verifyMap !== undefined) {
            this.verifyMap = params.verifyMap;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isInputWrong.purgeDependencyOnElmtId(rmElmtId);
        this.__verifyItem.purgeDependencyOnElmtId(rmElmtId);
        this.__inputText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isInputWrong.aboutToBeDeleted();
        this.__verifyItem.aboutToBeDeleted();
        this.__inputText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isInputWrong() {
        return this.__isInputWrong.get();
    }
    set isInputWrong(newValue) {
        this.__isInputWrong.set(newValue);
    }
    get verifyItem() {
        return this.__verifyItem.get();
    }
    set verifyItem(newValue) {
        this.__verifyItem.set(newValue);
    }
    get inputText() {
        return this.__inputText.get();
    }
    set inputText(newValue) {
        this.__inputText.set(newValue);
    }
    aboutToAppear() {
        this.verifyMap = WindowViewModel.getVerifyMap();
        this.updateVerifyItem();
    }
    updateVerifyItem() {
        let verifyItemNew = this.verifyMap.get(this.imageId);
        if (verifyItemNew !== undefined) {
            this.verifyItem = verifyItemNew;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/VerifyPage.ets(44:5)");
            Column.padding({ bottom: { "id": 16777463, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            Column.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/VerifyPage.ets(45:7)");
            Column.backgroundColor(Color.White);
            Column.height(CommonConstants.FULL_PARENT);
            Column.borderRadius({ "id": 16777468, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/VerifyPage.ets(46:9)");
            Row.padding({
                left: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                top: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777464, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Row.width(CommonConstants.FULL_PARENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.verifyItem.image);
            Image.debugLine("pages/VerifyPage.ets(47:11)");
            Image.height({ "id": 16777466, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.width({ "id": 16777467, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777342, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/VerifyPage.ets(50:11)");
            Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777419, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.width({ "id": 16777465, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.onClick(() => {
                this.imageId = (this.imageId + 1) % 2;
                this.updateVerifyItem();
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777395, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, text: this.inputText });
            TextInput.debugLine("pages/VerifyPage.ets(68:9)");
            TextInput.placeholderColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            TextInput.fontSize({ "id": 16777419, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            TextInput.height({ "id": 16777444, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            TextInput.margin({
                left: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                top: { "id": 16777470, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777470, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            TextInput.onChange((value) => {
                this.inputText = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isInputWrong) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create({ "id": 16777397, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        Text.debugLine("pages/VerifyPage.ets(82:11)");
                        Text.fontColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        __Text__promptTextStyle();
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create({ "id": 16777394, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        Text.debugLine("pages/VerifyPage.ets(86:11)");
                        Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        __Text__promptTextStyle();
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777396, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/VerifyPage.ets(90:9)");
            Text.fontSize({ "id": 16777419, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.margin({
                top: { "id": 16777468, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777468, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Text.onClick(() => {
                let verifyText = this.verifyItem.characters;
                if (this.inputText.toLowerCase() === verifyText.toLowerCase()) {
                    router.replaceUrl({
                        url: CommonConstants.SUCCESS_PAGE_URL
                    }).catch((err) => {
                        Logger.error(`pushUrl failed, message:${err.message}`);
                    });
                }
                else {
                    this.isInputWrong = true;
                    this.inputText = '';
                    this.imageId = (this.imageId + 1) % 2;
                    this.updateVerifyItem();
                }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new VerifyPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=VerifyPage.js.map