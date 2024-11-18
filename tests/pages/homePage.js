const { I } = inject();

class HomePage {
  constructor() {
    this.acceptCookiesButton = '//button[contains(text(), "Accept Cookies")]',
    this.expertOrCategorySearchBar = '.toolbar-search-input',
    this.categoryOrTopicButton = (categoryOrTopicName)=> `//a[@class="sidebar-filters-link "][contains(text(),'${categoryOrTopicName}')]`,
    this.sessionTypeButton = 'label[for="filter4"]',
    this.liveExpertsButton = '//a[contains(text(),"Live Experts")]',
    this.searchResultText = 'ul.autosuggest .toolbar-autosuggest-suggestion',
    this.searchResultCount = 'li.toolbar-autosuggest-row',
    this.psychicTiles = '//div[@class="swiper-wrapper"]/article',
    this.specificPsychicTile = (psychicNumber)=> `//div[@class='swiper-wrapper']/article[${psychicNumber}]`,
    this.psychicDataStatus = 'data-status',
    this.livePsychicTile = (psychicNumber)=>`//div[@class='swiper-wrapper']/article[${psychicNumber}]/a`
  }
 
  async navigateToHomePage(){
    await I.amOnPage('/');
  }

  async clickAcceptCookies(){
    await I.waitForVisible(this.acceptCookiesButton);
    await I.click(this.acceptCookiesButton);
  }

  async fillTextInExpertOrCategorySearchBar(textToEnter){
    await I.waitForVisible(this.expertOrCategorySearchBar);
    await I.click(this.expertOrCategorySearchBar);
    await I.fillField(this.expertOrCategorySearchBar, textToEnter);
  }

  async clickCategoryOrTopic(categoryOrTopicText){
    await I.waitForVisible(this.categoryOrTopicButton(categoryOrTopicText));
    await I.click(this.categoryOrTopicButton(categoryOrTopicText));
  }

  async clickSessionType(){
    await I.waitForVisible(this.sessionTypeButton);
    await I.click(this.sessionTypeButton);
  }

  async clickLiveExpertsButton(){
    await I.waitForVisible(this.liveExpertsButton);
    await I.click(this.liveExpertsButton);
  }

  async getSearchResultText(){
    return await I.grabTextFrom(this.searchResultText);
  }

  async getSearchResultCount(){
    return await I.grabNumberOfVisibleElements(this.searchResultCount);
  }

  async selectLivePsychic(){
    const psychicCount = await I.grabNumberOfVisibleElements(this.psychicTiles);

  for (let i = 1; i <= psychicCount; i++) {
    const psychicLiveStatus = await I.grabAttributeFrom(this.specificPsychicTile(i), this.psychicDataStatus);
    if (psychicLiveStatus == 1) {
      const tileButton = this.livePsychicTile(i);
      I.click(tileButton);
      break;
    }
  }
  }

}

// For inheritance
module.exports = new HomePage();
