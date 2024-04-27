class student {
    constructor(logo, name, image, age, score, medal) {
        this.logo = logo;
        this.name = name;
        this.image = image;
        this.age = age;
        this.score = score;
        this.medal = medal;
    }
}
class medal {
    constructor(image) {
        this.image = image;
    }
}
import { Header } from '@bundle:com.example.XinMiao/entry/ets/components/CommonComponent';
//全局自定义构建函数
function StudentCard(student, parent = null) {
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Row.create({ space: 10 });
        Row.width('100%');
        Row.backgroundColor('#FFF');
        Row.borderRadius(20);
        Row.height(120);
        Row.padding(10);
        if (!isInitialRender) {
            Row.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Image.create(student.image);
        Image.width(100);
        Image.interpolation(ImageInterpolation.High);
        Image.borderRadius(15);
        if (!isInitialRender) {
            Image.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Column.create({ space: 5 });
        if (!isInitialRender) {
            Column.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Image.create(student.medal);
        Image.width(62);
        Image.height(80);
        if (!isInitialRender) {
            Image.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Column.pop();
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Column.create({ space: 4 });
        Column.height('100%');
        Column.margin({ left: 10 });
        Column.alignItems(HorizontalAlign.Start);
        Column.justifyContent(FlexAlign.Center);
        if (!isInitialRender) {
            Column.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create(student.logo + 'Top' + String(this.medalx++));
        Text.fontSize(18);
        Text.fontWeight(FontWeight.Bold);
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create(student.name);
        __Text__nameText();
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create('积分:' + String(student.age));
        __Text__ageText();
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create('任务完成度:' + String(student.score));
        Text.fontSize(18);
        Text.fontColor('#36D');
        Text.height(20);
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
    Column.pop();
    Row.pop();
}
//继承模式,只能写在全局
function __Text__ageText() {
    Text.fontColor('#36D');
    Text.fontSize(18);
}
function __Text__nameText() {
    Text.fontColor('#36D');
    Text.fontSize(18);
    Text.margin(1);
}
class CycleControl extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.students = [
            new student('新苗同学', '田同学', { "id": 16777467, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 72, 36, { "id": 16777474, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new student('新苗同学', '常同学', { "id": 16777468, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 66, 33, { "id": 16777475, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new student('新苗同学', '李同学', { "id": 16777469, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 50, 25, { "id": 16777476, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new student('新苗同学', '黄同学', { "id": 16777470, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 45, 21),
            new student('新苗同学', '张同学', { "id": 16777471, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 30, 15),
            new student('新苗同学', '秋同学', { "id": 16777467, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 26, 13),
            new student('新苗同学', '高同学', { "id": 16777468, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 24, 24),
            new student('新苗同学', '杜同学', { "id": 16777469, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 12, 6),
            new student('新苗同学', '秋同学', { "id": 16777470, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 10, 12),
            new student('新苗同学', '黄同学', { "id": 16777471, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 4, 2),
        ];
        this.medal = [
            new medal({ "id": 16777474, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new medal({ "id": 16777475, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new medal({ "id": 16777476, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
        ];
        this.medalx = 1;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.students !== undefined) {
            this.students = params.students;
        }
        if (params.medal !== undefined) {
            this.medal = params.medal;
        }
        if (params.medalx !== undefined) {
            this.medalx = params.medalx;
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
    // @State message: string = 'Hello XinMiao' @State状态变量(签到)
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 8 });
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#EFEFEF');
            Column.padding(15);
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
                    ViewPU.create(new Header(this, { title: '新苗同学Top10' }, undefined, elmtId));
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
            List.create({ space: 8 });
            List.width('100%');
            List.layoutWeight(1);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const student = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
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
                        StudentCard.bind(this)(student);
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        StudentCard.bind(this)(student);
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
            this.forEachUpdateFunction(elmtId, this.students, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new CycleControl(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=CycleControl.js.map