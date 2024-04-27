import GridItem from '@bundle:com.example.XinMiao/entry/ets/viewmodel/GridItem';
import VerifyItem from '@bundle:com.example.XinMiao/entry/ets/viewmodel/VerifyItem';
/**
 * Binds data to components and provides interfaces.
 */
export class WindowViewModel {
    /**
     * Get verify items map.
     *
     * @return {Map<number, VerifyItem>} verifyMap.
     */
    getVerifyMap() {
        let verifyMap = new Map();
        verifyMap.set(0, new VerifyItem({ "id": 16777444, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'XYZK'));
        verifyMap.set(1, new VerifyItem({ "id": 16777445, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'LHBR'));
        return verifyMap;
    }
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777398, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777400, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777402, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777403, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     *
     * @return {Array<GridItem>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            new GridItem({ "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777420, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777430, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777422, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777452, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777441, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777411, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777416, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777270, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777465, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" })
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<GridItem>} secondGridData.
     */
    getSecondGridData() {
        let secondGridData = [
            new GridItem({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777391, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/CycleControl'),
            new GridItem({ "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777389, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/TaskManagePage'),
            new GridItem({ "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777394, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/StudyCheck'),
            new GridItem({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777396, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/ForumListPage'),
            new GridItem({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777395, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/ForumCommunityPage'),
            new GridItem({ "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777397, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/HealthyPage'),
        ];
        return secondGridData;
    }
}
export default new WindowViewModel();
//# sourceMappingURL=WindowViewModel.js.map