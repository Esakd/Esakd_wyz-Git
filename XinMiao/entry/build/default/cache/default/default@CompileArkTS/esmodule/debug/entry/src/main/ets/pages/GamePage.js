import router from '@ohos:router';
import curves from '@native:ohos.curves';
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
        if (!isInitialRender) {
            Row.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        If.create();
        if (!point.appearance) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777456, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                    Image.position({ x: point.pointX, y: point.pointY });
                    Image.width(28.8);
                    Image.height(20);
                    Image.onAreaChange(() => {
                        point.appearance = true;
                    });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            });
        }
        else {
            If.branchId(1);
        }
        if (!isInitialRender) {
            If.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    If.pop();
    Row.pop();
}
class AnimationPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__ballX = new ObservedPropertySimplePU(200, this, "ballX");
        this.__ballY = new ObservedPropertySimplePU(400, this, "ballY");
        this.__angle = new ObservedPropertySimplePU(0, this, "angle");
        this.__src = new ObservedPropertyObjectPU({ "id": 16777371, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, this, "src");
        this.__isBegin = new ObservedPropertySimplePU(false, this, "isBegin");
        this.__points = new ObservedPropertyObjectPU([{ pointX: 200, pointY: 180, appearance: false },
            { pointX: 60, pointY: 330, appearance: false },
            { pointX: 300, pointY: 400, appearance: false }], this, "points");
        this.__isEntry = new ObservedPropertySimplePU(true, this, "isEntry");
        this.centerX = 120;
        this.centerY = 500;
        this.maxRadius = 100;
        this.radius = 20;
        this.netX = 100;
        this.netY = 20;
        this.__positionX = new ObservedPropertySimplePU(120, this, "positionX");
        this.__positionY = new ObservedPropertySimplePU(500, this, "positionY");
        this.sin = 0;
        this.cos = 0;
        this.speed = 0;
        this.taskId = -1;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.ballX !== undefined) {
            this.ballX = params.ballX;
        }
        if (params.ballY !== undefined) {
            this.ballY = params.ballY;
        }
        if (params.angle !== undefined) {
            this.angle = params.angle;
        }
        if (params.src !== undefined) {
            this.src = params.src;
        }
        if (params.isBegin !== undefined) {
            this.isBegin = params.isBegin;
        }
        if (params.points !== undefined) {
            this.points = params.points;
        }
        if (params.isEntry !== undefined) {
            this.isEntry = params.isEntry;
        }
        if (params.centerX !== undefined) {
            this.centerX = params.centerX;
        }
        if (params.centerY !== undefined) {
            this.centerY = params.centerY;
        }
        if (params.maxRadius !== undefined) {
            this.maxRadius = params.maxRadius;
        }
        if (params.radius !== undefined) {
            this.radius = params.radius;
        }
        if (params.netX !== undefined) {
            this.netX = params.netX;
        }
        if (params.netY !== undefined) {
            this.netY = params.netY;
        }
        if (params.positionX !== undefined) {
            this.positionX = params.positionX;
        }
        if (params.positionY !== undefined) {
            this.positionY = params.positionY;
        }
        if (params.sin !== undefined) {
            this.sin = params.sin;
        }
        if (params.cos !== undefined) {
            this.cos = params.cos;
        }
        if (params.speed !== undefined) {
            this.speed = params.speed;
        }
        if (params.taskId !== undefined) {
            this.taskId = params.taskId;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__ballX.purgeDependencyOnElmtId(rmElmtId);
        this.__ballY.purgeDependencyOnElmtId(rmElmtId);
        this.__angle.purgeDependencyOnElmtId(rmElmtId);
        this.__src.purgeDependencyOnElmtId(rmElmtId);
        this.__isBegin.purgeDependencyOnElmtId(rmElmtId);
        this.__points.purgeDependencyOnElmtId(rmElmtId);
        this.__isEntry.purgeDependencyOnElmtId(rmElmtId);
        this.__positionX.purgeDependencyOnElmtId(rmElmtId);
        this.__positionY.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__ballX.aboutToBeDeleted();
        this.__ballY.aboutToBeDeleted();
        this.__angle.aboutToBeDeleted();
        this.__src.aboutToBeDeleted();
        this.__isBegin.aboutToBeDeleted();
        this.__points.aboutToBeDeleted();
        this.__isEntry.aboutToBeDeleted();
        this.__positionX.aboutToBeDeleted();
        this.__positionY.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get ballX() {
        return this.__ballX.get();
    }
    set ballX(newValue) {
        this.__ballX.set(newValue);
    }
    get ballY() {
        return this.__ballY.get();
    }
    set ballY(newValue) {
        this.__ballY.set(newValue);
    }
    get angle() {
        return this.__angle.get();
    }
    set angle(newValue) {
        this.__angle.set(newValue);
    }
    get src() {
        return this.__src.get();
    }
    set src(newValue) {
        this.__src.set(newValue);
    }
    get isBegin() {
        return this.__isBegin.get();
    }
    set isBegin(newValue) {
        this.__isBegin.set(newValue);
    }
    get points() {
        return this.__points.get();
    }
    set points(newValue) {
        this.__points.set(newValue);
    }
    get isEntry() {
        return this.__isEntry.get();
    }
    set isEntry(newValue) {
        this.__isEntry.set(newValue);
    }
    get positionX() {
        return this.__positionX.get();
    }
    set positionX(newValue) {
        this.__positionX.set(newValue);
    }
    get positionY() {
        return this.__positionY.get();
    }
    set positionY(newValue) {
        this.__positionY.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('100%');
            Row.width('100%');
            Row.backgroundImage({ "id": 16777386, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Row.backgroundImageSize({ height: '105%', width: '100%' });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.height('100%');
            Stack.width('100%');
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('返回');
            Button.position({ x: 0, y: 0 });
            Button.backgroundColor('#20101010');
            Button.onClick(() => {
                // 返回上一页
                router.back();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (!this.isEntry) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create('恭喜你, 球进了！');
                        Text.fontColor('#00FF80 ');
                        Text.fontSize(40);
                        Text.position({ x: 82, y: 200 });
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (!this.isBegin) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        // 开始按钮
                        Button.createWithLabel('开始游戏');
                        // 开始按钮
                        Button.onClick(() => {
                            Context.animateTo({ duration: 1000 }, () => {
                                this.isBegin = true;
                            });
                        });
                        if (!isInitialRender) {
                            // 开始按钮
                            Button.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    // 开始按钮
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create(this.src);
                        Image.position({ x: this.ballX - 20, y: this.ballY - 20 });
                        Image.rotate({ angle: this.angle, centerX: '50%', centerY: '50%' });
                        Image.width(40);
                        Image.height(40);
                        Image.transition({
                            type: TransitionType.Insert,
                            opacity: 0,
                            translate: { x: -250 }
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777372, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        Image.position({ x: this.netX, y: this.netY });
                        Image.width(200);
                        Image.height(150);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
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
            // 摇杆
            Row.create();
            // 摇杆
            Row.height(600);
            // 摇杆
            Row.width(150);
            // 摇杆
            Row.justifyContent(FlexAlign.End);
            // 摇杆
            Row.position({ x: 0, y: 120 });
            // 摇杆
            Row.onTouch(this.handleTouchEvent.bind(this));
            if (!isInitialRender) {
                // 摇杆
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Circle.create({ width: this.maxRadius * 2, height: this.maxRadius * 2 });
            Circle.fill('#20101010');
            Circle.position({ x: this.centerX - this.maxRadius, y: this.centerY - this.maxRadius });
            if (!isInitialRender) {
                Circle.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Circle.create({ width: this.radius * 2, height: this.radius * 2 });
            Circle.fill('#403A3A3A');
            Circle.position({ x: this.positionX - this.radius, y: this.positionY - this.radius });
            if (!isInitialRender) {
                Circle.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 摇杆
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const point = _item;
                PointAppearance.bind(this)(point);
            };
            this.forEachUpdateFunction(elmtId, this.points, forEachItemGenFunction, undefined, true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Row.pop();
        Stack.pop();
        Row.pop();
    }
    // 手指移动事件
    handleTouchEvent(event) {
        switch (event.type) {
            case TouchType.Up:
                // 还原速度
                this.speed = 0;
                // 取消定时任务
                clearInterval(this.taskId);
                // 还原摇杆小球的坐标
                Context.animateTo({ curve: curves.springMotion() }, () => {
                    this.positionX = this.centerX;
                    this.positionY = this.centerY;
                    this.angle = 0;
                    if (this.ballY <= 100) {
                        this.isEntry = false;
                    }
                });
                break;
            case TouchType.Down:
                // 开始定时任务
                this.taskId = setInterval(() => {
                    this.ballX += this.speed * this.cos;
                    this.ballY += this.speed * this.sin;
                    if (this.ballY <= 100) {
                        this.isEntry = false;
                    }
                }, 40);
                break;
            case TouchType.Move:
                // 1.获取手指位置坐标
                let x = event.touches[0].x;
                let y = event.touches[0].y;
                // 2.计算手指与中心点的坐标差值
                let vx = x - this.centerX;
                let vy = y - this.centerY;
                // 3.计算手指与中心点连线和x轴正半轴的夹角，单位是弧度
                let angle = Math.atan2(vy, vx);
                // 4.计算手指与中心点的距离
                let distance = this.getDistance(vx, vy);
                this.sin = Math.sin(angle);
                this.cos = Math.cos(angle);
                Context.animateTo({ curve: curves.responsiveSpringMotion() }, () => {
                    // 5.计算摇杆小球的坐标
                    this.positionX = this.centerX + distance * this.cos;
                    this.positionY = this.centerY + distance * this.sin;
                    // 6.修改小球的角度
                    if (Math.abs(angle * 2) < Math.PI) {
                        this.src = { "id": 16777371, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" };
                    }
                    else {
                        this.src = { "id": 16777371, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" };
                        angle = angle < 0 ? angle + Math.PI : angle - Math.PI;
                    }
                    this.angle = angle * 180 / Math.PI;
                    this.speed = 5;
                });
                break;
        }
    }
    getDistance(x, y) {
        let d = Math.sqrt(x * x + y * y);
        return Math.min(d, this.maxRadius);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new AnimationPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=GamePage.js.map