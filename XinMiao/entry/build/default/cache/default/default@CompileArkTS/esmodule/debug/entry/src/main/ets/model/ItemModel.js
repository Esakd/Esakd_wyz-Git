import RecordItem from '@bundle:com.example.XinMiao/entry/ets/viewmodel/RecordItem';
import { FoodCategories, FoodCategoryEnum, WorkoutCategories, WorkoutCategoryEnum } from '@bundle:com.example.XinMiao/entry/ets/model/ItemCategoryModel';
import GroupInfo from '@bundle:com.example.XinMiao/entry/ets/viewmodel/GroupInfo';
const foods = [
    new RecordItem(0, '米饭', { "id": 16777461, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '碗', 209, 46.6, 4.7, 0.5),
    new RecordItem(1, '馒头', { "id": 16777464, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '个', 114, 24.0, 3.6, 0.6),
    new RecordItem(2, '面包', { "id": 16777375, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '个', 188, 35.2, 5.0, 3.1),
    new RecordItem(3, '全麦吐司', { "id": 16777472, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '片', 91, 15.5, 4.4, 1.3),
    new RecordItem(4, '紫薯', { "id": 16777459, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '个', 163, 42.0, 1.6, 0.4),
    new RecordItem(5, '煮玉米', { "id": 16777380, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.STAPLE, '根', 111, 22.6, 4.0, 1.2),
    new RecordItem(6, '黄瓜', { "id": 16777381, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.FRUIT, '根', 29, 5.3, 1.5, 0.4),
    new RecordItem(7, '蓝莓', { "id": 16777374, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.FRUIT, '盒', 71, 18.1, 0.9, 0.4),
    new RecordItem(8, '草莓', { "id": 16777466, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.FRUIT, '颗', 14, 3.1, 0.4, 0.1),
    new RecordItem(9, '火龙果', { "id": 16777455, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.FRUIT, '个', 100, 24.6, 2.2, 0.5),
    new RecordItem(10, '奇异果', { "id": 16777451, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.FRUIT, '个', 25, 8.4, 0.5, 0.3),
    new RecordItem(11, '煮鸡蛋', { "id": 16777384, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '个', 74, 0.1, 6.2, 5.4),
    new RecordItem(12, '煮鸡胸肉', { "id": 16777377, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '克', 1.15, 0.011, 0.236, 0.018),
    new RecordItem(13, '煮鸡腿肉', { "id": 16777378, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '克', 1.87, 0.0, 0.243, 0.092),
    new RecordItem(14, '牛肉', { "id": 16777373, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '克', 1.22, 0.0, 0.23, 0.033),
    new RecordItem(15, '鱼肉', { "id": 16777385, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '克', 1.04, 0.0, 0.206, 0.024),
    new RecordItem(16, '牛奶', { "id": 16777453, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '毫升', 0.66, 0.05, 0.03, 0.038),
    new RecordItem(17, '酸奶', { "id": 16777478, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.MEAT, '毫升', 0.7, 0.10, 0.032, 0.019),
    new RecordItem(18, '核桃', { "id": 16777473, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.NUT, '颗', 42, 1.2, 1.0, 3.8),
    new RecordItem(19, '花生', { "id": 16777454, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.NUT, '克', 3.13, 0.13, 0.12, 0.254),
    new RecordItem(20, '腰果', { "id": 16777376, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.NUT, '克', 5.59, 0.416, 0.173, 0.367),
    new RecordItem(21, '无糖拿铁', { "id": 16777379, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.OTHER, '毫升', 0.43, 0.044, 0.028, 0.016),
    new RecordItem(22, '豆浆', { "id": 16777463, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, FoodCategoryEnum.OTHER, '毫升', 0.31, 0.012, 0.030, 0.016),
];
const workouts = [
    new RecordItem(10000, '散步', { "id": 16777447, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.WALKING, '小时', 111),
    new RecordItem(10001, '快走', { "id": 16777447, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.WALKING, '小时', 343),
    new RecordItem(10002, '慢跑', { "id": 16777434, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.RUNNING, '小时', 472),
    new RecordItem(10003, '快跑', { "id": 16777434, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.RUNNING, '小时', 652),
    new RecordItem(10004, '自行车', { "id": 16777432, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.RIDING, '小时', 497),
    new RecordItem(10005, '动感单车', { "id": 16777432, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.RIDING, '小时', 587),
    new RecordItem(10006, '瑜伽', { "id": 16777405, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.AEROBICS, '小时', 172),
    new RecordItem(10007, '健身操', { "id": 16777405, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.AEROBICS, '小时', 429),
    new RecordItem(10008, '游泳', { "id": 16777439, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.SWIMMING, '小时', 472),
    new RecordItem(10009, '冲浪', { "id": 16777439, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.SWIMMING, '小时', 429),
    new RecordItem(10010, '篮球', { "id": 16777407, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.BALLGAME, '小时', 472),
    new RecordItem(10011, '足球', { "id": 16777418, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.BALLGAME, '小时', 515),
    new RecordItem(10012, '排球', { "id": 16777446, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.BALLGAME, '小时', 403),
    new RecordItem(10013, '羽毛球', { "id": 16777406, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.BALLGAME, '小时', 386),
    new RecordItem(10014, '乒乓球', { "id": 16777440, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.BALLGAME, '小时', 257),
    new RecordItem(10015, '哑铃飞鸟', { "id": 16777414, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.STRENGTH, '小时', 343),
    new RecordItem(10016, '哑铃卧推', { "id": 16777414, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.STRENGTH, '小时', 429),
    new RecordItem(10017, '仰卧起坐', { "id": 16777437, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, WorkoutCategoryEnum.STRENGTH, '小时', 515),
];
class ItemModel {
    getById(id, isFood = true) {
        return isFood ? foods[id] : workouts[id - 10000];
    }
    list(isFood = true) {
        return isFood ? foods : workouts;
    }
    listItemGroupByCategory(isFood = true) {
        // 1.判断要处理的是食物还是运动
        let categories = isFood ? FoodCategories : WorkoutCategories;
        let items = isFood ? foods : workouts;
        // 2.创建空的分组
        let groups = categories.map(itemCategory => new GroupInfo(itemCategory, []));
        // 3.遍历记录项列表，将食物添加到对应的分组
        items.forEach(item => groups[item.categoryId].items.push(item));
        // 4.返回结果
        return groups;
    }
}
let itemModel = new ItemModel();
export default itemModel;
//# sourceMappingURL=ItemModel.js.map