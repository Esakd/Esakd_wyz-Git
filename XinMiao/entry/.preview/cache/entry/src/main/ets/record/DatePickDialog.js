export default class DatePickDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.controller = undefined;
        this.selectedDate = new Date();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.selectedDate !== undefined) {
            this.selectedDate = params.selectedDate;
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
            Column.create({ space: 12 });
            Column.debugLine("record/DatePickDialog.ets(6:5)");
            Column.padding(12);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 1.日期选择器
            DatePicker.create({
                start: new Date('2020-01-01'),
                end: new Date(),
                selected: this.selectedDate
            });
            DatePicker.debugLine("record/DatePickDialog.ets(8:7)");
            // 1.日期选择器
            DatePicker.onChange((value) => {
                this.selectedDate.setFullYear(value.year, value.month, value.day);
            });
            if (!isInitialRender) {
                // 1.日期选择器
                DatePicker.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 1.日期选择器
        DatePicker.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 2.按钮
            Row.create({ space: 12 });
            Row.debugLine("record/DatePickDialog.ets(17:7)");
            if (!isInitialRender) {
                // 2.按钮
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('取消');
            Button.debugLine("record/DatePickDialog.ets(18:9)");
            Button.width(120);
            Button.backgroundColor({ "id": 16777229, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.onClick(() => this.controller.close());
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('确定');
            Button.debugLine("record/DatePickDialog.ets(22:9)");
            Button.width(120);
            Button.backgroundColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Button.onClick(() => {
                // 1.保存日期到全局存储
                AppStorage.SetOrCreate('selectedDate', this.selectedDate.getTime());
                // 2.关闭窗口
                this.controller.close();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        // 2.按钮
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=DatePickDialog.js.map