import { CommonConstants_health } from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
export default class NutrientStats extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__carbon = new SynchedPropertySimpleOneWayPU(params.carbon, this, "carbon");
        this.__protein = new SynchedPropertySimpleOneWayPU(params.protein, this, "protein");
        this.__fat = new SynchedPropertySimpleOneWayPU(params.fat, this, "fat");
        this.recommendCarbon = CommonConstants_health.RECOMMEND_CARBON;
        this.recommendProtein = CommonConstants_health.RECOMMEND_PROTEIN;
        this.recommendFat = CommonConstants_health.RECOMMEND_FAT;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.recommendCarbon !== undefined) {
            this.recommendCarbon = params.recommendCarbon;
        }
        if (params.recommendProtein !== undefined) {
            this.recommendProtein = params.recommendProtein;
        }
        if (params.recommendFat !== undefined) {
            this.recommendFat = params.recommendFat;
        }
    }
    updateStateVars(params) {
        this.__carbon.reset(params.carbon);
        this.__protein.reset(params.protein);
        this.__fat.reset(params.fat);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__carbon.purgeDependencyOnElmtId(rmElmtId);
        this.__protein.purgeDependencyOnElmtId(rmElmtId);
        this.__fat.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__carbon.aboutToBeDeleted();
        this.__protein.aboutToBeDeleted();
        this.__fat.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get carbon() {
        return this.__carbon.get();
    }
    set carbon(newValue) {
        this.__carbon.set(newValue);
    }
    get protein() {
        return this.__protein.get();
    }
    set protein(newValue) {
        this.__protein.set(newValue);
    }
    get fat() {
        return this.__fat.get();
    }
    set fat(newValue) {
        this.__fat.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants_health.SPACE_6 });
            Row.debugLine("view/record/NutrientStats.ets(13:5)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceEvenly);
            Row.padding({ top: 30, bottom: 35 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '碳水化合物', value: () => (this["__carbon"] ? this["__carbon"] : this["carbon"]), recommend: () => (this["__recommendCarbon"] ? this["__recommendCarbon"] : this["recommendCarbon"]), color: () => ({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }) }));
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '蛋白质', value: () => (this["__protein"] ? this["__protein"] : this["protein"]), recommend: () => (this["__recommendProtein"] ? this["__recommendProtein"] : this["recommendProtein"]), color: () => ({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }) }));
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '脂肪', value: () => (this["__fat"] ? this["__fat"] : this["fat"]), recommend: () => (this["__recommendFat"] ? this["__recommendFat"] : this["recommendFat"]), color: () => ({ "id": 16777225, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }) }));
        Row.pop();
    }
    StatsBuilder($$, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants_health.SPACE_6 });
            Column.debugLine("view/record/NutrientStats.ets(39:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("view/record/NutrientStats.ets(40:7)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                value: $$.value,
                total: $$.recommend,
                type: ProgressType.Ring
            });
            Progress.debugLine("view/record/NutrientStats.ets(41:9)");
            Progress.width(95);
            Progress.style({ strokeWidth: CommonConstants_health.DEFAULT_6 });
            Progress.color($$.color);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants_health.SPACE_6 });
            Column.debugLine("view/record/NutrientStats.ets(49:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('摄入推荐');
            Text.debugLine("view/record/NutrientStats.ets(50:11)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777226, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${$$.value.toFixed(0)}/${$$.recommend.toFixed(0)}`);
            Text.debugLine("view/record/NutrientStats.ets(53:11)");
            Text.fontSize(18);
            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${$$.label}（克）`);
            Text.debugLine("view/record/NutrientStats.ets(58:7)");
            Text.fontSize(12);
            Text.fontColor({ "id": 16777229, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NutrientStats.js.map