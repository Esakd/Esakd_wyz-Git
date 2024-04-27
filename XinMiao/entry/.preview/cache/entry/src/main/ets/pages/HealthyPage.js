import BreakpointType from '@bundle:com.example.XinMiao/entry/ets/common/bean/BreanpointType';
import BreakpointConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/BreakpointConstants';
import { CommonConstants_health } from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import BreakpointSystem from '@bundle:com.example.XinMiao/entry/ets/common/utils/BreakpointSystem';
import RecordIndex from '@bundle:com.example.XinMiao/entry/ets/view/record/RecordIndex';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.breakpointSystem = new BreakpointSystem();
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__isPageShow = new ObservedPropertySimplePU(false, this, "isPageShow");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
        if (params.isPageShow !== undefined) {
            this.isPageShow = params.isPageShow;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isPageShow.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isPageShow.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get isPageShow() {
        return this.__isPageShow.get();
    }
    set isPageShow(newValue) {
        this.__isPageShow.set(newValue);
    }
    onPageShow() {
        this.isPageShow = true;
    }
    onPageHide() {
        this.isPageShow = false;
    }
    TabBarBuilder(title, image, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants_health.SPACE_8 });
            Column.debugLine("pages/HealthyPage.ets(24:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(image);
            Image.debugLine("pages/HealthyPage.ets(25:7)");
            Image.width(22);
            Image.fillColor(this.selectColor(index));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/HealthyPage.ets(28:7)");
            Text.fontSize(14);
            Text.fontColor(this.selectColor(index));
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    aboutToAppear() {
        this.breakpointSystem.register();
    }
    aboutToDisappear() {
        this.breakpointSystem.unregister();
    }
    selectColor(index) {
        return this.currentIndex === index ? { "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } : { "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" };
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({ barPosition: BreakpointConstants.BAR_POSITION.getValue(this.currentBreakpoint) });
            Tabs.debugLine("pages/HealthyPage.ets(47:5)");
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.onChange(index => this.currentIndex = index);
            Tabs.vertical(new BreakpointType({
                sm: false,
                md: true,
                lg: true
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new RecordIndex(this, { isPageShow: this.isPageShow }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                isPageShow: this.isPageShow
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, { "id": 16777387, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777267, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 0);
                } });
            TabContent.debugLine("pages/HealthyPage.ets(48:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('发现页面');
                    Text.debugLine("pages/HealthyPage.ets(54:9)");
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, { "id": 16777386, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777294, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 1);
                } });
            TabContent.debugLine("pages/HealthyPage.ets(53:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('我的主页');
                    Text.debugLine("pages/HealthyPage.ets(59:9)");
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, { "id": 16777388, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777285, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 2);
                } });
            TabContent.debugLine("pages/HealthyPage.ets(58:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HealthyPage.js.map