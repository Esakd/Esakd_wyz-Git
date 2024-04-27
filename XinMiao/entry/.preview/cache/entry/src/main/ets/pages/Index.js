"use strict";
class point {
    constructor(pointX, pointY, appearance) {
        this.pointX = pointX;
        this.pointY = pointY;
        this.appearance = appearance;
    }
}
function PointAppearance(point, parent = null) {
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Row.create();
        Row.debugLine("pages/Index.ets(14:3)");
        if (!isInitialRender) {
            Row.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Image.create({ "id": 16777325, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
        Image.debugLine("pages/Index.ets(15:5)");
        Image.position({ x: point.pointX, y: point.pointY });
        Image.width(28.8);
        Image.height(20);
        if (!isInitialRender) {
            Image.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Row.pop();
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__points = new ObservedPropertyObjectPU([{ pointX: 50, pointY: 90, appearance: false },
            { pointX: 30, pointY: 70, appearance: false },
            { pointX: 52, pointY: 53, appearance: false }], this, "points");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.points !== undefined) {
            this.points = params.points;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__points.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__points.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get points() {
        return this.__points.get();
    }
    set points(newValue) {
        this.__points.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Index.ets(32:5)");
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Index.ets(33:7)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message);
            Text.debugLine("pages/Index.ets(34:9)");
            Text.fontSize(50);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const point = _item;
                PointAppearance.bind(this)(point);
            };
            this.forEachUpdateFunction(elmtId, this.points, forEachItemGenFunction);
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
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map