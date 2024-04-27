import relationalStore from '@ohos:data.relationalStore';
class TaskModel {
    constructor() {
        this.tableName = 'TASK';
    }
    //初始化
    initTaskDB(context) {
        const config = {
            name: 'MyApplication.db',
            securityLevel: relationalStore.SecurityLevel.S1
        };
        // 初始化SQL语句
        const sql = `CREATE TABLE IF NOT EXISTS TASK (
                  ID INTEGER PRIMARY KEY AUTOINCREMENT,
                  NAME TEXT NOT NULL,
                  FINISHED bit
                 )`;
        relationalStore.getRdbStore(context, config, (err, rdbStore) => {
            if (err) {
                console.log('testTag', '获取rdbStore失败！');
                return;
            }
            rdbStore.executeSql(sql);
            console.log('testTag', '创建task表成功！');
            this.rdbStore = rdbStore;
        });
    }
    //查询任务列表
    async getTaskList() {
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        let result = await this.rdbStore.query(predicates, ['ID', 'NAME', 'FINISHED']);
        // 组装最终的查询结果
        let tasks = [];
        while (!result.isAtLastRow) {
            result.goToNextRow();
            let id = result.getLong(result.getColumnIndex('ID'));
            let name = result.getString(result.getColumnIndex('NAME'));
            let finished = result.getLong(result.getColumnIndex('FINISHED'));
            tasks.push({ id, name, finished: !!finished });
        }
        console.log('testTag', '查询到数据：', JSON.stringify(tasks));
        return tasks;
    }
    //新增
    addTask(name) {
        return this.rdbStore.insert(this.tableName, { name, finished: false });
    }
    //更新
    updateTaskStatus(id, finished) {
        let data = { finished };
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        predicates.equalTo('ID', id);
        return this.rdbStore.update(data, predicates);
    }
    //删除
    deleteTaskById(id) {
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        predicates.equalTo('ID', id);
        return this.rdbStore.delete(predicates);
    }
}
let taskModel = new TaskModel();
export default taskModel;
//# sourceMappingURL=TaskModel.js.map