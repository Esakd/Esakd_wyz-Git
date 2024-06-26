import ItemCategory from '@bundle:com.example.XinMiao/entry/ets/viewmodel/ItemCategory';
/**
 * 食物类型的枚举
 */
var FoodCategoryEnum;
(function (FoodCategoryEnum) {
    /**
     * 主食
     */
    FoodCategoryEnum[FoodCategoryEnum["STAPLE"] = 0] = "STAPLE";
    /**
     * 蔬果
     */
    FoodCategoryEnum[FoodCategoryEnum["FRUIT"] = 1] = "FRUIT";
    /**
     * 肉蛋奶
     */
    FoodCategoryEnum[FoodCategoryEnum["MEAT"] = 2] = "MEAT";
    /**
     * 坚果
     */
    FoodCategoryEnum[FoodCategoryEnum["NUT"] = 3] = "NUT";
    /**
     * 其它
     */
    FoodCategoryEnum[FoodCategoryEnum["OTHER"] = 4] = "OTHER";
})(FoodCategoryEnum || (FoodCategoryEnum = {}));
/**
 * 食物类型数组
 */
let FoodCategories = [
    new ItemCategory(0, { "id": 16777269, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(1, { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(2, { "id": 16777255, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(3, { "id": 16777262, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(4, { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
];
/**
 * 运动类型枚举
 */
var WorkoutCategoryEnum;
(function (WorkoutCategoryEnum) {
    /**
     * 走路
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["WALKING"] = 0] = "WALKING";
    /**
     * 跑步
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["RUNNING"] = 1] = "RUNNING";
    /**
     * 骑行
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["RIDING"] = 2] = "RIDING";
    /**
     * 跳操
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["AEROBICS"] = 3] = "AEROBICS";
    /**
     * 游泳
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["SWIMMING"] = 4] = "SWIMMING";
    /**
     * 打球
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["BALLGAME"] = 5] = "BALLGAME";
    /**
     * 力量训练
     */
    WorkoutCategoryEnum[WorkoutCategoryEnum["STRENGTH"] = 6] = "STRENGTH";
})(WorkoutCategoryEnum || (WorkoutCategoryEnum = {}));
/**
 * 运动类型数组
 */
let WorkoutCategories = [
    new ItemCategory(0, { "id": 16777287, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(1, { "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(2, { "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(3, { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(4, { "id": 16777274, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(5, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
    new ItemCategory(6, { "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
];
export { FoodCategories, WorkoutCategories, FoodCategoryEnum, WorkoutCategoryEnum };
//# sourceMappingURL=ItemCategoryModel.js.map