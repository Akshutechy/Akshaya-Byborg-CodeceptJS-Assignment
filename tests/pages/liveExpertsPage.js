const { I } = inject();

class LiveExpertsPage {
  constructor() {
    this.psychicNameText = 'div.thumb-data-item--name',
    this.allPsychicTile = '//article[contains(@class, "thumb thumb--modern")]',
    this.allPsychicProfilePicture = '//article[contains(@class, "thumb thumb--modern")]//img[contains(@class, "thumb-img")]',
    this.dataStatusAttribute = 'data-status',
    this.imageAttribute = 'src'
  }

  async isPsychicNamesUnique(){
    await I.waitForVisible(this.psychicNameText);
    const names = await I.grabTextFromAll(this.psychicNameText);
    const hasDuplicates = names.some((name, index) => names.indexOf(name) !== index);
    return !hasDuplicates;
  }

  async isPsychicLive() {
    const statuses = await I.grabAttributeFromAll(this.allPsychicTile,this.dataStatusAttribute);
    const isValid = statuses.every(status=>status!=='0');
    return isValid;
  }
  
  async isProfilePictureExists() {
    const imageSource = await I.grabAttributeFromAll(this.allPsychicProfilePicture,this.imageAttribute);
    const isValid = imageSource.every(src=>src!==null);
    return isValid;
  }

}

module.exports = new LiveExpertsPage();