import { Header } from '@bundle:com.example.XinMiao/entry/ets/components/CommonComponent';
class DocumentListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.index = 1;
        this.__docs = new ObservedPropertyObjectPU([], this, "docs");
        this.context = getContext(this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.docs !== undefined) {
            this.docs = params.docs;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__docs.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__docs.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get docs() {
        return this.__docs.get();
    }
    set docs(newValue) {
        this.__docs.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/ForumListPage.ets(13:5)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 10 });
            Column.debugLine("pages/ForumListPage.ets(14:7)");
            Column.width('100%');
            Column.height('100%');
            Column.padding(20);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.width('100%');
            __Common__.margin({ bottom: 20, top: 50 });
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
                    ViewPU.create(new Header(this, { title: '学习论坛' }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("pages/ForumListPage.ets(19:9)");
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('新建讨论');
            Button.debugLine("pages/ForumListPage.ets(20:9)");
            Button.onClick(() => {
                // 添加论坛页面
                this.docs.push(this.index);
                // 跳转到论坛编辑的 UIAbility
                // 跳转的目的地want
                let want = {
                    deviceId: '',
                    bundleName: 'com.example.XinMiao',
                    moduleName: 'entry',
                    abilityName: 'ForumAbility',
                    parameters: {
                        instanceKey: 'idx_' + this.index++
                    }
                };
                // 跳转
                this.context.startAbility(want);
            });
            Button.height(50);
            Button.fontSize(20);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const id = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create({ space: 10 });
                    Row.debugLine("pages/ForumListPage.ets(42:11)");
                    Row.width('100%');
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777322, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                    Image.debugLine("pages/ForumListPage.ets(43:13)");
                    Image.width(80);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(`学习交流第${id}篇`);
                    Text.debugLine("pages/ForumListPage.ets(45:13)");
                    Text.fontSize(25);
                    Text.onClick(() => {
                        // 跳转到论坛编辑的 UIAbility
                        // 跳转的目的地want
                        let want = {
                            deviceId: '',
                            bundleName: 'com.example.XinMiao',
                            moduleName: 'entry',
                            abilityName: 'ForumAbility',
                            parameters: {
                                instanceKey: 'idx_' + id
                            }
                        };
                        // 跳转
                        this.context.startAbility(want);
                    });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.docs, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new DocumentListPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ForumListPage.js.map