class DateUtil {
    formatDate(num) {
        let date = new Date(num);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let m = month < 10 ? '0' + month : month;
        let d = day < 10 ? '0' + day : day;
        return `${year}/${m}/${d}`;
    }
    beginTimeOfDay(date) {
        let d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return d.getTime();
    }
}
let dateUtil = new DateUtil();
export default dateUtil;
//# sourceMappingURL=DateUtil.js.map