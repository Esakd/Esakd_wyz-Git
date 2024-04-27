import router from '@ohos:router';
class WelcomePage extends ViewPU {
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
        this.jumpToIndex();
    }
    jumpToIndex() {
        setTimeout(() => {
            router.replaceUrl({
                url: 'pages/LoginPage'
            });
        }, 3000);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/WelcomePage.ets(16:5)");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#FFFFFF');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777216, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/WelcomePage.ets(17:7)");
            Image.width(300);
            Image.height(300);
            Image.margin({ top: 80, bottom: 200 });
            Image.interpolation(ImageInterpolation.High);
            Image.borderRadius(30);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/WelcomePage.ets(23:7)");
            Column.height(100);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777256, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/WelcomePage.ets(24:9)");
            Image.height(80);
            Image.width(200);
            Image.interpolation(ImageInterpolation.High);
            Image.borderRadius(15);
            Image.margin({ top: 120, bottom: 30 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("HarmonyOS");
            Text.debugLine("pages/WelcomePage.ets(30:9)");
            Text.fontColor(Color.Black);
            Text.fontSize(15);
            Text.border({ style: BorderStyle.Solid, width: 1, color: Color.Black, radius: 15 });
            Text.margin({ bottom: 30 });
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("——By GGBond后援队 Esakd");
            Text.debugLine("pages/WelcomePage.ets(36:9)");
            Text.fontColor(Color.Black);
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
loadDocument(new WelcomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=WelcomePage.js.map