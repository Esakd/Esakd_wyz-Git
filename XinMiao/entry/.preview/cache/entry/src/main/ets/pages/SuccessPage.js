import CommonConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import WindowModel from '@bundle:com.example.XinMiao/entry/ets/model/WindowModel';
class SuccessPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    aboutToAppear() {
        setTimeout(() => {
            WindowModel.getInstance().destroySubWindow();
            getContext(this).eventHub.emit(CommonConstants.HOME_PAGE_ACTION);
        }, CommonConstants.LOGIN_WAIT_TIME);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/SuccessPage.ets(18:5)");
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
            Column.debugLine("pages/SuccessPage.ets(19:7)");
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
            Text.create({ "id": 16777383, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/SuccessPage.ets(20:9)");
            Text.fontSize({ "id": 16777439, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.padding({
                left: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                top: { "id": 16777469, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Text.width(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777415, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/SuccessPage.ets(27:9)");
            Image.width({ "id": 16777460, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.height({ "id": 16777460, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.margin({
                top: { "id": 16777459, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777459, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777384, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/SuccessPage.ets(34:9)");
            Text.fontSize({ "id": 16777458, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.margin({
                bottom: { "id": 16777462, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
loadDocument(new SuccessPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SuccessPage.js.map