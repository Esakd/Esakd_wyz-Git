import hilog from '@ohos:hilog';
const LOGGER_PREFIX = 'Heima_Healthy';
class Logger {
    /**
     * constructor.
     *
     * @param prefix Identifies the log tag.
     * @param domain Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFFF
     * @param args Indicates the log parameters.
     */
    constructor(prefix = '', domain = 0xFF00) {
        // format Indicates the log format string.
        this.format = '%{public}s, %{public}s';
        this.prefix = prefix;
        this.domain = domain;
    }
    debug(...args) {
        hilog.debug(this.domain, this.prefix, this.format, args);
    }
    info(...args) {
        hilog.info(this.domain, this.prefix, this.format, args);
    }
    warn(...args) {
        hilog.warn(this.domain, this.prefix, this.format, args);
    }
    error(...args) {
        hilog.error(this.domain, this.prefix, this.format, args);
    }
}
export default new Logger(LOGGER_PREFIX, 0xFF02);
//# sourceMappingURL=Logger_health.js.map