//导入位置服务模块
import geoLocationManager from '@ohos:geoLocationManager';
//导入自定义的权限检查模块
import Check_Access from '@bundle:com.example.XinMiao/entry/ets/Service/Detector';
//定义结点的标签
const TAG_NODE0 = '------[Geo-Node0] ';
const TAG_NODE1 = '------[Geo-Node1] ';
const TAG_NODE2 = '------[Geo-Node2] ';
/*
 *结点函数1:获取用户设备当前所处位置的经度和纬度数据
 */
async function Node1_Get_Geographical_Position() {
    //预定义返回值
    let output = {
        'position_x': null,
        'position_y': null,
        'position_z': null,
        'cityName': ' 未知',
        'speed': null,
        //结点函数的执行状态，默认为失败
        'isFinished': false,
        'error': '无'
    };
    //检查定位功能是否可用
    if (!geoLocationManager.isLocationEnabled()) {
        console.info(TAG_NODE1 + 'Location module loads fail');
        output.error = '定位功能不可用, 请检查设备或服务器';
        return;
    }
    //定义需要输入的请求参数
    let requestInfo = { 'priority': 0x203, 'scenario': 0x300, 'maxAccuracy': 0 };
    //等待模块完成获取地理位置的异步操作
    await geoLocationManager.getCurrentLocation(requestInfo).then((result) => {
        console.info(TAG_NODE1 + 'Succeed! Current location => latitude: ' + result.latitude + '; longitude: ' + result.longitude + ';');
        //记录获取的地理信息
        output.position_x = result.latitude;
        output.position_y = result.longitude;
        output.position_z = result.altitude;
        output.speed = result.speed;
        //结点函数的执行状态修改为成功
        output.isFinished = true;
    }).catch((error) => {
        console.error(TAG_NODE1 + 'Get current location failed, error: ' + JSON.stringify(error));
        output.error = '地理位置获取失败';
    });
    return output;
}
/*
 *结点函数2:获取用户设备当前所处的城市名称（中文）
 */
async function Node2_Get_City_Name(input) {
    //预定义返回值
    let output = {
        'cityName': ' 未知',
        'position_x': input.position_x,
        'position_y': input.position_y,
        'position_z': input.position_z,
        'speed': input.speed,
        //结点函数的执行状态，默认为失败
        'isFinished': false,
        'error': '无'
    };
    //判断逆地理编码转换服务是否可用
    if (!geoLocationManager.isGeocoderAvailable()) {
        console.error(TAG_NODE2 + 'Geocoder module loads fail');
        output.error = '地理编码转化功能不可用';
        return output;
    }
    //定义需要输入的请求参数,其中locale键对应的值’zh‘表示服务器将返回中文形式的信息
    let reverseGeocodeRequest = { 'locale': 'zh', "latitude": input.position_x, "longitude": input.position_y, "maxItems": 1 };
    //等待模块完成逆地理编码转换的异步操作
    await geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest).then((result) => {
        console.info(TAG_NODE2 + 'City name : ' + result[0].locality);
        //记录获取的城市名
        let cityName = result[0].locality;
        if (cityName.charAt(cityName.length - 1) == '市')
            cityName.replace('市', '');
        output.cityName = cityName;
        //结点函数的执行状态修改为成功
        output.isFinished = true;
    }).catch((error) => {
        console.error(TAG_NODE2 + 'Get addresses from location: error: ' + JSON.stringify(error));
        output.error = '逆地理编码转换失败';
    });
    return output;
}
//导出可供调用的接口
export async function Get_Geo_Data() {
    //模块结点0
    if (!Check_Access()) {
        console.error(TAG_NODE0 + 'Insufficient required permissions');
        return {
            'position_x': null,
            'position_y': null,
            'position_z': null,
            'cityName': ' 未知',
            'speed': null,
            'isFinished': false,
            'error': '设备未获取相关权限'
        };
    }
    //模块结点1
    let output = await Node1_Get_Geographical_Position();
    if (!output.isFinished)
        return output;
    //模块结点2
    return await Node2_Get_City_Name(output);
}
//# sourceMappingURL=Geo.js.map