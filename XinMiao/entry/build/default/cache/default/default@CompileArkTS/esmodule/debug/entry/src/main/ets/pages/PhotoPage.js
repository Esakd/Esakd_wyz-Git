import { MediaBean } from '@bundle:com.example.XinMiao/entry/ets/common/bean/MediaBean';
import { MediaHelper } from '@bundle:com.example.XinMiao/entry/ets/helper/MediaHelper';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__mediaBean = new ObservedPropertyObjectPU(new MediaBean(), this, "mediaBean");
        this.mediaHelper = new MediaHelper(getContext());
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.mediaBean !== undefined) {
            this.mediaBean = params.mediaBean;
        }
        if (params.mediaHelper !== undefined) {
            this.mediaHelper = params.mediaHelper;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__mediaBean.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__mediaBean.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get mediaBean() {
        return this.__mediaBean.get();
    }
    set mediaBean(newValue) {
        this.__mediaBean.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('选择图片');
            Text.textAlign(TextAlign.Center);
            Text.width(200);
            Text.fontSize(16);
            Text.padding(10);
            Text.margin(20);
            Text.border({ width: 0.5, color: '#ff38f84b', radius: 15 });
            Text.onClick(() => {
                this.handleClick(MediaOption.Picture);
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('选择文件');
            Text.textAlign(TextAlign.Center);
            Text.width(200);
            Text.fontSize(16);
            Text.padding(10);
            Text.margin(20);
            Text.border({ width: 0.5, color: '#ff38f84b', radius: 15 });
            Text.onClick(() => {
                this.handleClick(MediaOption.File);
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('拍照');
            Text.textAlign(TextAlign.Center);
            Text.width(200);
            Text.fontSize(16);
            Text.padding(10);
            Text.margin(20);
            Text.border({ width: 0.5, color: '#ff38f84b', radius: 15 });
            Text.onClick(() => {
                this.handleClick(MediaOption.TakePhoto);
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.width('100%');
            Divider.height(0.5);
            Divider.color('#ff99f6a2');
            Divider.margin({ top: 20 });
            Divider.padding({ left: 20, right: 20 });
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`文件名称: ${this.mediaBean.fileName ? this.mediaBean.fileName : ''}`);
            Text.textAlign(TextAlign.Center);
            Text.width('100%');
            Text.fontSize(16);
            Text.margin(10);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`文件大小: ${this.mediaBean.fileSize ? this.mediaBean.fileSize : ''}`);
            Text.textAlign(TextAlign.Center);
            Text.width('100%');
            Text.fontSize(16);
            Text.margin(10);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`文件类型: ${this.mediaBean.fileType ? this.mediaBean.fileType : ''}`);
            Text.textAlign(TextAlign.Center);
            Text.width('100%');
            Text.fontSize(16);
            Text.margin(10);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`文件Uri: ${this.mediaBean.localUrl ? this.mediaBean.localUrl : ''}`);
            Text.textAlign(TextAlign.Center);
            Text.width('100%');
            Text.fontSize(16);
            Text.margin(10);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.mediaBean.localUrl);
            Image.width(300);
            Image.height(300);
            Image.backgroundColor(Color.Grey);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        Row.pop();
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
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=PhotoPage.js.map