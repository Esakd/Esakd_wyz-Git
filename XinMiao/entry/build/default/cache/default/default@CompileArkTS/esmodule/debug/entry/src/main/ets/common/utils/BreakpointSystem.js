import mediaQuery from '@ohos:mediaquery';
import BreakpointConstants from '@bundle:com.example.XinMiao/entry/ets/common/constants/BreakpointConstants';
export default class BreakpointSystem {
    constructor() {
        this.smListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_SM);
        this.mdListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_MD);
        this.lgListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_LG);
    }
    smListenerCallback(result) {
        if (result.matches) {
            this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_SM);
        }
    }
    mdListenerCallback(result) {
        if (result.matches) {
            this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_MD);
        }
    }
    lgListenerCallback(result) {
        if (result.matches) {
            this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_LG);
        }
    }
    updateCurrentBreakpoint(breakpoint) {
        AppStorage.SetOrCreate(BreakpointConstants.CURRENT_BREAKPOINT, breakpoint);
    }
    register() {
        this.smListener.on('change', this.smListenerCallback.bind(this));
        this.mdListener.on('change', this.mdListenerCallback.bind(this));
        this.lgListener.on('change', this.lgListenerCallback.bind(this));
    }
    unregister() {
        this.smListener.off('change', this.smListenerCallback.bind(this));
        this.mdListener.off('change', this.mdListenerCallback.bind(this));
        this.lgListener.off('change', this.lgListenerCallback.bind(this));
    }
}
//# sourceMappingURL=BreakpointSystem.js.map