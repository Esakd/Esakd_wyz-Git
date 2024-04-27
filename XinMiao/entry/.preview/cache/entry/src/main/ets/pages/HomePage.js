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
            Text.debugLine("pages/HomePage.ets(17:5)");
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
            Navigation.debugLine("pages/HomePage.ets(23:5)");
            Navigation.title({ builder: () => {
                    this.NavigationTitle.call(this);
                } });
            Navigation.hideBackButton(true);
            Navigation.backgroundColor({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            if (!isInitialRender) {
                Navigation.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/HomePage.ets(24:7)");
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                left: { "id": 16777431, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                right: { "id": 16777431, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COMMON_SPACE });
            Column.debugLine("pages/HomePage.ets(25:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Swiper.create(this.swiperController);
            Swiper.debugLine("pages/HomePage.ets(26:11)");
            Swiper.margin({
                top: { "id": 16777434, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
                    Image.debugLine("pages/HomePage.ets(28:15)");
                    Image.borderRadius({ "id": 16777433, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
            Grid.debugLine("pages/HomePage.ets(38:11)");
            Grid.columnsTemplate(CommonConstants.GRID_FOUR_COLUMNS);
            Grid.rowsTemplate(CommonConstants.GRID_TWO_ROWS);
            Grid.columnsGap({ "id": 16777424, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.padding({
                top: { "id": 16777426, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                bottom: { "id": 16777426, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
            });
            Grid.height({ "id": 16777425, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777417, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
                        GridItem.debugLine("pages/HomePage.ets(40:15)");
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
                            Column.debugLine("pages/HomePage.ets(41:17)");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(firstItem.image);
                            Image.debugLine("pages/HomePage.ets(42:19)");
                            Image.width({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.height({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(firstItem.title);
                            Text.debugLine("pages/HomePage.ets(45:19)");
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777428, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
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
                            Column.debugLine("pages/HomePage.ets(41:17)");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(firstItem.image);
                            Image.debugLine("pages/HomePage.ets(42:19)");
                            Image.width({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Image.height({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(firstItem.title);
                            Text.debugLine("pages/HomePage.ets(45:19)");
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.margin({ top: { "id": 16777428, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
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
            Text.create({ "id": 16777354, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Text.debugLine("pages/HomePage.ets(64:11)");
            Text.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
            Grid.debugLine("pages/HomePage.ets(70:11)");
            Grid.width(CommonConstants.FULL_PARENT);
            Grid.height({ "id": 16777432, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.columnsTemplate(CommonConstants.GRID_TWO_COLUMNS);
            Grid.rowsTemplate(CommonConstants.GRID_THREE_ROWS);
            Grid.columnsGap({ "id": 16777424, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
            Grid.margin({ bottom: { "id": 16777423, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
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
                            top: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
                            left: { "id": 16777430, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
                        });
                        GridItem.borderRadius({ "id": 16777422, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
                        GridItem.debugLine("pages/HomePage.ets(72:15)");
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
                            Column.debugLine("pages/HomePage.ets(73:17)");
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.debugLine("pages/HomePage.ets(74:19)");
                            Text.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
                            Text.debugLine("pages/HomePage.ets(77:19)");
                            Text.margin({ top: { "id": 16777418, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
                            Column.debugLine("pages/HomePage.ets(73:17)");
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.debugLine("pages/HomePage.ets(74:19)");
                            Text.fontSize({ "id": 16777456, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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
                            Text.debugLine("pages/HomePage.ets(77:19)");
                            Text.margin({ top: { "id": 16777418, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777227, "type": 10001, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" });
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