import DateUtil from '@bundle:com.example.XinMiao/entry/ets/common/utils/DateUtil';
import ItemModel from '@bundle:com.example.XinMiao/entry/ets/model/ItemModel';
import RecordModel from '@bundle:com.example.XinMiao/entry/ets/model/RecordModel';
import { RecordTypeEnum, RecordTypes } from '@bundle:com.example.XinMiao/entry/ets/model/RecordTypeModel';
import GroupInfo from '@bundle:com.example.XinMiao/entry/ets/viewmodel/GroupInfo';
import StatsInfo from '@bundle:com.example.XinMiao/entry/ets/viewmodel/StatsInfo';
class RecordService {
    /**
     * 新增饮食记录
     * @param typeId 记录类型id
     * @param itemId 记录项id
     * @param amount 记录项数量（食物量、运动时长）
     * @returns 新增数量
     */
    insert(typeId, itemId, amount) {
        // 1.获取时间
        let createTime = (AppStorage.Get('selectedDate') || DateUtil.beginTimeOfDay(new Date()));
        // 2.新增
        return RecordModel.insert({ typeId, itemId, amount, createTime });
    }
    /**
     * 根据id删除饮食记录
     * @param id 记录id
     * @returns 删除条数
     */
    deleteById(id) {
        return RecordModel.deleteById(id);
    }
    /**
     * 根据日期查询饮食记录列表
     * @param date 要查询的日期
     * @returns 记录列表
     */
    async queryRecordByDate(date) {
        // 1.查询数据库的RecordPO
        let rps = await RecordModel.listByDate(date);
        // 2.将RecordPO转为RecordVO
        return rps.map(rp => {
            // 2.1.获取po中的基本属性
            let rv = { id: rp.id, typeId: rp.typeId, amount: rp.amount };
            // 2.2.查询记录项
            rv.recordItem = ItemModel.getById(rp.itemId, rp.typeId !== RecordTypeEnum.WORKOUT);
            // 2.3.计算热量
            rv.calorie = rp.amount * rv.recordItem.calorie;
            return rv;
        });
    }
    /**
     * 根据记录列表信息统计出热量、营养素信息
     * @param records 饮食记录列表
     * @returns 热量、营养素信息
     */
    calculateStatsInfo(records) {
        // 1.准备结果
        let info = new StatsInfo();
        if (!records || records.length <= 0) {
            return info;
        }
        // 2.计算统计数据
        records.forEach(r => {
            if (r.typeId === RecordTypeEnum.WORKOUT) {
                // 运动，累加消耗热量
                info.expend += r.calorie;
            }
            else {
                // 食物，累加摄入热量、蛋白质、碳水、脂肪
                info.intake += r.calorie;
                info.carbon += r.recordItem.carbon;
                info.protein += r.recordItem.protein;
                info.fat += r.recordItem.fat;
            }
        });
        // 3.返回
        return info;
    }
    /**
     * 将记录列表按照记录类型分组
     * @param records 记录列表
     * @returns 分组记录信息
     */
    calculateGroupInfo(records) {
        // 1.创建空的记录类型分组
        let groups = RecordTypes.map(recordType => new GroupInfo(recordType, []));
        if (!records || records.length <= 0) {
            return groups;
        }
        // 2.遍历所有饮食记录，
        records.forEach(record => {
            // 2.1.把每个记录存入其对应类型的分组中
            groups[record.typeId].items.push(record);
            // 2.2.计算该组的总热量
            groups[record.typeId].calorie += record.calorie;
        });
        return groups;
    }
}
let recordService = new RecordService();
export default recordService;
//# sourceMappingURL=RecordService.js.map