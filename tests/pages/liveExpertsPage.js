const { I } = inject();

/**
 * LiveExpertsPage class handles the locators and associated functions related to Live Experts Page
 */
class LiveExpertsPage {
  constructor() {
    this.psychicNameText = 'div.thumb-data-item--name',
    this.allPsychicTile = '//article[contains(@class, "thumb thumb--modern")]',
    this.allPsychicProfilePicture = '//article[contains(@class, "thumb thumb--modern")]//img[contains(@class, "thumb-img")]',
    this.dataStatusAttribute = 'data-status',
    this.imageAttribute = 'src'
  }

  /**
     * Checks whether all the Psychic names are unique in the page
     * @returns {boolean} - returns Psychic names are unique or not
     */
  async isPsychicNamesUnique(){
    await I.waitForVisible(this.psychicNameText);
    const names = await I.grabTextFromAll(this.psychicNameText);
    const hasDuplicates = names.some((name, index) => names.indexOf(name) !== index);
    return !hasDuplicates;
  }

  /**
     * Checks whether all the Psychics are live in the page
     * @returns {boolean} - returns live or not for all the psychichs in the page
     */
  async isPsychicLive() {
    const statuses = await I.grabAttributeFromAll(this.allPsychicTile,this.dataStatusAttribute);
    const isValid = statuses.every(status=>status!=='0');
    return isValid;
  }
  
  /**
     * Checks whether the Profile picture exists for all the psychics in the page
     * @returns {boolean} - returns profile picture is there or not for all the psychics in the page
     */
  async isProfilePictureExists() {
    const imageSource = await I.grabAttributeFromAll(this.allPsychicProfilePicture,this.imageAttribute);
    const isValid = imageSource.every(src=>src!==null);
    return isValid;
  }

}

module.exports = new LiveExpertsPage();