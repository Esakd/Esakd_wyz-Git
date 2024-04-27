import { CommonConstants_health } from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
export default class CalorieStats extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__intake = new SynchedPropertySimpleOneWayPU(params.intake, this, "intake");
        this.__expend = new SynchedPropertySimpleOneWayPU(params.expend, this, "expend");
        this.recommend = CommonConstants_health.RECOMMEND_CALORIE;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.recommend !== undefined) {
            this.recommend = params.recommend;
        }
    }
    updateStateVars(params) {
        this.__intake.reset(params.intake);
        this.__expend.reset(params.expend);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__intake.purgeDependencyOnElmtId(rmElmtId);
        this.__expend.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__intake.aboutToBeDeleted();
        this.__expend.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get intake() {
        return this.__intake.get();
    }
    set intake(newValue) {
        this.__intake.set(newValue);
    }
    get expend() {
        return this.__expend.get();
    }
    set expend(newValue) {
        this.__expend.set(newValue);
    }
    remainCalorie() {
        return this.recommend - this.intake + this.expend;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants_health.SPACE_6 });
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceEvenly);
            Row.padding({ top: 30, bottom: 35 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 1.饮食摄入
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '饮食摄入', value: () => (this["__intake"] ? this["__intake"] : this["intake"]) }));
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 2.还可以吃
            Stack.create();
            if (!isInitialRender) {
                // 2.还可以吃
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 2.1.进度条
            Progress.create({
                value: this.intake,
                total: this.recommend,
                type: ProgressType.Ring
            });
            // 2.1.进度条
            Progress.width(120);
            // 2.1.进度条
            Progress.style({ strokeWidth: CommonConstants_health.DEFAULT_10 });
            // 2.1.进度条
            Progress.color({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                // 2.1.进度条
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 2.2.统计数据
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '还可以吃', value: () => this.remainCalorie(), tips: () => `推荐${this.recommend}` }));
        // 2.还可以吃
        Stack.pop();
        // 3.运动消耗
        this.StatsBuilder.bind(this)(makeBuilderParameterProxy("StatsBuilder", { label: () => '运动消耗', value: () => (this["__expend"] ? this["__expend"] : this["expend"]) }));
        Row.pop();
    }
    StatsBuilder($$, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants_health.SPACE_6 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('还需运动');
            Text.fontColor({ "id": 16777293, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('5000' + ' 步');
            Text.fontSize(20);
            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_700);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if ($$.tips) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create('推荐5000 步');
                        Text.fontSize(12);
                        Text.fontColor({ "id": 16777296, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
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
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=CalorieStats.js.map