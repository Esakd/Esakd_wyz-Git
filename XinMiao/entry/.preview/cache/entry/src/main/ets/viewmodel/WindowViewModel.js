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
        verifyMap.set(0, new VerifyItem({ "id": 16777299, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'XYZK'));
        verifyMap.set(1, new VerifyItem({ "id": 16777276, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'LHBR'));
        return verifyMap;
    }
    /**
     * Get swiper image data.
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777401, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777264, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" },
            { "id": 16777306, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }
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
            new GridItem({ "id": 16777372, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777298, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777321, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777367, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777326, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777365, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777327, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777371, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777472, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777348, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777345, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777301, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }),
            new GridItem({ "id": 16777381, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777297, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" })
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
            new GridItem({ "id": 16777361, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777259, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777359, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/CycleControl'),
            new GridItem({ "id": 16777355, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777477, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777358, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/TaskManagePage'),
            new GridItem({ "id": 16777352, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777410, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777356, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/StudyCheck'),
            new GridItem({ "id": 16777353, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777272, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777357, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/ForumListPage'),
            new GridItem({ "id": 16777336, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777274, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777335, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/ForumCommunityPage'),
            new GridItem({ "id": 16777350, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, { "id": 16777349, "type": 10003, params: [], "bundleName": "com.example.XinMiao", "moduleName": "entry" }, 'pages/HealthyPage'),
        ];
        return secondGridData;
    }
}
export default new WindowViewModel();
//# sourceMappingURL=WindowViewModel.js.map