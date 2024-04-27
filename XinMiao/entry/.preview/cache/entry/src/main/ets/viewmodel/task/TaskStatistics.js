export default class TaskStatistics extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__totalTask = new SynchedPropertySimpleOneWayPU(params.totalTask, this, "totalTask");
        this.__finishTask = new SynchedPropertySimpleOneWayPU(params.finishTask, this, "finishTask");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
        this.__totalTask.reset(params.totalTask);
        this.__finishTask.reset(params.finishTask);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__totalTask.purgeDependencyOnElmtId(rmElmtId);
        this.__finishTask.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__totalTask.aboutToBeDeleted();
        this.__finishTask.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get totalTask() {
        return this.__totalTask.get();
    }
    set totalTask(newValue) {
        this.__totalTask.set(newValue);
    }
    get finishTask() {
        return this.__finishTask.get();
    }
    set finishTask(newValue) {
        this.__finishTask.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("viewmodel/task/TaskStatistics.ets(16:5)");
            Row.width('95%');
            Row.padding(20);
            Row.backgroundColor(Color.White);
            Row.borderRadius(15);
            Row.shadow({ radius: 6, color: '#1F000000', offsetX: 2, offsetY: 4 });
            Row.margin({ top: 5, bottom: 10 });
            Row.justifyContent(FlexAlign.SpaceEvenly);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('任务进度：');
            Text.debugLine("viewmodel/task/TaskStatistics.ets(17:7)");
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.debugLine("viewmodel/task/TaskStatistics.ets(20:7)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                value: this.finishTask,
                total: this.totalTask,
                type: ProgressType.Ring
            });
            Progress.debugLine("viewmodel/task/TaskStatistics.ets(21:9)");
            Progress.width(100);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("viewmodel/task/TaskStatistics.ets(27:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777408, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("viewmodel/task/TaskStatistics.ets(28:11)");
            Image.width(52);
            Image.height(70);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TaskStatistics.js.map