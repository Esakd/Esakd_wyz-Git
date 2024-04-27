/**
 * Grid item data entity.
 */
export default class GridItem {
  /**
   * Title of grid item.
   */
  title: Resource;
  /**
   * Image of grid item.
   */
  image: Resource = $r('app.media.ic_love');
  /**
   * Other resource of grid item.
   */
  others?: Resource;

  url ?: string;

  constructor(title: Resource, image: Resource, others?: Resource,url?:string) {
    this.title = title;
    this.image = image;
    this.others = others;
    this.url = url;
  }
}