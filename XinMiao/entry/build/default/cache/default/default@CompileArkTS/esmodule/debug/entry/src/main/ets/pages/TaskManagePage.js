import { Header } from '@bundle:com.example.XinMiao/entry/ets/components/CommonComponent';
import TaskStatistics from '@bundle:com.example.XinMiao/entry/ets/viewmodel/task/TaskStatistics';
import TaskList from '@bundle:com.example.XinMiao/entry/ets/viewmodel/task/TaskList';
class TaskManagePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__totalTask = new ObservedPropertySimplePU(0, this, "totalTask");
        this.__finishTask = new ObservedPropertySimplePU(0, this, "finishTask");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.totalTask !== undefined) {
            this.totalTask = params.totalTask;
        }
        if (params.finishTask !== undefined) {
            this.finishTask = params.finishTask;
        }
    }
    updateStateVars(params) {
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
            Column.create({ space: 10 });
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F2F3');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.width('90%');
            __Common__.margin({ bottom: 5, top: 70 });
            __Common__.height(30);
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new Header(this, { title: "新苗大行动" }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 任务进度卡片
                    TaskStatistics(this, { totalTask: this.totalTask, finishTask: this.finishTask }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        totalTask: this.totalTask, finishTask: this.finishTask
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
                    // 任务列表
                    TaskList(this, { totalTask: this.__totalTask, finishTask: this.__finishTask }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new TaskManagePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=TaskManagePage.js.map