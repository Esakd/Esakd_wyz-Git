import TaskModel from '@bundle:com.example.XinMiao/entry/ets/model/TaskModel';
export default class TaskItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__item = new SynchedPropertyNesedObjectPU(params.item, this, "item");
        this.onTaskChange = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        this.__item.set(params.item);
        if (params.onTaskChange !== undefined) {
            this.onTaskChange = params.onTaskChange;
        }
    }
    updateStateVars(params) {
        this.__item.set(params.item);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__item.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__item.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get item() {
        return this.__item.get();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("viewmodel/task/TaskItem.ets(10:5)");
            Row.width('95%');
            Row.padding(20);
            Row.backgroundColor(Color.White);
            Row.borderRadius(15);
            Row.shadow({ radius: 6, color: '#1F000000', offsetX: 2, offsetY: 4 });
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.item.finished) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create(this.item.name);
                        Text.debugLine("viewmodel/task/TaskItem.ets(12:9)");
                        __Text__finishedTask();
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
                        Text.create(this.item.name);
                        Text.debugLine("viewmodel/task/TaskItem.ets(15:9)");
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
            Checkbox.create();
            Checkbox.debugLine("viewmodel/task/TaskItem.ets(17:7)");
            Checkbox.select(this.item.finished);
            Checkbox.onChange(async (val) => {
                // 1.更新当前任务状态
                TaskModel.updateTaskStatus(this.item.id, val)
                    .then(() => {
                    this.item.finished = val;
                    // 2.更新已完成任务数量
                    this.onTaskChange(ObservedObject.GetRawObject(this.item));
                })
                    .catch(error => console.log('testTag', '更新任务状态失败, id = ', this.item.id, JSON.stringify(error)));
            });
            if (!isInitialRender) {
                Checkbox.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Checkbox.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Text__finishedTask() {
    Text.decoration({ type: TextDecorationType.LineThrough });
    Text.fontColor('#B1B2B1');
}
//# sourceMappingURL=TaskItem.js.map