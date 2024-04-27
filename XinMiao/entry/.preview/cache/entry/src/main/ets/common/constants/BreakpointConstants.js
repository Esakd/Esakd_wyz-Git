import BreakpointType from '@bundle:com.example.XinMiao/entry/ets/common/bean/BreanpointType';
export default class BreakpointConstants {
}
/**
 * 小屏幕设备的 Breakpoints 标记.
 */
BreakpointConstants.BREAKPOINT_SM = 'sm';
/**
 * 中等屏幕设备的 Breakpoints 标记.
 */
BreakpointConstants.BREAKPOINT_MD = 'md';
/**
 * 大屏幕设备的 Breakpoints 标记.
 */
BreakpointConstants.BREAKPOINT_LG = 'lg';
/**
 * 当前设备的 breakpoints 存储key
 */
BreakpointConstants.CURRENT_BREAKPOINT = 'currentBreakpoint';
/**
 * 小屏幕设备宽度范围.
 */
BreakpointConstants.RANGE_SM = '(320vp<=width<600vp)';
/**
 * 中屏幕设备宽度范围.
 */
BreakpointConstants.RANGE_MD = '(600vp<=width<840vp)';
/**
 * 大屏幕设备宽度范围.
 */
BreakpointConstants.RANGE_LG = '(840vp<=width)';
BreakpointConstants.BAR_POSITION = new BreakpointType({
    sm: BarPosition.End,
    md: BarPosition.Start,
    lg: BarPosition.Start,
});
//# sourceMappingURL=BreakpointConstants.js.map