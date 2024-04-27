/**
 * 饮食记录中的记录项，可以是食物或运动
 */
export default class RecordItem {
    constructor(id, name, image, categoryId, unit, calorie, carbon = 0, protein = 0, fat = 0) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.categoryId = categoryId;
        this.unit = unit;
        this.calorie = calorie;
        this.protein = protein;
        this.fat = fat;
        this.carbon = carbon;
    }
}
//# sourceMappingURL=RecordItem.js.map