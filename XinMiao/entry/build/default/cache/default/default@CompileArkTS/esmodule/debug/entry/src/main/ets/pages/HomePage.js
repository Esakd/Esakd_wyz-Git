import router from '@ohos:router';
import CommonConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/CommonConstants';
import WindowViewModel from '@bundle:com.example.XinMiao/entry/ets/viewmodel/WindowViewModel';
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.swiperController = new SwiperController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
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
    NavigationTitle(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('Welcome ,  新苗同学');
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize(50);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigation.create();
            Navigation.title({ builder: () => {
                    this.NavigationTitle.call(this);
                } });
            Navigation.hideBackButton(true);
            Navigation.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Navigation.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                left: { "id": 16777331, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777331, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COMMON_SPACE });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create(this.swiperController);
            Swiper.margin({
                top: { "id": 16777334, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Swiper.autoPlay(true);
            if (!isInitialRender) {
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const img = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(img);
                    Image.borderRadius({ "id": 16777333, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                    Image.interpolation(ImageInterpolation.High);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, WindowViewModel.getSwiperImages(), forEachItemGenFunction, (img, index) => index + JSON.stringify(img.id), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create();
            Grid.columnsTemplate(CommonConstants.GRID_FOUR_COLUMNS);
            Grid.rowsTemplate(CommonConstants.GRID_TWO_ROWS);
            Grid.columnsGap({ "id": 16777324, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777327, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.padding({
                top: { "id": 16777326, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777326, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Grid.height({ "id": 16777325, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const firstItem = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(firstItem.image);
                            Image.width({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.height({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(firstItem.title);
                            Text.fontSize({ "id": 16777342, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777328, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(firstItem.image);
                            Image.width({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.height({ "id": 16777329, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(firstItem.title);
                            Text.fontSize({ "id": 16777342, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777328, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, WindowViewModel.getFirstGridData(), forEachItemGenFunction, (firstItem, index) => index + JSON.stringify(firstItem), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.width(CommonConstants.FULL_PARENT);
            Text.margin({ top: 5, left: 15 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Grid.create();
            Grid.width(CommonConstants.FULL_PARENT);
            Grid.height({ "id": 16777332, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.columnsTemplate(CommonConstants.GRID_TWO_COLUMNS);
            Grid.rowsTemplate(CommonConstants.GRID_THREE_ROWS);
            Grid.columnsGap({ "id": 16777324, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777327, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.margin({ bottom: { "id": 16777323, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
            if (!isInitialRender) {
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const secondItem = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        GridItem.padding({
                            top: { "id": 16777330, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                            left: { "id": 16777330, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
                        });
                        GridItem.borderRadius({ "id": 16777322, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                        GridItem.align(Alignment.TopStart);
                        GridItem.backgroundImage(secondItem.image);
                        GridItem.backgroundImageSize(ImageSize.Cover);
                        GridItem.width(CommonConstants.FULL_PARENT);
                        GridItem.height(CommonConstants.FULL_PARENT);
                        GridItem.onClick(() => {
                            router.pushUrl({
                                url: secondItem.url
                            }, router.RouterMode.Single, Error => {
                                if (Error) {
                                    console.log('路由失败,errCode:' + Error.code + ' errMsg:' + Error.message);
                                }
                            });
                        });
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Medium);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777318, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777342, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777294, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Medium);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777318, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777342, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777294, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, WindowViewModel.getSecondGridData(), forEachItemGenFunction, (secondItem, index) => index + JSON.stringify(secondItem), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Grid.pop();
        Column.pop();
        Scroll.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HomePage.js.map