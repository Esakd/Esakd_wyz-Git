/**
 * Common constants for all features.
 */
export default class CommonConstants {
  /**
   * Input length of the account.
   */
  static readonly INPUT_ACCOUNT_LENGTH: number = 11;

  /**
   *  Input length of the password.
   */
  static readonly INPUT_PASSWORD_LENGTH: number = 8;

  /**
   * Common Spacing of Components.
   */
  static readonly COMMON_SPACE: number = 12;

  /**
   * Login wait time.
   */
  static readonly LOGIN_WAIT_TIME: number = 2000;

  /**
   * Success page url.
   */
  static readonly SUCCESS_PAGE_URL: string = 'pages/SuccessPage';

  /**
   * Home page url.
   */
  static readonly HOME_PAGE_URL: string = 'pages/HomePage';

  /**
   * Login page url.
   */
  static readonly LOGIN_PAGE_URL: string = 'pages/LoginPage';

  /**
   * Verify page url.
   */
  static readonly VERIFY_PAGE_URL: string = 'pages/VerifyPage';

  /**
   * Home page url.
   */
  static readonly HOME_PAGE_ACTION: string = 'startHomePage';

  /**
   * Sub window name.
   */
  static readonly SUB_WINDOW_NAME: string = 'subWindow';

  /**
   * Status bar color.
   */
  static readonly STATUS_BAR_COLOR: string = '#F1F3F5';

  /**
   * Status bar content color.
   */
  static readonly STATUS_BAR_CONTENT_COLOR: string = '#000000';

  /**
   * Sub window width ratio in screen width.
   */
  static readonly SUB_WINDOW_WIDTH_RATIO: number = 0.93;

  /**
   * Sub window aspect ratio.
   */
  static readonly SUB_WINDOW_ASPECT_RATIO: number = 1.5;

  /**
   * The width or height of the component is spread across the parent component.
   */
  static readonly FULL_PARENT: string = '100%';

  /**
   * The width of button.
   */
  static readonly BUTTON_WIDTH: string = '86.7%';

  /**
   * The columns is four.
   */
  static readonly GRID_FOUR_COLUMNS: string = '1fr 1fr 1fr 1fr';

  /**
   * The row is two.
   */
  static readonly GRID_TWO_ROWS: string = '1fr 1fr';

  /**
   * The columns is two.
   */
  static readonly GRID_TWO_COLUMNS: string = '1fr 1fr';

  /**
   * The row is four.
   */
  static readonly GRID_THREE_ROWS: string = '1fr 1fr 1fr';
}
export class CommonConstants_health {
  static readonly RDB_NAME: string = 'HealthyLife.db'; // db name

  // THOUSANDTH
  static readonly THOUSANDTH_15: string = '1.5%'; // ‘1.5%’
  static readonly THOUSANDTH_12: string = '2.2%'; // ‘2.2%’
  static readonly THOUSANDTH_33: string = '3.3%'; // ‘3.3%’
  static readonly THOUSANDTH_50: string = '5%'; // ‘5%’
  static readonly THOUSANDTH_66: string = '6.6%'; // ‘6.6%’
  static readonly THOUSANDTH_80: string = '8%'; // ‘8%’
  static readonly THOUSANDTH_100: string = '10%'; // ‘10%’
  static readonly THOUSANDTH_120: string = '12%'; // ‘12%’
  static readonly THOUSANDTH_160: string = '16%'; // ‘16%’
  static readonly THOUSANDTH_400: string = '40%'; // ‘40%’
  static readonly THOUSANDTH_420: string = '42%'; // ‘42%’
  static readonly THOUSANDTH_500: string = '50%'; // ‘50%’
  static readonly THOUSANDTH_560: string = '56%'; // ‘56%’
  static readonly THOUSANDTH_800: string = '80%'; // ‘80%’
  static readonly THOUSANDTH_830: string = '83%'; // ‘83%’
  static readonly THOUSANDTH_880: string = '88%'; // ‘88%’
  static readonly THOUSANDTH_900: string = '90%'; // ‘90%’
  static readonly THOUSANDTH_940: string = '94%'; // ‘90%’
  static readonly THOUSANDTH_1000: string = '100%'; // ‘100%’

  static readonly DEFAULT_2: number = 2;

  static readonly DEFAULT_6: number = 6;

  static readonly DEFAULT_8: number = 8;

  static readonly DEFAULT_12: number = 12;

  static readonly DEFAULT_10: number = 10;

  static readonly DEFAULT_16: number = 16;

  static readonly DEFAULT_18: number = 18;

  static readonly DEFAULT_20: number = 20;

  static readonly DEFAULT_24: number = 24;

  static readonly DEFAULT_28: number = 28;

  static readonly DEFAULT_32: number = 32;

  static readonly DEFAULT_48: number = 48;

  static readonly DEFAULT_56: number = 56;

  static readonly DEFAULT_60: number = 60;

  static readonly DEFAULT_100: number = 100;

  static readonly DEFAULT_180: number = 180;

  // fontWeight
  static readonly FONT_WEIGHT_400: number = 400;

  static readonly FONT_WEIGHT_500: number = 500;

  static readonly FONT_WEIGHT_600: number = 600;

  static readonly FONT_WEIGHT_700: number = 700;

  static readonly FONT_WEIGHT_900: number = 900;

  // opacity
  static readonly OPACITY_4: number = 0.4;

  static readonly OPACITY_6: number = 0.6;

  // radius
  static readonly BORDER_RADIUS_PERCENT_50: string = '50%';

  // duration
  static readonly DURATION_1000: number = 1000; // 1000ms
  static readonly DURATION_800: number = 800; // 700ms
  static readonly DURATION_100: number = 100; // 100ms

  // space
  static readonly SPACE_2: number = 2;

  static readonly SPACE_4: number = 4;

  static readonly SPACE_6: number = 6;

  static readonly SPACE_8: number = 8;

  static readonly SPACE_10: number = 10;

  static readonly SPACE_12: number = 12;

  // global data key
  static readonly H_STORE: string = 'HeimaHealthyStore';

  static readonly RECORD_DATE: string = 'selectedDate';

  static readonly PACKAGE_NAME: string = 'com.itheima.healthylife';

  static readonly ENTRY_ABILITY: string = 'EntryAbility';

  /**
   * 当前用户推荐的每日摄入热量上限，单位：卡路里
   */
  static readonly RECOMMEND_CALORIE: number = 1962

  /**
   * 当前用户推荐的每日摄入碳水上限，单位：克
   */
  static readonly RECOMMEND_CARBON: number = 237

  /**
   * 当前用户推荐的每日摄入蛋白质上限，单位：克
   */
  static readonly RECOMMEND_PROTEIN: number = 68

  /**
   * 当前用户推荐的每日摄入脂肪上限，单位：克
   */
  static readonly RECOMMEND_FAT: number = 53
}

