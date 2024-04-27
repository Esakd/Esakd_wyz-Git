import BreakpointType from '@bundle:com.example.XinMiao/entry/ets/common/bean/BreanpointType';
import BreakpointConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/BreakpointConstants';
import { CommonConstants_health } from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import DateUtil from '@bundle:com.example.XinMiao/entry/ets/common/utils/DateUtil';
import RecordService from '@bundle:com.example.XinMiao/entry/ets/Service/RecordService';
import StatsInfo from '@bundle:com.example.XinMiao/entry/ets/viewmodel/StatsInfo';
import CalorieStats from '@bundle:com.example.XinMiao/entry/ets/view/record/CalorieStats';
import DatePickDialog from '@bundle:com.example.XinMiao/entry/ets/view/record/DatePickDialog';
import NutrientStats from '@bundle:com.example.XinMiao/entry/ets/view/record/NutrientStats';
export default class StatsCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__selectedDate = this.createStorageProp('selectedDate', DateUtil.beginTimeOfDay(new Date()), "selectedDate");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__records = this.initializeConsume("records", "records");
        this.__info = new ObservedPropertyObjectPU(new StatsInfo(), this, "info");
        this.controller = new CustomDialogController({
            builder: () => {
                let jsDialog = new DatePickDialog(this, { selectedDate: new Date(this.selectedDate) });
                jsDialog.setController(this.controller);
                ViewPU.create(jsDialog);
            }
        }, this);
        this.setInitiallyProvidedValue(params);
        this.declareWatch("records", this.handleRecordsChange);
    }
    setInitiallyProvidedValue(params) {
        if (params.info !== undefined) {
            this.info = params.info;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__info.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedDate.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__records.aboutToBeDeleted();
        this.__info.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get selectedDate() {
        return this.__selectedDate.get();
    }
    set selectedDate(newValue) {
        this.__selectedDate.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get records() {
        return this.__records.get();
    }
    set records(newValue) {
        this.__records.set(newValue);
    }
    get info() {
        return this.__info.get();
    }
    set info(newValue) {
        this.__info.set(newValue);
    }
    handleRecordsChange() {
        this.info = RecordService.calculateStatsInfo(this.records);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants_health.THOUSANDTH_940);
            Column.backgroundColor({ "id": 16777312, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Column.borderRadius(CommonConstants_health.DEFAULT_18);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 1.日期信息
            Row.create();
            // 1.日期信息
            Row.padding(CommonConstants_health.SPACE_8);
            // 1.日期信息
            Row.onClick(() => this.controller.open());
            if (!isInitialRender) {
                // 1.日期信息
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(DateUtil.formatDate(this.selectedDate));
            Text.fontColor({ "id": 16777310, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777429, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.width(20);
            Image.fillColor({ "id": 16777310, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 1.日期信息
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 2.统计信息
            Swiper.create();
            // 2.统计信息
            Swiper.width('100%');
            // 2.统计信息
            Swiper.backgroundColor(Color.White);
            // 2.统计信息
            Swiper.borderRadius(CommonConstants_health.DEFAULT_18);
            // 2.统计信息
            Swiper.indicatorStyle({ selectedColor: { "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            // 2.统计信息
            Swiper.displayCount(new BreakpointType({
                sm: 1,
                md: 1,
                lg: 2
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                // 2.统计信息
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 2.1.热量统计
                    CalorieStats(this, { intake: this.info.intake, expend: this.info.expend }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        intake: this.info.intake, expend: this.info.expend
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 2.2.营养素统计
                    NutrientStats(this, { carbon: this.info.carbon, protein: this.info.protein, fat: this.info.fat }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        carbon: this.info.carbon, protein: this.info.protein, fat: this.info.fat
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        // 2.统计信息
        Swiper.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=StatsCard.js.map