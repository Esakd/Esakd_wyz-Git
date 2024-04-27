/**
 * Verify item entity.
 */
export default class VerifyItem {
  /**
   * Image of verify item.
   */
  image: Resource;
  /**
   * Correct characters of verify item.
   */
  characters: string;

  constructor(image: Resource, characters: string) {
    this.image = image;
    this.characters = characters;
  }
}