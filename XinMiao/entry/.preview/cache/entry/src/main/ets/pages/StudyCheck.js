import router from '@ohos:router';
import { Header } from '@bundle:com.example.XinMiao/entry/ets/components/CommonComponent';
import Request_Permission_From_Users from '@bundle:com.example.XinMiao/entry/ets/Service/Applicant';
import { Get_Geo_Data } from '@bundle:com.example.XinMiao/entry/ets/Service/Geo';
import { MediaBean } from '@bundle:com.example.XinMiao/entry/ets/common/bean/MediaBean';
import { MediaHelper } from '@bundle:com.example.XinMiao/entry/ets/helper/MediaHelper';
class StudyCheck extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__mediaBean = new ObservedPropertyObjectPU(new MediaBean(), this, "mediaBean");
        this.mediaHelper = new MediaHelper(getContext());
        this.context = getContext(this);
        this.title = '地理信息面板';
        this.__Geo_Info = new ObservedPropertySimplePU(''
        //用于存储用户是否授权的状态信息
        , this, "Geo_Info");
        this.__ifAccessible = new ObservedPropertySimplePU(false
        /**
         * 签到
         */
        , this, "ifAccessible");
        this.__message = new ObservedPropertySimplePU('欢迎, 新苗同学', this, "message");
        this.__checkMsg = new ObservedPropertySimplePU('点击签到', this, "checkMsg");
        this.__isGame = new ObservedPropertySimplePU(false, this, "isGame");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.mediaBean !== undefined) {
            this.mediaBean = params.mediaBean;
        }
        if (params.mediaHelper !== undefined) {
            this.mediaHelper = params.mediaHelper;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.Geo_Info !== undefined) {
            this.Geo_Info = params.Geo_Info;
        }
        if (params.ifAccessible !== undefined) {
            this.ifAccessible = params.ifAccessible;
        }
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.checkMsg !== undefined) {
            this.checkMsg = params.checkMsg;
        }
        if (params.isGame !== undefined) {
            this.isGame = params.isGame;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__mediaBean.purgeDependencyOnElmtId(rmElmtId);
        this.__Geo_Info.purgeDependencyOnElmtId(rmElmtId);
        this.__ifAccessible.purgeDependencyOnElmtId(rmElmtId);
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__checkMsg.purgeDependencyOnElmtId(rmElmtId);
        this.__isGame.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__mediaBean.aboutToBeDeleted();
        this.__Geo_Info.aboutToBeDeleted();
        this.__ifAccessible.aboutToBeDeleted();
        this.__message.aboutToBeDeleted();
        this.__checkMsg.aboutToBeDeleted();
        this.__isGame.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get mediaBean() {
        return this.__mediaBean.get();
    }
    set mediaBean(newValue) {
        this.__mediaBean.set(newValue);
    }
    //编写异步方法,调用之前已写好的模块文件Applicant
    async apply() {
        let res = await Request_Permission_From_Users(this.context);
        this.ifAccessible = res;
    }
    //编写异步方法，调用之前已写好的模块文件Geo
    async update_geo_data() {
        //判断是否获取所需权限
        if (!this.ifAccessible) {
            return;
        }
        let info = await Get_Geo_Data();
        this.Geo_Info = '\n图片信息已上传\n\n---地理信息---\n' + '\n当前所在城市:' + info.cityName + '\n纬度: ' + info.position_x + '\n经度: ' + info.position_y + '\n海拔: ' + info.position_z + '\n速度: ' + info.speed + ' m/s\n';
        if (!info.isFinished)
            this.Geo_Info += '\n错误信息: ' + info.error;
    }
    aboutToAppear() {
        this.apply();
        this.update_geo_data();
    }
    get Geo_Info() {
        return this.__Geo_Info.get();
    }
    set Geo_Info(newValue) {
        this.__Geo_Info.set(newValue);
    }
    get ifAccessible() {
        return this.__ifAccessible.get();
    }
    set ifAccessible(newValue) {
        this.__ifAccessible.set(newValue);
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get checkMsg() {
        return this.__checkMsg.get();
    }
    set checkMsg(newValue) {
        this.__checkMsg.set(newValue);
    }
    get isGame() {
        return this.__isGame.get();
    }
    set isGame(newValue) {
        this.__isGame.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/StudyCheck.ets(65:5)");
            Column.width('100%');
            Column.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.width('90%');
            __Common__.margin({ top: 60, bottom: 50 });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new Header(this, { title: '学习签到' }, undefined, elmtId));
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
            Text.create(this.message);
            Text.debugLine("pages/StudyCheck.ets(69:7)");
            Text.height(100);
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
            Text.create('快来进行今天的打卡吧!');
            Text.debugLine("pages/StudyCheck.ets(73:7)");
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
            Image.create({ "id": 16777272, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Image.debugLine("pages/StudyCheck.ets(76:7)");
            Image.height(200);
            Image.width(350);
            Image.margin({ top: 30, bottom: 30 });
            Image.borderRadius(10);
            Image.interpolation(ImageInterpolation.High);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create(50);
            Blank.debugLine("pages/StudyCheck.ets(82:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.checkMsg);
            Button.debugLine("pages/StudyCheck.ets(83:7)");
            Button.type(ButtonType.Capsule);
            Button.height(60);
            Button.width(150);
            Button.onClick(() => {
                this.update_geo_data();
                this.checkMsg = '打卡成功!';
                if (!this.isGame) {
                    this.handleClick(MediaOption.Picture);
                    AlertDialog.show({
                        title: '学习签到打卡',
                        message: '签到成功!   学习积分 + 1' + this.Geo_Info,
                        autoCancel: true,
                        alignment: DialogAlignment.Center,
                        primaryButton: {
                            value: '确定',
                            action: () => { }
                        }
                    });
                }
                else {
                    this.update_geo_data();
                    AlertDialog.show({
                        title: '学习签到打卡',
                        message: '今日已签到打卡,请明天再来吧!' + this.Geo_Info,
                        autoCancel: true,
                        alignment: DialogAlignment.Center,
                        primaryButton: {
                            value: '确定',
                            action: () => { }
                        }
                    });
                }
                this.isGame = true;
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('开始小游戏');
            Button.debugLine("pages/StudyCheck.ets(116:7)");
            Button.type(ButtonType.Capsule);
            Button.height(60);
            Button.width(150);
            Button.onClick(() => {
                if (this.isGame) {
                    router.pushUrl({
                        url: 'pages/GamePage'
                    }, router.RouterMode.Single, Error => {
                        if (Error) {
                            console.log('路由失败,errCode:' + Error.code + ' errMsg:' + Error.message);
                        }
                    });
                }
                else {
                    AlertDialog.show({
                        title: '开始小游戏',
                        message: '请先完成学习签到打卡任务',
                        autoCancel: true,
                        alignment: DialogAlignment.Center,
                        primaryButton: {
                            value: '确定',
                            action: () => { }
                        }
                    });
                }
            });
            Button.margin({ top: 50 });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    async handleClick(option) {
        let mediaBean;
        switch (option) {
            case MediaOption.Picture:
                mediaBean = await this.mediaHelper.selectPicture();
                break;
            case MediaOption.File:
                mediaBean = await this.mediaHelper.selectFile();
                break;
            case MediaOption.TakePhoto:
                mediaBean = await this.mediaHelper.takePhoto(getContext());
                break;
            default:
                break;
        }
        if (mediaBean) {
            this.mediaBean = mediaBean;
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
var MediaOption;
(function (MediaOption) {
    MediaOption[MediaOption["Picture"] = 0] = "Picture";
    MediaOption[MediaOption["File"] = 1] = "File";
    MediaOption[MediaOption["TakePhoto"] = 2] = "TakePhoto";
})(MediaOption || (MediaOption = {}));
class dialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.controller = undefined;
        this.__message = new ObservedPropertySimplePU('', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    setController(ctr) {
        this.controller = ctr;
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/StudyCheck.ets(191:5)");
            Column.width('100%');
            Column.backgroundColor(Color.Gray);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message);
            Text.debugLine("pages/StudyCheck.ets(192:7)");
            Text.fontSize(20);
            Text.height(40);
            Text.fontColor(Color.White);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new StudyCheck(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=StudyCheck.js.map