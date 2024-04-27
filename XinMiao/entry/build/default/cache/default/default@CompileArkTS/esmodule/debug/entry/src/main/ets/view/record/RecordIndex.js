import DateUtil from '@bundle:com.example.XinMiao/entry/ets/common/utils/DateUtil';
import RecordService from '@bundle:com.example.XinMiao/entry/ets/Service/RecordService';
import RecordList from '@bundle:com.example.XinMiao/entry/ets/view/record/RecordList';
import SearchHeader from '@bundle:com.example.XinMiao/entry/ets/view/record/SearchHeader';
import StatsCard from '@bundle:com.example.XinMiao/entry/ets/view/record/StatsCard';
export default class RecordIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__selectedDate = this.createStorageProp('selectedDate', DateUtil.beginTimeOfDay(new Date()), "selectedDate");
        this.__records = new ObservedPropertyObjectPU([], this, "records");
        this.addProvidedVar("records", this.__records);
        this.__isPageShow = new SynchedPropertySimpleOneWayPU(params.isPageShow, this, "isPageShow");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("selectedDate", this.aboutToAppear);
        this.declareWatch("isPageShow", this.handlePageShow);
    }
    setInitiallyProvidedValue(params) {
        if (params.records !== undefined) {
            this.records = params.records;
        }
    }
    updateStateVars(params) {
        this.__isPageShow.reset(params.isPageShow);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isPageShow.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedDate.aboutToBeDeleted();
        this.__records.aboutToBeDeleted();
        this.__isPageShow.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get selectedDate() {
        return this.__selectedDate.get();
    }
    set selectedDate(newValue) {
        this.__selectedDate.set(newValue);
    }
    get records() {
        return this.__records.get();
    }
    set records(newValue) {
        this.__records.set(newValue);
    }
    get isPageShow() {
        return this.__isPageShow.get();
    }
    set isPageShow(newValue) {
        this.__isPageShow.set(newValue);
    }
    handlePageShow() {
        if (this.isPageShow) {
            this.aboutToAppear();
        }
    }
    async aboutToAppear() {
        this.records = await RecordService.queryRecordByDate(this.selectedDate);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777295, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 1.头部搜索栏
                    SearchHeader(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 2.统计卡片
                    StatsCard(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.layoutWeight(1);
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 3.记录列表
                    RecordList(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=RecordIndex.js.map