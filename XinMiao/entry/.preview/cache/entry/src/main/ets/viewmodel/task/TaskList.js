import TaskInfo from '@bundle:com.example.XinMiao/entry/ets/viewmodel/TaskInfo';
import TaskItem from '@bundle:com.example.XinMiao/entry/ets/viewmodel/task/TaskItem';
import TaskModel from '@bundle:com.example.XinMiao/entry/ets/model/TaskModel';
export default class TaskList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__totalTask = new SynchedPropertySimpleTwoWayPU(params.totalTask, this, "totalTask");
        this.__finishTask = new SynchedPropertySimpleTwoWayPU(params.finishTask, this, "finishTask");
        this.__tasks = new ObservedPropertyObjectPU([], this, "tasks");
        this.idx = 1;
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new TaskInfoDialog(this, { onTaskConfirm: this.handleAddTask.bind(this) });
                jsDialog.setController(this.
                // 任务信息弹窗
                dialogController);
                ViewPU.create(jsDialog);
            }
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tasks !== undefined) {
            this.tasks = params.tasks;
        }
        if (params.idx !== undefined) {
            this.idx = params.idx;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__totalTask.purgeDependencyOnElmtId(rmElmtId);
        this.__finishTask.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__totalTask.aboutToBeDeleted();
        this.__finishTask.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
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
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue) {
        this.__tasks.set(newValue);
    }
    aboutToAppear() {
        // 查询
        console.log('testTag', '初始化组件，查询任务列表');
        TaskModel.getTaskList()
            .then(tasks => {
            this.tasks = tasks;
            this.handleTaskChange();
        });
    }
    handleTaskChange() {
        this.totalTask = this.tasks.length;
        this.finishTask = this.tasks.filter(item => item.finished).length;
    }
    handleAddTask(name) {
        // 新增任务
        TaskModel.addTask(name)
            .then(id => {
            console.log('testTag', '处理新增任务: ', name);
            this.tasks.push(new TaskInfo(id, name));
            // 更新
            this.handleTaskChange();
            this.dialogController.close();
        })
            .catch(error => console.log('testTag', '新增任务失败：', name, JSON.stringify(error)));
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("viewmodel/task/TaskList.ets(49:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('新增学习任务');
            Button.debugLine("viewmodel/task/TaskList.ets(50:7)");
            Button.width(200);
            Button.margin({ bottom: 10 });
            Button.onClick(() => {
                this.dialogController.open();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 任务列表
            List.create({ space: 10 });
            List.debugLine("viewmodel/task/TaskList.ets(58:7)");
            // 任务列表
            List.width('100%');
            // 任务列表
            List.layoutWeight(1);
            // 任务列表
            List.alignListItem(ListItemAlign.Center);
            if (!isInitialRender) {
                // 任务列表
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.swipeAction({ end: this.DeleteButton.bind(this, index, item.id) });
                        ListItem.debugLine("viewmodel/task/TaskList.ets(62:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new TaskItem(this, { item: item, onTaskChange: this.handleTaskChange.bind(this) }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        item: item
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new TaskItem(this, { item: item, onTaskChange: this.handleTaskChange.bind(this) }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        item: item
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.tasks, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 任务列表
        List.pop();
        Column.pop();
    }
    DeleteButton(index, id, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild();
            Button.debugLine("viewmodel/task/TaskList.ets(76:5)");
            Button.width(40);
            Button.height(40);
            Button.type(ButtonType.Circle);
            Button.backgroundColor(Color.Red);
            Button.margin(5);
            Button.onClick(() => {
                // 删除任务
                TaskModel.deleteTaskById(id)
                    .then(() => {
                    this.tasks.splice(index, 1);
                    console.log('testTag', `尝试删除任务，index: ${index}`);
                })
                    .catch(error => console.log('testTag', '删除任务失败，id = ', id, JSON.stringify(error)));
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("viewmodel/task/TaskList.ets(77:7)");
            Image.fillColor(Color.White);
            Image.width(20);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TaskInfoDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.name = '';
        this.onTaskConfirm = undefined;
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.onTaskConfirm !== undefined) {
            this.onTaskConfirm = params.onTaskConfirm;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 20 });
            Column.debugLine("viewmodel/task/TaskList.ets(107:5)");
            Column.width('100%');
            Column.padding(20);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '请确定学习任务' });
            TextInput.debugLine("viewmodel/task/TaskList.ets(108:7)");
            TextInput.onChange(val => this.name = val);
            TextInput.height(60);
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("viewmodel/task/TaskList.ets(111:7)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceEvenly);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('确定');
            Button.debugLine("viewmodel/task/TaskList.ets(112:9)");
            Button.onClick(() => {
                this.onTaskConfirm(this.name);
            });
            Button.width(80);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('取消');
            Button.debugLine("viewmodel/task/TaskList.ets(117:9)");
            Button.backgroundColor(Color.Grey);
            Button.onClick(() => {
                this.controller.close();
            });
            Button.width(80);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TaskList.js.map