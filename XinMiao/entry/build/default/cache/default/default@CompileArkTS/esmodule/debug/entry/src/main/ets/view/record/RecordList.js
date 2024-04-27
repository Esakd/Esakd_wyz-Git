import router from '@ohos:router';
import { CommonConstants_health } from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import RecordService from '@bundle:com.example.XinMiao/entry/ets/Service/RecordService';
function __Text__grayText() {
    Text.fontSize(14);
    Text.fontColor({ "id": 16777296, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
}
export default class RecordList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__records = this.initializeConsume("records", "records");
        this.__groups = new ObservedPropertyObjectPU([], this, "groups");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("records", this.handleRecordsChange);
    }
    setInitiallyProvidedValue(params) {
        if (params.groups !== undefined) {
            this.groups = params.groups;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__groups.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__records.aboutToBeDeleted();
        this.__groups.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get records() {
        return this.__records.get();
    }
    set records(newValue) {
        this.__records.set(newValue);
    }
    get groups() {
        return this.__groups.get();
    }
    set groups(newValue) {
        this.__groups.set(newValue);
    }
    handleRecordsChange() {
        this.groups = RecordService.calculateGroupInfo(this.records);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: CommonConstants_health.SPACE_10 });
            List.width(CommonConstants_health.THOUSANDTH_940);
            List.height('100%');
            List.margin({ top: 10 });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const group = _item;
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
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create({ space: CommonConstants_health.SPACE_8 });
                            Column.width('100%');
                            Column.backgroundColor(Color.White);
                            Column.borderRadius(CommonConstants_health.DEFAULT_18);
                            Column.padding(CommonConstants_health.SPACE_12);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            // 1.分组的标题
                            Row.create({ space: CommonConstants_health.SPACE_4 });
                            // 1.分组的标题
                            Row.width('100%');
                            // 1.分组的标题
                            Row.onClick(() => {
                                router.pushUrl({
                                    url: 'pages/ItemIndex',
                                    params: { type: group.type }
                                });
                            });
                            if (!isInitialRender) {
                                // 1.分组的标题
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(group.type.icon);
                            Image.width(24);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(group.type.name);
                            Text.fontSize(18);
                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_700);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(`建议${group.type.min}~${group.type.max}千卡`);
                            __Text__grayText();
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Blank.create();
                            if (!isInitialRender) {
                                Blank.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Blank.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(group.calorie.toFixed(0));
                            Text.fontSize(14);
                            Text.fontColor({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create('千卡');
                            __Text__grayText();
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777424, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.width(20);
                            Image.fillColor({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        // 1.分组的标题
                        Row.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            // 2.组内记录列表
                            List.create();
                            // 2.组内记录列表
                            List.width('100%');
                            if (!isInitialRender) {
                                // 2.组内记录列表
                                List.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            ForEach.create();
                            const forEachItemGenFunction = _item => {
                                const item = _item;
                                {
                                    const isLazyCreate = true;
                                    const itemCreation = (elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        ListItem.create(deepRenderFunction, isLazyCreate);
                                        ListItem.swipeAction({ end: this.deleteButton.bind(this) });
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
                                            Row.create({ space: CommonConstants_health.SPACE_6 });
                                            Row.width('100%');
                                            Row.padding(CommonConstants_health.SPACE_6);
                                            if (!isInitialRender) {
                                                Row.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create(item.recordItem.image);
                                            Image.width(50);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Column.create({ space: CommonConstants_health.SPACE_4 });
                                            if (!isInitialRender) {
                                                Column.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(item.recordItem.name);
                                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_500);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.amount}${item.recordItem.unit}`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Column.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Blank.create();
                                            if (!isInitialRender) {
                                                Blank.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Blank.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.calorie.toFixed(0)}千卡`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Row.pop();
                                        ListItem.pop();
                                    };
                                    const deepRenderFunction = (elmtId, isInitialRender) => {
                                        itemCreation(elmtId, isInitialRender);
                                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Row.create({ space: CommonConstants_health.SPACE_6 });
                                            Row.width('100%');
                                            Row.padding(CommonConstants_health.SPACE_6);
                                            if (!isInitialRender) {
                                                Row.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create(item.recordItem.image);
                                            Image.width(50);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Column.create({ space: CommonConstants_health.SPACE_4 });
                                            if (!isInitialRender) {
                                                Column.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(item.recordItem.name);
                                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_500);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.amount}${item.recordItem.unit}`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Column.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Blank.create();
                                            if (!isInitialRender) {
                                                Blank.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Blank.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.calorie.toFixed(0)}千卡`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
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
                            this.forEachUpdateFunction(elmtId, group.items, forEachItemGenFunction);
                            if (!isInitialRender) {
                                ForEach.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        ForEach.pop();
                        // 2.组内记录列表
                        List.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create({ space: CommonConstants_health.SPACE_8 });
                            Column.width('100%');
                            Column.backgroundColor(Color.White);
                            Column.borderRadius(CommonConstants_health.DEFAULT_18);
                            Column.padding(CommonConstants_health.SPACE_12);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            // 1.分组的标题
                            Row.create({ space: CommonConstants_health.SPACE_4 });
                            // 1.分组的标题
                            Row.width('100%');
                            // 1.分组的标题
                            Row.onClick(() => {
                                router.pushUrl({
                                    url: 'pages/ItemIndex',
                                    params: { type: group.type }
                                });
                            });
                            if (!isInitialRender) {
                                // 1.分组的标题
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(group.type.icon);
                            Image.width(24);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(group.type.name);
                            Text.fontSize(18);
                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_700);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(`建议${group.type.min}~${group.type.max}千卡`);
                            __Text__grayText();
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Blank.create();
                            if (!isInitialRender) {
                                Blank.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Blank.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(group.calorie.toFixed(0));
                            Text.fontSize(14);
                            Text.fontColor({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create('千卡');
                            __Text__grayText();
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create({ "id": 16777424, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.width(20);
                            Image.fillColor({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        // 1.分组的标题
                        Row.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            // 2.组内记录列表
                            List.create();
                            // 2.组内记录列表
                            List.width('100%');
                            if (!isInitialRender) {
                                // 2.组内记录列表
                                List.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            ForEach.create();
                            const forEachItemGenFunction = _item => {
                                const item = _item;
                                {
                                    const isLazyCreate = true;
                                    const itemCreation = (elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        ListItem.create(deepRenderFunction, isLazyCreate);
                                        ListItem.swipeAction({ end: this.deleteButton.bind(this) });
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
                                            Row.create({ space: CommonConstants_health.SPACE_6 });
                                            Row.width('100%');
                                            Row.padding(CommonConstants_health.SPACE_6);
                                            if (!isInitialRender) {
                                                Row.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create(item.recordItem.image);
                                            Image.width(50);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Column.create({ space: CommonConstants_health.SPACE_4 });
                                            if (!isInitialRender) {
                                                Column.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(item.recordItem.name);
                                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_500);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.amount}${item.recordItem.unit}`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Column.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Blank.create();
                                            if (!isInitialRender) {
                                                Blank.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Blank.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.calorie.toFixed(0)}千卡`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Row.pop();
                                        ListItem.pop();
                                    };
                                    const deepRenderFunction = (elmtId, isInitialRender) => {
                                        itemCreation(elmtId, isInitialRender);
                                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Row.create({ space: CommonConstants_health.SPACE_6 });
                                            Row.width('100%');
                                            Row.padding(CommonConstants_health.SPACE_6);
                                            if (!isInitialRender) {
                                                Row.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create(item.recordItem.image);
                                            Image.width(50);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Column.create({ space: CommonConstants_health.SPACE_4 });
                                            if (!isInitialRender) {
                                                Column.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(item.recordItem.name);
                                            Text.fontWeight(CommonConstants_health.FONT_WEIGHT_500);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.amount}${item.recordItem.unit}`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                        Column.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Blank.create();
                                            if (!isInitialRender) {
                                                Blank.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Blank.pop();
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create(`${item.calorie.toFixed(0)}千卡`);
                                            __Text__grayText();
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
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
                            this.forEachUpdateFunction(elmtId, group.items, forEachItemGenFunction);
                            if (!isInitialRender) {
                                ForEach.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        ForEach.pop();
                        // 2.组内记录列表
                        List.pop();
                        Column.pop();
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
            this.forEachUpdateFunction(elmtId, this.groups, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
    }
    deleteButton(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777427, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.width(20);
            Image.fillColor(Color.Red);
            Image.margin(5);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=RecordList.js.map