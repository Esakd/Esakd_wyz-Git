import { Header } from '@bundle:com.example.XinMiao/entry/ets/components/CommonComponent';
class Task {
    constructor() {
        this.name = '任务' + String(Task.id++) + ':';
        this.finished = false;
    }
}
Task.id = 1; //static为类内部共享的变量
function __Text__finishedTask() {
    Text.decoration({ type: TextDecorationType.LineThrough });
    Text.fontColor('#B1B2B1');
}
//任务统计信息
class StatInfo {
    constructor() {
        this.totalTask = 0;
        this.finishTask = 0;
    }
}
class PropPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__stat = new ObservedPropertyObjectPU(new StatInfo() //@provide @co nsume
        , this, "stat");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.stat !== undefined) {
            this.stat = params.stat;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__stat.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__stat.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get stat() {
        return this.__stat.get();
    }
    set stat(newValue) {
        this.__stat.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 10 });
            Column.debugLine("pages/MissionPage.ets(37:5)");
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
                    ViewPU.create(new Header(this, { title: '新苗大行动' }, undefined, elmtId));
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
                    ViewPU.create(new TaskST(this, { finishTask: this.stat.finishTask, totalTask: this.stat.totalTask }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        finishTask: this.stat.finishTask, totalTask: this.stat.totalTask
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
                    //link能引用对象，prop不行
                    TaskList(this, { stat: this.__stat }, undefined, elmtId));
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
class TaskST extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__finishTask = new SynchedPropertySimpleOneWayPU(params.finishTask, this, "finishTask");
        this.__totalTask = new SynchedPropertySimpleOneWayPU(params.totalTask, this, "totalTask");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
        this.__finishTask.reset(params.finishTask);
        this.__totalTask.reset(params.totalTask);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__finishTask.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTask.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__finishTask.aboutToBeDeleted();
        this.__totalTask.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get finishTask() {
        return this.__finishTask.get();
    }
    set finishTask(newValue) {
        this.__finishTask.set(newValue);
    }
    get totalTask() {
        return this.__totalTask.get();
    }
    set totalTask(newValue) {
        this.__totalTask.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MissionPage.ets(61:5)");
            Row.width('95%');
            Row.padding(20);
            Row.backgroundColor(Color.White);
            Row.borderRadius(15);
            Row.shadow({ radius: 6, color: '#1F000000', offsetX: 2, offsetY: 4 });
            Row.margin({ top: 20, bottom: 10 });
            Row.justifyContent(FlexAlign.SpaceEvenly);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('任务列表');
            Text.debugLine("pages/MissionPage.ets(62:7)");
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
            Stack.debugLine("pages/MissionPage.ets(65:7)");
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
            Progress.debugLine("pages/MissionPage.ets(66:9)");
            Progress.width(80);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MissionPage.ets(72:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.finishTask.toString());
            Text.debugLine("pages/MissionPage.ets(73:11)");
            Text.fontSize(24);
            Text.fontColor('#36D');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(' / ' + this.totalTask.toString());
            Text.debugLine("pages/MissionPage.ets(76:11)");
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TaskList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__stat = new SynchedPropertyObjectTwoWayPU(params.stat, this, "stat");
        this.__tasks = new ObservedPropertyObjectPU([], this, "tasks");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tasks !== undefined) {
            this.tasks = params.tasks;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__stat.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__stat.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get stat() {
        return this.__stat.get();
    }
    set stat(newValue) {
        this.__stat.set(newValue);
    }
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue) {
        this.__tasks.set(newValue);
    }
    handleTaskChange() {
        // 更新任务总数量
        this.stat.totalTask = this.tasks.length;
        // 更新已完成任务数量
        this.stat.finishTask = this.tasks.filter(mission => mission.finished).length;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MissionPage.ets(102:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('新增学习任务');
            Button.debugLine("pages/MissionPage.ets(103:7)");
            Button.width(200);
            Button.margin({ bottom: 15 });
            Button.onClick(() => {
                this.tasks.push(new Task());
                this.handleTaskChange();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 10 });
            List.debugLine("pages/MissionPage.ets(110:7)");
            List.layoutWeight(1);
            List.width('100%');
            List.alignListItem(ListItemAlign.Center);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const mission = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.swipeAction({ end: this.DeleteButton.bind(this, index) });
                        ListItem.debugLine("pages/MissionPage.ets(114:13)");
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
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("pages/MissionPage.ets(115:15)");
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
                            Text.create(mission.name);
                            Text.debugLine("pages/MissionPage.ets(116:17)");
                            Text.fontSize(18);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            TextInput.create({
                                placeholder: { "id": 16777369, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } //text:
                            });
                            TextInput.debugLine("pages/MissionPage.ets(118:17)");
                            TextInput.type(InputType.Normal);
                            TextInput.onChange(value => {
                                mission.plan = value;
                            });
                            TextInput.width(200);
                            if (!isInitialRender) {
                                TextInput.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Checkbox.create();
                            Checkbox.debugLine("pages/MissionPage.ets(126:17)");
                            Checkbox.select(mission.finished);
                            Checkbox.onChange(val => {
                                // 更新当前任务的状态
                                mission.finished = val;
                                // 更新已完成任务数量
                                this.handleTaskChange();
                            });
                            if (!isInitialRender) {
                                Checkbox.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Checkbox.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("pages/MissionPage.ets(115:15)");
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
                            Text.create(mission.name);
                            Text.debugLine("pages/MissionPage.ets(116:17)");
                            Text.fontSize(18);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            TextInput.create({
                                placeholder: { "id": 16777369, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } //text:
                            });
                            TextInput.debugLine("pages/MissionPage.ets(118:17)");
                            TextInput.type(InputType.Normal);
                            TextInput.onChange(value => {
                                mission.plan = value;
                            });
                            TextInput.width(200);
                            if (!isInitialRender) {
                                TextInput.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Checkbox.create();
                            Checkbox.debugLine("pages/MissionPage.ets(126:17)");
                            Checkbox.select(mission.finished);
                            Checkbox.onChange(val => {
                                // 更新当前任务的状态
                                mission.finished = val;
                                // 更新已完成任务数量
                                this.handleTaskChange();
                            });
                            if (!isInitialRender) {
                                Checkbox.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Checkbox.pop();
                        Row.pop();
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
        List.pop();
        Column.pop();
    }
    DeleteButton(index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild();
            Button.debugLine("pages/MissionPage.ets(148:5)");
            Button.width(40);
            Button.height(40);
            Button.type(ButtonType.Circle);
            Button.backgroundColor(Color.Red);
            Button.margin(7);
            Button.onClick(() => {
                this.tasks.splice(index, 1);
                this.handleTaskChange();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/MissionPage.ets(149:7)");
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
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new PropPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MissionPage.js.map