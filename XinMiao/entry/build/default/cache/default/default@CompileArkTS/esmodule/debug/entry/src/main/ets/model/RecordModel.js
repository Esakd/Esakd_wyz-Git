/**
 * 数据库建表语句
 */
import relationalStore from '@ohos:data.relationalStore';
import { ColumnType } from '@bundle:com.example.XinMiao/entry/ets/common/bean/ColumnInfo';
import DbUtil from '@bundle:com.example.XinMiao/entry/ets/common/utils/DbUtil';
const CREATE_TABLE_SQL = `
 CREATE TABLE IF NOT EXISTS record (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   type_id INTEGER NOT NULL,
   item_id INTEGER NOT NULL,
   amount DOUBLE NOT NULL,
   create_time INTEGER NOT NULL
 )
 `;
const COLUMNS = [
    { name: 'id', columnName: 'id', type: ColumnType.LONG },
    { name: 'typeId', columnName: 'type_id', type: ColumnType.LONG },
    { name: 'itemId', columnName: 'item_id', type: ColumnType.LONG },
    { name: 'amount', columnName: 'amount', type: ColumnType.DOUBLE },
    { name: 'createTime', columnName: 'create_time', type: ColumnType.LONG }
];
const TABLE_NAME = 'record';
const ID_COLUMN = 'id';
const DATE_COLUMN = 'create_time';
class RecordModel {
    getCreateTableSql() {
        return CREATE_TABLE_SQL;
    }
    insert(record) {
        return DbUtil.insert(TABLE_NAME, record, COLUMNS);
    }
    deleteById(id) {
        // 1.删除条件
        let predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates.equalTo(ID_COLUMN, id);
        // 2.删除
        return DbUtil.delete(predicates);
    }
    listByDate(date) {
        // 1.查询条件
        let predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates.equalTo(DATE_COLUMN, date);
        // 2.查询
        return DbUtil.queryForList(predicates, COLUMNS);
    }
}
let recordModel = new RecordModel();
export default recordModel;
//# sourceMappingURL=RecordModel.js.map