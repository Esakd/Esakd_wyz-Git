import RecordType from '@bundle:com.example.XinMiao/entry/ets/viewmodel/RecordType';
var RecordTypeEnum;
(function (RecordTypeEnum) {
    /**
     * 早餐
     */
    RecordTypeEnum[RecordTypeEnum["BREAKFAST"] = 0] = "BREAKFAST";
    /**
     * 午餐
     */
    RecordTypeEnum[RecordTypeEnum["LUNCH"] = 1] = "LUNCH";
    /**
     * 晚餐
     */
    RecordTypeEnum[RecordTypeEnum["DINNER"] = 2] = "DINNER";
    /**
     * 加餐
     */
    RecordTypeEnum[RecordTypeEnum["EXTRA_MEAL"] = 3] = "EXTRA_MEAL";
    /**
     * 运动
     */
    RecordTypeEnum[RecordTypeEnum["WORKOUT"] = 4] = "WORKOUT";
})(RecordTypeEnum || (RecordTypeEnum = {}));
/**
 * 记录类型常量
 */
const RecordTypes = [
    new RecordType(0, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777409, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 423, 592),
    new RecordType(1, { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777421, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 592, 761),
    new RecordType(2, { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777413, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 423, 592),
    new RecordType(3, { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777415, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 0, 169),
    new RecordType(4, { "id": 16777289, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777448, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
];
export { RecordTypes, RecordTypeEnum };
//# sourceMappingURL=RecordTypeModel.js.map