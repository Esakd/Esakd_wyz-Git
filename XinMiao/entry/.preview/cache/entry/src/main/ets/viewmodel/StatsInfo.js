export default class StatsInfo {
    constructor(intake = 0, expend = 0, carbon = 0, protein = 0, fat = 0) {
        /**
         * 当日摄入卡路里总量
         */
        this.intake = 0;
        /**
         * 当日运动消耗能量
         */
        this.expend = 0;
        /**
         * 当日摄入碳水总量
         */
        this.carbon = 0;
        /**
         * 当日摄入蛋白总量
         */
        this.protein = 0;
        /**
         * 当日摄入脂肪总量
         */
        this.fat = 0;
        this.intake = intake;
        this.expend = expend;
        this.carbon = carbon;
        this.protein = protein;
        this.fat = fat;
    }
}
//# sourceMappingURL=StatsInfo.js.map