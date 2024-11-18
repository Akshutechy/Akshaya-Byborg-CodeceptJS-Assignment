const { I } = inject();

/**
 * HomePage class handles the locators and associated functions related to Home Page
 */
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
 
  /**
     * Navigates to the Home page
     */
  async navigateToHomePage(){
    await I.amOnPage('/');
  }

  /**
     * Clicks and Accepts cookies
     */
  async clickAcceptCookies(){
    await I.waitForVisible(this.acceptCookiesButton);
    await I.click(this.acceptCookiesButton);
  }

  /**
     * Fills the text in the Expert or Category Search Bar
     * @param {string} textToEnter - full or partial name of the Psychics
     */
  async fillTextInExpertOrCategorySearchBar(textToEnter){
    await I.waitForVisible(this.expertOrCategorySearchBar);
    await I.click(this.expertOrCategorySearchBar);
    await I.fillField(this.expertOrCategorySearchBar, textToEnter);
  }

  /**
     * Clicks on the category or topic
     * @param {string} categoryOrTopicText - name of the category or topic
     */
  async clickCategoryOrTopic(categoryOrTopicText){
    await I.waitForVisible(this.categoryOrTopicButton(categoryOrTopicText));
    await I.click(this.categoryOrTopicButton(categoryOrTopicText));
  }

  /**
     * Clicks on the Session type
     */
  async clickSessionType(){
    await I.waitForVisible(this.sessionTypeButton);
    await I.click(this.sessionTypeButton);
  }

  /**
     * Clicks on the Live Experts button under Session Type
     */
  async clickLiveExpertsButton(){
    await I.waitForVisible(this.liveExpertsButton);
    await I.click(this.liveExpertsButton);
  }

  /**
     * Gets the searched result text
     * @returns {Promise<string>} - returns the searched result text
     */
  async getSearchResultText(){
    return await I.grabTextFrom(this.searchResultText);
  }

  /**
     * Gets the searched result count
     * @returns {Promise<number>} - returns the searched result count
     */
  async getSearchResultCount(){
    return await I.grabNumberOfVisibleElements(this.searchResultCount);
  }

  /**
     * Selects the live Psychic
     */
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

module.exports = new HomePage();