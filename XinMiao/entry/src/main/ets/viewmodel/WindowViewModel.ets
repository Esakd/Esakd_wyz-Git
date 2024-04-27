
import GridItem from './GridItem';
import VerifyItem from './VerifyItem';

/**
 * Binds data to components and provides interfaces.
 */
export class WindowViewModel {

  /**
   * Get verify items map.
   *
   * @return {Map<number, VerifyItem>} verifyMap.
   */
  getVerifyMap(): Map<number, VerifyItem> {
    let verifyMap: Map<number, VerifyItem> = new Map();
    verifyMap.set(0, new VerifyItem($r('app.media.ic_verity_character1'), 'XYZK'));
    verifyMap.set(1, new VerifyItem($r('app.media.ic_verity_character2'), 'LHBR'));
    return verifyMap;
  }

  /**
   * Get swiper image data.
   *
   * @return {Array<Resource>} swiperImages.
   */
  getSwiperImages(): Array<Resource> {
    let swiperImages: Resource[] = [
      $r('app.media.home_hike'),
      $r('app.media.home_onfoot'),
      $r('app.media.home_spring'),
      $r('app.media.home_study')
    ];
    return swiperImages;
  }

  /**
   * Get data of the first grid.
   *
   * @return {Array<GridItem>} firstGridData.
   */
  getFirstGridData(): Array<GridItem> {
    let firstGridData: GridItem[] = [
      new GridItem($r('app.string.my_love'), $r('app.media.ic_love')),
      new GridItem($r('app.string.history_record'), $r('app.media.ic_record')),
      new GridItem($r('app.string.message'), $r('app.media.ic_message')),
      new GridItem($r('app.string.major'), $r('app.media.major')),
      new GridItem($r('app.string.my_goal'), $r('app.media.ic_target')),
      new GridItem($r('app.string.group'), $r('app.media.ic_circle')),
      new GridItem($r('app.string.favorites'), $r('app.media.ic_favorite')),
      new GridItem($r('app.string.strategy'), $r('app.media.strategy'))
    ];
    return firstGridData;
  }

  /**
   * Get data of the second grid.
   *
   * @return {Array<GridItem>} secondGridData.
   */
  getSecondGridData(): Array<GridItem> {
    let secondGridData: GridItem[] = [
      new GridItem($r('app.string.home_top'), $r('app.media.grid_3'), $r('app.string.home_text_top'),'pages/CycleControl'),
      new GridItem($r('app.string.home_new'), $r('app.media.grid_10'), $r('app.string.home_text_new'),'pages/TaskManagePage'),
      new GridItem($r('app.string.home_brand'), $r('app.media.grid_6'), $r('app.string.home_text_brand'),'pages/StudyCheck'),
      new GridItem($r('app.string.home_found'), $r('app.media.grid_8'), $r('app.string.home_text_found'),'pages/ForumListPage'),
      new GridItem($r('app.string.Forumcommunity_label'), $r('app.media.grid_7'), $r('app.string.Forumcommunity_content'),'pages/ForumCommunityPage'),
      new GridItem($r('app.string.health_title'), $r('app.media.grid_9'), $r('app.string.health_context'),'pages/HealthyPage'),
    ];
    return secondGridData;
  }
}

export default new WindowViewModel();